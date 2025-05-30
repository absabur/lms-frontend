"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { completeTeacherProfile, fixdeValues } from "@/store/Action";

const CompleteTeacherProfile = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role);

  const fixedValues = useSelector((state) => state.fixedValues);

  useEffect(() => {
    dispatch(
      fixdeValues({
        departments: true,
        posts: true,
      })
    );
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      phone: "",
      nId: "",
      teacherId: "",
      department: "",
      post: "",
      address: "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone is required"),
      nId: Yup.string().required("NID is required"),
      teacherId: Yup.string().required("Teacher ID is required"),
      department: Yup.string().required("Department is required"),
      post: Yup.string().required("Post is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      for (const key in values) {
        if (key === "image" && values.image) {
          formData.append("image", values.image);
        } else {
          formData.append(key, values[key]);
        }
      }
      dispatch(completeTeacherProfile(role, formData));
    },
  });

  return (
    <div className=" flex justify-center items-start  py-8 px-4">
      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        className=" border dark:border-bord bg-bgl1 dark:bg-bgd2 w-full max-w-4xl p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="text-3xl font-bold text-center text-textl dark:text-textd mb-6 col-span-2">
          Add Profile Details
        </h2>

        {/* Name */}
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "NID", name: "nId", type: "text" },
          { label: "Teacher ID", name: "teacherId", type: "text" },
        ].map((field) => (
          <div key={field.name} className="flex flex-col col-span-2 md:col-span-1">
            <label className="text-sm font-medium bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-md p-3 bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord "
            />
            {formik.touched[field.name] && formik.errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors[field.name]}
              </p>
            )}
          </div>
        ))}

        {/* Post */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label
            htmlFor="post"
            className="text-sm font-medium bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2"
          >
            Posts
          </label>
          <select
            id="post"
            name="post"
            value={formik.values.post}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord "
          >
            <option value="">-- Select Posts --</option>
            {fixedValues?.posts?.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label
            htmlFor="department"
            className="text-sm font-medium bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord "
          >
            <option value="">-- Select Department --</option>
            {fixedValues?.departments?.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Address (full width) */}
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-medium bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2">
            Address
          </label>
          <textarea
            name="address"
            rows="3"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded-md p-3 bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  resize-none"
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
          )}
        </div>

        {/* Image Preview (full width) */}
        <div className="col-span-2 mb-4 flex flex-wrap gap-4">
          {formik.values.image && (
            <img
              src={URL.createObjectURL(formik.values.image)}
              alt={`Preview`}
              className="w-24 h-24 object-cover rounded-md border border-gray-300"
              onLoad={(e) => URL.revokeObjectURL(e.target.src)}
            />
          )}
        </div>

        {/* Image Upload (full width) */}
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-medium bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2">
            Image (Upload new image)
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(event) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Submit Button (full width) */}
        <button
          type="submit"
          className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CompleteTeacherProfile;
