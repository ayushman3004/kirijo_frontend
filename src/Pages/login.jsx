import React, { useState } from "react";
import { Link } from "react-router-dom";
import {login} from "../api/auth"
import RevealOnScroll from "../Helper/Animations";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    try {
      const res = await login({ 
  email: formData.email, 
  password: formData.password 
});

console.log(res);

    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[#F9CDFF] relative">
      <Link to="/" className="absolute top-4 left-4 bg-transparent border border-gray-700/30 text-gray-800 px-4 py-2 rounded-full hover:bg-white/40 hover:border-gray-700/40 transition">Back to Home</Link>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <RevealOnScroll>
        <form onSubmit={loginHandler} className="space-y-5">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CDFF] focus:outline-none"
              placeholder="Enter your email"
              required
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CDFF] focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F9CDFF] text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
        </RevealOnScroll>

        {/* Switch to SignUp */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#F9CDFF] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    
  );
}

export default Login;
