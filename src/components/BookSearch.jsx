"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const BookSearch = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="max-w-2xl mx-auto mt-10 p-2 bg-white dark:bg-bgd2 rounded-2xl shadow-xl shadow-purple-900/10 border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center flex-wrap gap-4 px-4 py-3">
        <Search className="w-6 h-6 text-gray-400 hidden md:block" />
        <input
          type="text"
          placeholder="বই, লেখক বা প্রকাশনীর নাম লিখুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-lg text-gray-800 dark:text-white placeholder:text-gray-400"
        />
        <Link
          href={`/books?search=${encodeURIComponent(search)}&page=1&limit=12`}
          className="ml-auto md:flex bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors"
        >
          অনুসন্ধান
        </Link>
      </div>
    </div>
  );
};

export default BookSearch;
