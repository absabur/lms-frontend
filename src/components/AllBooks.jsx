// app/books/page.js (Server Component)
import BooksFilterFrom from "@/components/BooksFilterFrom";
import BookPagination from "./BookPagination";
import { Suspense } from "react";
import Loading from "./Loading";
import BooksList from "./BooksList";

export default async function AllBooks({ searchParams }) {
  const filters = {
    search: searchParams?.search || "",
    language: searchParams?.language || "",
    department: searchParams?.department || "",
    country: searchParams?.country || "",
    shelf: searchParams?.shelf || "",
    mrpMin: searchParams?.mrpMin || "",
    mrpMax: searchParams?.mrpMax || "",
    sortBy: searchParams?.sortBy || "",
    sortOrder: searchParams?.sortOrder || "",
    page: parseInt(searchParams?.page) || 1,
    limit: parseInt(searchParams?.limit) || 10,
  };

  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-textl dark:text-textd mb-6">
        📚 Books
      </h1>
      <div className="flex flex-row gap-6 items-start">
        <BooksFilterFrom initialFilters={filters} />

        <Suspense fallback={<Loading />}>
          <BooksList filters={filters}>
            {(booksData) => (
              <BookPagination filters={filters} total={booksData?.total || 0} />
            )}
          </BooksList>
        </Suspense>
      </div>
    </div>
  );
}
