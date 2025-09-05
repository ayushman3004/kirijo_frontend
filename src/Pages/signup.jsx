import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendOtp, verifyOtp, signup } from "../api/auth";
import RevealOnScroll from "../Helper/Animations";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle signup (send OTP first)
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await sendOtp(formData.email);
      console.log(res);
      
      if (res?.success) {
        console.log("OTP Sent:", res.data);
        setOtpSent(true);
      } else {
        console.log("Failed to send OTP", res.data);
      }
    } catch (error) {
      console.error("Error sending OTP:", error.response?.data || error.message);
    }
  };

  // Function to verify OTP
  const verifyOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOtp(formData.email,formData.otp,);
      console.log(res);
      
      if (res?.success) {
        console.log("OTP verified:", res);

        // now actually signup
        const signupRes = await signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if(signupRes){
        console.log("Signup complete:", signupRes.data);
        
      }
      } else {
        console.log("OTP verification failed", res.data);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9CDFF] relative">
      <Link to="/" className="absolute top-4 left-4 bg-transparent border border-gray-700/30 text-gray-800 px-4 py-2 rounded-full hover:bg-white/40 hover:border-gray-700/40 transition">Back to Home</Link>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <RevealOnScroll>
        {/* Signup Form */}
        <form onSubmit={sendOtpHandler} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CDFF] focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CDFF] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CDFF] focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F9CDFF] text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
          >
            {otpSent ? "Resend OTP" : "Send OTP"}
          </button>
        </form>
        </RevealOnScroll>
        {/* OTP Form (shown only if otpSent is true) */}
        {otpSent && (
          <div className="mt-4">
            <form onSubmit={verifyOtpHandler} className="space-y-3">
              <label className="block text-gray-700 font-medium mb-1">
                OTP
              </label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CDFF] focus:outline-none"
                placeholder="Enter OTP"
              />
              <button
                type="submit"
                className="w-full bg-green-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Verify OTP
              </button>
            </form>
          </div>
        )}

        {/* Switch to Login */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#F9CDFF] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
