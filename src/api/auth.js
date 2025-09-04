// src/api/auth.js
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api", // your backend base URL
  withCredentials: true, // so cookies (JWT) are sent
});

// 1. Send OTP to email
export const sendOtp = async (email) => {
  const res = await api.post("/auth/email-verification-otp-sending", { email });
  return res.data;
};

// 2. Verify OTP
export const verifyOtp = async (email, otp) => {
  const res = await api.post("/auth/email-otp-verification", { email, otp });
  return res.data;
};

// 3. Signup (only after OTP verified)
export const signup = async ({ email, name, password }) => {
  const res = await api.post("/auth/signup", { email, name, password });
  return res.data;
};

// 4. Login
export const login = async ({ email, password }) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

// 5. Logout
export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};
