"use client";

import { login } from "@/store/Action";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const dispatch = useDispatch();


  const handleRegister = () => {
    dispatch(login({email, password}, role));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login Account
        </h2>

        {/* Role selection */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Login As</p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
                className="accent-blue-500"
              />
              <span className="text-gray-700">Student</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === "teacher"}
                onChange={() => setRole("teacher")}
                className="accent-purple-600"
              />
              <span className="text-gray-700">Teacher</span>
            </label>
          </div>
        </div>

        {/* Email & OTP */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Password Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Create a password"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
