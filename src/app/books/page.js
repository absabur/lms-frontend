import AllBooks from "@/components/AllBooks";
import DepartmentTabs from "@/components/DepartmentTabs";
import React from "react";

const page = () => {
  return (
    <>
      <DepartmentTabs activeDepartment={""} />
      <AllBooks />;
    </>
  );
};

export default page;
