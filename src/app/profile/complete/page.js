"use client";
import CompleteStudent from "@/components/CompleteStudent";
import CompleteTeacherProfile from "@/components/CompleteTeacherProfile";
import { authenticated } from "@/store/Action";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const role = useSelector((state) => state.role);
  const isLoading = useSelector((state) => state.isLoading);
  const auth_loaded = useSelector((state) => state.auth_loaded);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(authenticated());
  }, []);

  useEffect(() => {
    if (auth_loaded && !isLoading && isAuthenticated) {
      if (role == "student") {
        if (
          profile?.name &&
          profile?.email &&
          profile?.phone &&
          (profile?.addmissionRoll || profile?.boardRoll)
        ) {
          router.push("/");
        }
      }
      if (role == "teacher") {
        if (profile?.name && profile?.email && profile?.phone) {
          router.push("/");
        }
      }
    }
  }, [profile, isAuthenticated, auth_loaded, isLoading, role]);

  return (
    <>
      {}
      {role == "student" && <CompleteStudent />}
      {role == "teacher" && <CompleteTeacherProfile />}
    </>
  );
};

export default page;
