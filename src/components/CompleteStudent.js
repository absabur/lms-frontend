"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { completeStudentProfile, fixdeValues } from "@/store/Action";

const CompleteStudent = () => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.role);
  const fixedValues = useSelector((state) => state.fixedValues);

  useEffect(() => {
    dispatch(
      fixdeValues({
        departments: true,
        sessions: true,
        shifts: true,
        districts: true,
        upazilas: true,
      })
    );
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      phone: "",
      banglaName: "",
      fathersName: "",
      mothersName: "",
      addmissionRoll: "",
      boardRoll: "",
      registration: "",
      session: "",
      shift: "",
      district: "",
      upazila: "",
      union: "",
      village: "",
      department: "",
      address: "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(100, "Name can't exceed 100 characters")
        .required("Name is required"),

      phone: Yup.string()
        .matches(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number")
        .required("Phone is required"),

      banglaName: Yup.string().required("Bangla Name is required"),

      fathersName: Yup.string()
        .min(3, "Father's Name must be at least 3 characters")
        .required("Father's Name is required"),

      mothersName: Yup.string()
        .min(3, "Mother's Name must be at least 3 characters")
        .required("Mother's Name is required"),

      addmissionRoll: Yup.string()
        .matches(/^\d{4,10}$/, "Admission Roll should be a number")
        .notRequired(),

      boardRoll: Yup.string()
        .matches(/^\d{4,10}$/, "Board Roll should be a number")
        .notRequired(),

      registration: Yup.string()
        .matches(/^\d{6,12}$/, "Invalid Registration Number")
        .notRequired(),

      session: Yup.string().required("Session is required"),

      shift: Yup.string().required("Shift is required"),

      district: Yup.string().required("District is required"),

      upazila: Yup.string().required("Upazila is required"),

      union: Yup.string()
        .min(2, "Union must be at least 2 characters")
        .required("Union is required"),

      village: Yup.string()
        .min(2, "Village must be at least 2 characters")
        .required("Village is required"),

      department: Yup.string().required("Department is required"),

      address: Yup.string()
        .min(10, "Address must be at least 10 characters")
        .required("Address is required"),

      image: Yup.mixed()
        .nullable()
        .test(
          "fileSize",
          "File too large (max 2MB)",
          (value) => !value || (value && value.size <= 2 * 1024 * 1024)
        )
        .test(
          "fileType",
          "Unsupported file format",
          (value) =>
            !value ||
            (value &&
              ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
        ),
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
      dispatch(completeStudentProfile(role, formData));
    },
  });

  return (
    <div className="flex justify-center items-start py-8 px-4">
      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        className="bg-bgl1 dark:bg-bgd2 border dark:border-bord w-full max-w-4xl p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="text-3xl font-bold text-center mb-6 col-span-2 text-textl dark:text-textd">
          Add Profile Details
        </h2>

        {/* Name */}
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Bangla Name", name: "banglaName", type: "text" },
          { label: "Fathers Name", name: "fathersName", type: "text" },
          { label: "Mothers Name", name: "mothersName", type: "text" },
          { label: "Addmission Roll", name: "addmissionRoll", type: "text" },
          { label: "Board Roll", name: "boardRoll", type: "text" },
          { label: "Registration", name: "registration", type: "text" },
          { label: "Union", name: "union", type: "text" },
          { label: "Village", name: "village", type: "text" },
        ].map((field) => (
          <div key={field.name} className="flex flex-col col-span-2 md:col-span-1">
            <label className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md p-3"
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
            htmlFor="session"
            className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2"
          >
            Session
          </label>
          <select
            id="session"
            name="session"
            value={formik.values.session}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Session --</option>
            {fixedValues?.sessions?.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label
            htmlFor="shift"
            className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2"
          >
            Shift
          </label>
          <select
            id="shift"
            name="shift"
            value={formik.values.shift}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Shift --</option>
            {fixedValues?.shifts?.map((option) => (
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
            className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Department --</option>
            {fixedValues?.departments?.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {[["district", "District", fixedValues?.districts]].map(
          ([name, label, options]) => (
            <div key={name} className="flex flex-col col-span-2 md:col-span-1">
              <label
                htmlFor={name}
                className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1"
              >
                {label}
              </label>
              <select
                id={name}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select {label}</option>
                {options?.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name || option.className}
                  </option>
                ))}
              </select>
              {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-sm">
                  {formik.errors[name]}
                </div>
              )}
            </div>
          )
        )}

        {[["upazila", "Upazila", fixedValues?.upazilas]].map(
          ([name, label, options]) => (
            <div key={name} className="flex flex-col col-span-2 md:col-span-1">
              <label
                htmlFor={name}
                className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1"
              >
                {label}
              </label>
              <select
                id={name}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select {label}</option>
                {options
                  ?.filter(
                    (option) =>
                      option?.districtId?._id === formik.values.district
                  )
                  .map((option) => (
                    <option key={option._id} value={option._id}>
                      {option.name}
                    </option>
                  ))}
              </select>
              {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-sm">
                  {formik.errors[name]}
                </div>
              )}
            </div>
          )
        )}

        {/* Address (full width) */}
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2">
            Address
          </label>
          <textarea
            name="address"
            rows="3"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md p-3 resize-none"
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
              className="w-24 h-24 object-cover rounded-md border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord "
              onLoad={(e) => URL.revokeObjectURL(e.target.src)}
            />
          )}
        </div>

        {/* Image Upload (full width) */}
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-medium bg-bgl1 dark:bg-bgd2 text-textl dark:text-textd mb-1 relative top-[15px] left-[5px] bg-white z-10 w-fit px-2">
            Image (Upload new image)
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(event) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
            className="border bg-bgl1 dark:bg-bgd1 text-textl dark:text-textd border dark:border-bord  rounded-md p-2"
          />
        </div>

        {/* Submit Button (full width) */}
        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CompleteStudent;
