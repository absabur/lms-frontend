import AllBooks from "@/components/AllBooks";
import DepartmentTabs from "@/components/DepartmentTabs";

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
      <AllBooks searchParams={params} />;
    </>
  );
};

export default page;
