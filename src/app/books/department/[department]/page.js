import DepartmentBooks from "@/components/DepartmentBooks";
import DepartmentTabs from "@/components/DepartmentTabs";
import Loading from "@/components/Loading";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { department } = await params;
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/api/fixed-values/departments?name=${decodeURIComponent(department)}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const result = await response.json();
  if (result.departments.length <= 0) {
    return notFound();
  }
  return {
    title: "LMS | " + result.departments[0].name,
  };
}

export default async function Page({ params }) {
  const { department } = await params;
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/api/fixed-values/departments?name=${decodeURIComponent(department)}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const result = await response.json();
  if (result.departments.length <= 0) {
    return notFound();
  }

  return (
    <>
      <DepartmentTabs activeDepartment={decodeURIComponent(department)} />
      <Suspense fallback={<Loading />}>
        <DepartmentBooks departmentPath={decodeURIComponent(department)} />;
      </Suspense>
    </>
  );
}
