"use client";

import { authenticated } from "@/store/Action";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Authentication = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const auth_loaded = useSelector((state) => state.auth_loaded);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(authenticated());
  }, [pathname]);

  useEffect(() => {
    if (!auth_loaded) return;

    if (!isAuthenticated && !pathname.includes("/auth")) {
      router.push("/auth/login", { scroll: false });
      return;
    }

    if (profile?._id) {
      if (!profile.name && pathname !== "/profile/complete") {
        router.push("/profile/complete", { scroll: false });
        return;
      }

      if (profile.isBan && pathname !== "/ban") {
        router.push("/ban", { scroll: false });
        return;
      }

      if (!profile.isBan && pathname === "/ban") {
        router.push("/books", { scroll: false });
        return;
      }

      if (profile.name && pathname === "/profile/complete") {
        router.push("/books", { scroll: false });
        return;
      }
    }

    if (isAuthenticated && pathname.startsWith("/auth")) {
      router.push("/books", { scroll: false });
    }
  }, [auth_loaded, pathname, profile, isAuthenticated]);


  if (!auth_loaded) return null;

  return (
    isAuthenticated && (
      <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
            >
              BPI-LMS
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/books"
              className="hover:text-gray-200 transition-colors"
            >
              Books
            </Link>
            <Link
              href="/books/my-books"
              className="hover:text-gray-200 transition-colors"
            >
              My Books
            </Link>

            {/* Avatar */}
            <Link href="/profile">
              <img
                src={profile?.avatar?.url || "/default-avatar.png"}
                alt="Avatar"
                className="w-10 h-10 rounded-full border-2 border-white object-cover hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </nav>
    )
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
