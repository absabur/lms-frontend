// app/books/BooksList.jsx
import Link from "next/link";

async function getAllBooks(filters = {}) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.append(key, value);
    }
  });

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/api/book/all-books?${params.toString()}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
}

export default async function BooksList({ filters, children }) {
  const booksData = await getAllBooks(filters);

  return (
    <>
      {booksData.books?.length > 0 ? (
        <div className="w-full lg:w-[70%] flex flex-wrap justify-center gap-6">
          {booksData.books.map((book) => (
            <Link
              key={index}
              href={`/books/${book.slug}`}
              className="max-w-[300px] bg-bgl1 dark:bg-bgd2 border dark:border-bord rounded-xl shadow-md hover:shadow-xl hover:border-buttona dark:hover:border-buttona transition-all duration-300 overflow-hidden flex flex-col w-full h-[340px]"
            >
              {book?.images?.[0]?.url ? (
                <img
                  src={book.images[0].url}
                  alt={book.bookName}
                  className="w-full h-[150px] object-contain bg-gray-200"
                />
              ) : (
                <div className="w-full h-[150px] bg-gray-100 flex items-center justify-center text-gray-400 italic">
                  No Image
                </div>
              )}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-textl dark:text-textd line-clamp-1">
                    {book.bookName}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    By: {book.bookAuthor}
                  </p>
                </div>
                <p className="line-clamp-2 text-gray-500 font-thin">
                  {book.description}
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
        <p>No books found</p>
      )}

      {/* Render pagination as a render prop so it receives booksData */}
      {children && children(booksData)}
    </>
  );
}
