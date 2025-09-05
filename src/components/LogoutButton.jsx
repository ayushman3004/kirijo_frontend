// src/components/LogoutButton.jsx
import React from "react";
import { logout } from "../api/auth";

function LogoutButton() {
  const handleLogout = async () => {
    try {
      const res = await logout(); // calls /auth/logout
      console.log(res);
      
      if (res.status) {
        console.log("Logged out successfully!");
        // Optionally redirect to login page
        
      } else {
        console.log(res.message || "Logout failed.");
      }
    } catch (err) {
      console.error("Error logging out:", err);
      console.log("Something went wrong during logout.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
