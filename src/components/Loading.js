"use client";
import { useSelector } from "react-redux";

import "./loading.css";

const Loading = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const auth_loaded = useSelector((state) => state.auth_loaded);

  return (
    <>
      {isLoading ||
        (!auth_loaded && (
          <div className="loading-overlay">
            <div className="loader">
              <div className="spinner" />
              <p>Loading...</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Loading;
