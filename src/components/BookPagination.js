"use client";
import React from "react";
import ReactPaginate from "react-paginate";

const BookPagination = ({ filters, setFilters, books, getBooks }) => {
  const changePage = (newPage) => {
    const newFilters = { ...filters, page: newPage };
    setFilters(newFilters);
    sessionStorage.setItem("bookFilters", JSON.stringify(newFilters));
    getBooks(newFilters);
  };
  return (
    <>
      {/* Pagination & Limit Selector */}
      {books?.total > 0 && (
        <div className="flex m-auto flex-col sm:flex-row sm:justify-center items-center gap-4 mt-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next →"
            onPageChange={({ selected }) => changePage(selected + 1)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(books.total / filters.limit)}
            forcePage={filters.page - 1}
            previousLabel="← Previous"
            containerClassName="flex flex-wrap gap-2 items-center justify-center sm:justify-start"
            pageClassName="px-3 py-1 rounded bg-gray-200 text-sm"
            activeClassName="bg-green-100 text-black"
            previousClassName="px-3 py-1 rounded bg-gray-300 text-sm"
            nextClassName="px-3 py-1 rounded bg-gray-300 text-sm"
            breakClassName="px-3 py-1 rounded bg-gray-100"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </>
  );
};

export default BookPagination;
