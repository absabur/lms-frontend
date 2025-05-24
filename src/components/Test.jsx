"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const role = useSelector((state) => state.role);
  const auth_loaded = useSelector((state) => state.auth_loaded);
  const router = useRouter();

  useEffect(() => {
    if (auth_loaded) {
      setTimeout(() => {
        if (isAuthenticated) {
            router.push(`/books`, { scroll: false });
        }
        if (!isAuthenticated) {
          router.push("/auth/login", { scroll: false });
        }
      }, 1000);
    }
  }, [auth_loaded]);
  return <div>Test</div>;
};

export default Test;
