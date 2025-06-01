import AllBooks from "@/components/AllBooks";
import DepartmentTabs from "@/components/DepartmentTabs";
import React from "react";

export async function generateMetadata() {
  return {
    title: "LMS | Books",
    description:
      "All books of Bogura Polytechnic Institute library are listed here.",
  };
}

const page = () => {
  return (
    <>
      <DepartmentTabs activeDepartment={"all"} />
      <AllBooks />;
    </>
  );
};

export default page;
