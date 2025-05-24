"use client";

import { otpSend, register } from "@/store/Action";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Register() {
  const dispatch = useDispatch();
  const [role, setRole] = useState("student");

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      otp: Yup.string().required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(
        register(
          {
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            verificationCode: values.otp,
          },
          role
        )
      );
    },
  });

  const handleSendOtp = () => {
    if (formik.values.email && !formik.errors.email) {
      dispatch(otpSend(formik.values.email, role));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create your account
        </h2>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Register As
          </label>
          <div className="flex gap-6">
            {["student", "teacher"].map((r) => (
              <label key={r} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value={r}
                  checked={role === r}
                  onChange={() => setRole(r)}
                  className={`accent-${
                    r === "student" ? "blue" : "purple"
                  }-600`}
                />
                <span className="text-gray-700 capitalize">{r}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Email + Send OTP */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="flex">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={!formik.values.email || !!formik.errors.email}
                className={`px-4 rounded-r-md text-white transition ${
                  !formik.values.email || !!formik.errors.email
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Send OTP
              </button>
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* OTP */}
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.otp}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OTP"
            />
            {formik.touched.otp && formik.errors.otp && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.otp}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Create a password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm your password"
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
