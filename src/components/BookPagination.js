// components/BookPagination.js (Client Component)
"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

const BookPagination = ({ filters, total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {total > 0 && (
        <div className="flex m-auto flex-col sm:flex-row sm:justify-center items-center gap-4 mt-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            onPageChange={({ selected }) => changePage(selected + 1)}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(total / filters.limit)}
            forcePage={filters.page - 1}
            previousLabel="←"
            containerClassName="flex flex-wrap gap-2 items-center justify-center"
            pageClassName="rounded text-sm transition-colors"
            pageLinkClassName="flex px-3 py-1 rounded w-full h-full 
                     bg-bgl2 dark:bg-bgd2 border border-borl dark:border-bord 
                     text-bgd2 dark:text-bgl2 hover:bg-gray-100 dark:hover:bg-gray-800"
            activeLinkClassName="bg-buttonp text-textd dark:bg-buttonp dark:text-bgd1"
            previousLinkClassName="flex px-3 py-1 rounded w-full h-full 
                         bg-bgl2 dark:bg-bgd2 border border-borl dark:border-bord 
                         text-bgd2 dark:text-bgl2 hover:bg-gray-100 dark:hover:bg-gray-800"
            nextLinkClassName="flex px-3 py-1 rounded w-full h-full 
                     bg-bgl2 dark:bg-bgd2 border border-borl dark:border-bord 
                     text-bgd2 dark:text-bgl2 hover:bg-gray-100 dark:hover:bg-gray-800"
            breakLinkClassName="flex px-3 py-1 rounded w-full h-full 
                      bg-bgl2 dark:bg-bgd2 border border-borl dark:border-bord 
                      text-bgd2 dark:text-bgl2"
          />
        </div>
      )}
    </>
  );
};

export default BookPagination;
