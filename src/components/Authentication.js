"use client";

import { authenticated } from "@/store/Action";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Authentication = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const role = useSelector((state) => state.role);
  const auth_loaded = useSelector((state) => state.auth_loaded);
  const profile = useSelector((state) => state.profile);
  const router = useRouter();

  useEffect(() => {
    dispatch(authenticated());
  }, [pathname]);

  useEffect(() => {
    if (auth_loaded) {
      if (!isAuthenticated && !pathname.includes("auth")) {
        router.push("/auth/login", { scroll: false });
      }
      if (profile?._id && !profile?.name) {
        router.push(`/profile/complete`, { scroll: false });
      }
      // else if (profile?._id && !profile?.isApproved) {
      //   router.push("/not-approved", { scroll: false });
      // }
      else if (profile?._id && profile?.isBan) {
        router.push("/ban", { scroll: false });
      }

      if (profile?._id && !profile?.isBan && pathname == `/ban`) {
        router.push(`/books`, { scroll: false });
      }
      // if (profile?._id && profile?.isApproved && pathname == `/not-approved`) {
      //   router.push(`/books`, { scroll: false });
      // }
      if (profile?._id && profile?.name && pathname == `/profile/complete`) {
        router.push(`/books`, { scroll: false });
      }
      if (isAuthenticated && pathname.includes("auth")) {
        router.push(`/books`, { scroll: false });
      }

      // if (isAuthenticated && pathname.includes("student")) {
      //   if (role == "teacher") {
      //     router.push(pathname.replace("student", "teacher"), {
      //       scroll: false,
      //     });
      //   }
      // } else if (isAuthenticated && pathname.includes("teacher")) {
      //   if (role == "student") {
      //     router.push(pathname.replace("teacher", "student"), {
      //       scroll: false,
      //     });
      //   }
      // }
    }
  }, [auth_loaded, pathname, profile]);

  return (
    <>
      {isAuthenticated && (
        <nav className="bg-blue-500 text-white flex justify-around items-center flex-wrap gap-[20px] p-2">
          <div className="text-white flex justify-center flex-wrap gap-[20px]">
            <h1 className="text-3xl font-semibold text-gray-900 text-center">
              <Link href="/">BPI-LMS</Link>
            </h1>
          </div>
          <div className="text-white flex justify-center flex-wrap gap-[20px]">
            <Link href={`/books`}>Books</Link>
            <Link href={`/books/my-books`}>My Books</Link>
            <Link href={`/profile`}>
              <img
                src={profile?.avatar?.url}
                alt="Avatar"
                className="w-10 h-10 rounded-full border object-cover mx-auto md:mx-0"
              />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Authentication;
