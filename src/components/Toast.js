"use client";
import { CLEAR_MESSAGE, CLEAR_PATH } from "@/store/constant";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const pathname = usePathname();
  const message = useSelector((state) => state.message);
  const path = useSelector((state) => state.path);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (message?.status) {
      toast[message?.status](message?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (message?.message === "You must login first.") {
        // Redirect to login with "next" as current route
        router.push(`/auth/login?next=${encodeURIComponent(pathname)}`);
      }
      if (message?.message?.includes("Complete Your Profile")) {
        // Redirect to login with "next" as current route
        router.push(`/profile/complete`);
      }

      if (message?.message === "Your account is not approved.") {
        // Redirect to login with "next" as current route
        router.push(`/not-approved`);
      }
      if (
        message?.message ===
        "Unfortunately you are ban now, please contact to author."
      ) {
        // Redirect to login with "next" as current route
        router.push(`/ban`);
      }
      dispatch({
        type: CLEAR_MESSAGE,
      });
    }
    if (path) {
      let pushto = path;
      dispatch({ type: CLEAR_PATH });
      router.push(pushto, { scroll: false });
    }
  }, [message, path]);

  return <ToastContainer />;
};

export default Toast;
