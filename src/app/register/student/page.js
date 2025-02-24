'use client'
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    verificationCode: "",
    name: "",
    banglaName: "",
    fathersName: "",
    mothersName: "",
    email: "",
    phone: "",
    addmissionRoll: "",
    boardRoll: "",
    registration: "",
    technology: "",
    session: "",
    shift: "",
    group: "",
    district: "",
    upazila: "",
    union: "",
    village: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:8888/api/student/register", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="" required />
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="" required />
      <input type="text" name="verificationCode" value={formData.verificationCode} onChange={handleChange} placeholder="Verification Code" className="" required />
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="" required />
      <input type="text" name="banglaName" value={formData.banglaName} onChange={handleChange} placeholder="Bangla Name" className="" required />
      <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} placeholder="Father's Name" className="" required />
      <input type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} placeholder="Mother's Name" className="" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="" required />
      <input type="text" name="addmissionRoll" value={formData.addmissionRoll} onChange={handleChange} placeholder="Admission Roll" className="" required />
      <input type="text" name="boardRoll" value={formData.boardRoll} onChange={handleChange} placeholder="Board Roll" className="" required />
      <input type="text" name="registration" value={formData.registration} onChange={handleChange} placeholder="Registration" className="" required />
      <input type="text" name="technology" value={formData.technology} onChange={handleChange} placeholder="Technology" className="" required />
      <input type="text" name="session" value={formData.session} onChange={handleChange} placeholder="Session" className="" required />
      <input type="text" name="shift" value={formData.shift} onChange={handleChange} placeholder="Shift" className="" required />
      <input type="text" name="group" value={formData.group} onChange={handleChange} placeholder="Group" className="" required />
      <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="" required />
      <input type="text" name="upazila" value={formData.upazila} onChange={handleChange} placeholder="Upazila" className="" required />
      <input type="text" name="union" value={formData.union} onChange={handleChange} placeholder="Union" className="" required />
      <input type="text" name="village" value={formData.village} onChange={handleChange} placeholder="Village" className="" required />
      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="" required />
      <input type="file" accept="image/*" onChange={handleFileChange} className="" required />
      <button type="submit" className="">Submit</button>
    </form>
  );
};

export default page;
