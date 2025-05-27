import Loading from "@/components/Loading";
import Login from "@/components/Login";
import React from "react";

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  );
};

export default page;
