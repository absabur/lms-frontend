"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "@/store/Action.js";
import BooksFilterFrom from "@/components/BooksFilterFrom";

const AllBooks = ({role}) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    const savedFilters = localStorage.getItem("bookFilters");
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters);
      dispatch(getBooks(parsedFilters));
    } else {
      dispatch(getBooks());
    }
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
          All Books
        </h1>
      </div>

      <BooksFilterFrom />

      {books?.books?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
          {books.books.map((book, index) => (
            <Link
              key={index}
              href={`/books/${book.slug}`}
              className="cursor-pointer bg-white border rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {book?.images?.[0]?.url ? (
                <img
                  src={book.images[0].url}
                  alt={book.bookName}
                  className="w-full h-48 object-contain bg-black"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 italic">
                  No Image
                </div>
              )}

              <div className="p-4 space-y-1">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {book.bookName}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {book.bookAuthor}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                    ৳{book.mrp}
                  </span>
                  <span className="text-xs text-gray-400">
                    {book?.department?.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No books found.</p>
      )}
    </div>
  );
};

export default AllBooks;
