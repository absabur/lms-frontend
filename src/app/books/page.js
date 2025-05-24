"use client";
import AllBooks from "@/components/AllBooks";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const role = useSelector((state) => state.role);
  return <AllBooks role={role} />;
};

export default page;
