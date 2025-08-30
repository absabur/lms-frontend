import AllBooks from "@/components/AllBooks";
import DepartmentTabs from "@/components/DepartmentTabs";
import React, { Suspense } from "react";
import BooksSkeleton from "./loading";

export async function generateMetadata() {
  return {
    title: "LMS | Books",
    description:
      "All books of Bogura Polytechnic Institute library are listed here.",
  };
}

const page = async ({ searchParams }) => {
  let params = await searchParams;
  return (
    <>
      <DepartmentTabs activeDepartment={"all"} />
      <Suspense key={JSON.stringify(params)} fallback={<BooksSkeleton />}>
        <AllBooks searchParams={params} />;
      </Suspense>
    </>
  );
};

export default page;
