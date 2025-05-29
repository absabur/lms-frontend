"use client";

import { authenticated } from "@/store/Action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileRedirect = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const auth_loaded = useSelector((state) => state.auth_loaded);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(authenticated());
  }, []);

  useEffect(() => {
    if (!isAuthenticated && auth_loaded && isLoading) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, auth_loaded, isLoading]);

  return <></>;
};

export default ProfileRedirect;
