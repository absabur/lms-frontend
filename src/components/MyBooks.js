"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelReturnRequest,
  getRequestedBooks,
  gettingRequestCancel,
  returnRequest,
} from "@/store/Action.js";

const MyBooks = () => {
  const [filters, setFilters] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");

  const dispatch = useDispatch();
  const myBooks = useSelector((state) => state.myBooks);
  const role = useSelector((state) => state.role);

  useEffect(() => {
    if (role) {
      dispatch(getRequestedBooks(filters, role));
    }
  }, [role, filters]);

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 bg-gray-50">
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-8">
        <button
          onClick={() => {
            setFilters({});
            setActiveFilter("all");
          }}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
            activeFilter === "all"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        <button
          onClick={() => {
            setFilters({ takingApproveBy: false });
            setActiveFilter("gettingRequested");
          }}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
            activeFilter === "gettingRequested"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Getting Requested
        </button>

        <button
          onClick={() => {
            setFilters({ takingApproveBy: true, returnApproveBy: false });
            setActiveFilter("inCollection");
          }}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
            activeFilter === "inCollection"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          In My Collection
        </button>
        <button
          onClick={() => {
            setFilters({
              takingApproveBy: true,
              returnRequestDate: true,
              returnApproveBy: false,
            });
            setActiveFilter("returnRequested");
          }}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
            activeFilter === "returnRequested"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Return Requested
        </button>

        <button
          onClick={() => {
            setFilters({ takingApproveBy: true, returnApproveBy: true });
            setActiveFilter("alreadyRead");
          }}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
            activeFilter === "alreadyRead"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Already Returned
        </button>
      </div>

      {myBooks?.bookTeachers?.length || myBooks?.bookStudents?.length > 0 ? (
        <div className="space-y-6 mt-8">
          {(role === "teacher"
            ? myBooks?.bookTeachers
            : myBooks?.bookStudents
          )?.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-md transition-transform duration-300 flex flex-col md:flex-row overflow-hidden"
            >
              {/* Book Image */}
              {item?.book?.images?.[0]?.url ? (
                <img
                  src={item?.book?.images[0].url}
                  alt={item?.book?.bookName}
                  className="w-full md:w-48 h-64 md:h-auto object-cover"
                />
              ) : (
                <div className="w-full md:w-48 h-64 md:h-auto bg-gray-100 flex items-center justify-center text-gray-400 italic">
                  No Image
                </div>
              )}

              {/* Book Details */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    <Link href={`/books/${item?.book?.slug}`}>
                      {item?.book?.bookName}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    Author: {item?.book?.bookAuthor}
                  </p>
                  <p className="text-sm text-gray-500">
                    Department: {item?.book?.department}
                  </p>
                </div>
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-base font-medium text-green-700">
                    ৳{item?.book?.mrp}
                  </span>

                  {item?.takingApproveBy == null && (
                    <button
                      onClick={() =>
                        dispatch(gettingRequestCancel(item?._id, role))
                      }
                      className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded shadow"
                    >
                      Cancel Getting Request
                    </button>
                  )}

                  {item?.takingApproveBy &&
                    !item?.returnApproveBy &&
                    !item?.returnRequestDate && (
                      <button
                        onClick={() => dispatch(returnRequest(item?._id, role))}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded shadow"
                      >
                        Return Book
                      </button>
                    )}
                  {item?.takingApproveBy &&
                    !item?.returnApproveBy &&
                    item?.returnRequestDate && (
                      <button
                        onClick={() =>
                          dispatch(cancelReturnRequest(item?._id, role))
                        }
                        className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded shadow"
                      >
                        Cancel Return Request
                      </button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No books found.</p>
      )}
    </div>
  );
};

export default MyBooks;
