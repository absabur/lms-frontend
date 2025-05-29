"use client";

import { authenticated } from "@/store/Action";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Authentication = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(authenticated());
  }, []);

  return (
    <nav className="sticky top-0 z-[30] lg:z-[50] bg-white text-black px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex p-1 items-center gap-2">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-blue-600 transition-colors"
          >
            LMS
          </Link>
        </div>
        {isAuthenticated ? (
          <>
            <div className="flex items-center gap-6">
              <Link
                href="/books"
                className="hover:text-blue-600 transition-colors"
              >
                Books
              </Link>
              <Link
                href="/books/my-books"
                className="hover:text-blue-600 transition-colors"
              >
                My Books
              </Link>

              {/* Avatar */}
              <Link href="/profile">
                <img
                  src={profile?.avatar?.url || "/default-avatar.png"}
                  alt="Avatar"
                  className="hover:shadow-[0_0_10px_rgba(0,0,200,0.9)] w-10 h-10 rounded-full object-cover transition-all"
                />
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-6">
            <Link
              href="/books"
              className="hover:text-blue-600 transition-colors"
            >
              Books
            </Link>
            <Link
              href="/auth/login"
              className="hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="hover:text-blue-600 transition-colors"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Authentication;

// else if (profile?._id && !profile?.isApproved) {
//   router.push("/not-approved", { scroll: false });
// }
// if (profile?._id && profile?.isApproved && pathname == `/not-approved`) {
//   router.push(`/books`, { scroll: false });
// }
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
