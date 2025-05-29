"use client";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { fixdeValues } from "@/store/Action";

const BooksFilterFrom = ({ filters, setFilters, getBooks }) => {
  const fixedValues = useSelector((state) => state.fixedValues);
  const dispatch = useDispatch();
  const [collaps, setCollaps] = useState(true);

  useEffect(() => {
    dispatch(
      fixdeValues({
        departments: true,
        shelves: true,
        countries: true,
        languages: true,
      })
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value, page: 1 };
    setFilters(newFilters);
    sessionStorage.setItem("bookFilters", JSON.stringify(newFilters));
    getBooks(newFilters);
  };

  useEffect(() => {
    if (!collaps) {
      const all = document.querySelectorAll("body, html, #__next, main"); // add others if needed
      all.forEach((el) => (el.style.overflow = "hidden"));
    } else {
      const all = document.querySelectorAll("body, html, #__next, main");
      all.forEach((el) => (el.style.overflow = ""));
    }

    return () => {
      const all = document.querySelectorAll("body, html, #__next, main");
      all.forEach((el) => (el.style.overflow = ""));
    };
  }, [collaps]);

  return (
    <>
      {!collaps && (
        <div
          onClick={() => setCollaps(true)}
          className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-80 z-[38] transition-all"
        ></div>
      )}
      <div
        className={`z-[40] absolute lg:static bg-white p-6 lg:rounded-xl shadow-[0_0_10px_#00000035] space-y-6 mb-3 transition-all duration-300 w-[80vw] ${
          collaps
            ? "left-[-80vw] top-[64px] rounded-none"
            : "left-[0px] top-[64px] rounded-none"
        } lg:w-[30%] h-[calc(100dvh-64px)] lg:h-[calc(100dvh-220px)] overflow-auto custom-scrollbar`}
      >
        <div className="flex justify-center items-center">
          <h2 className="text-2xl">Filters</h2>
          <button
            className="z-[42] lg:hidden rounded-full border-none bg-white shadow-[0_0_10px_#00000036] px-2 flex items-center gap-2 fixed top-[93px] right-[5px]"
            onClick={() => setCollaps(!collaps)}
          >
            {collaps ? (
              <>
                Filters
                <FaChevronCircleRight />
              </>
            ) : (
              <>
                Filters
                <FaChevronCircleLeft />
              </>
            )}
          </button>
        </div>

        <div className="">
          {/* Search Inputs + Button Filters + Slider */}
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full bg-white rounded-2xl flex flex-wrap sm:items-start sm:justify-between gap-3">
              {/* Sort By */}
              <fieldset className="w-full sm:w-auto">
                <legend className="mb-2 text-sm font-semibold text-gray-700">
                  Sort By
                </legend>
                <div className="flex flex-wrap gap-2 justify-start">
                  {[
                    { label: "Book", value: "bookName" },
                    { label: "Author", value: "bookAuthor" },
                    { label: "Publisher", value: "publisher" },
                    { label: "MRP", value: "mrp" },
                    { label: "Qty", value: "quantity" },
                    { label: "Edition", value: "edition" },
                  ].map(({ label, value }) => (
                    <label
                      key={value}
                      className={`text-sm flex items-center justify-center px-4 py-2 rounded-full border cursor-pointer transition 
            ${
              filters.sortBy === value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 border-gray-300"
            }`}
                    >
                      <input
                        type="radio"
                        name="sortBy"
                        value={value}
                        checked={filters.sortBy === value}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Sort Order */}
              <fieldset className="w-full sm:w-auto">
                <legend className="mb-2 text-sm font-semibold text-gray-700">
                  Sort Order
                </legend>
                <div className="flex gap-4">
                  {[
                    { label: "Ascending", value: "asc" },
                    { label: "Descending", value: "desc" },
                  ].map(({ label, value }) => (
                    <label
                      key={value}
                      className={`text-sm flex items-center justify-center px-4 py-2 rounded-full border cursor-pointer transition 
            ${
              filters.sortOrder === value
                ? "bg-green-600 text-white border-green-600"
                : "bg-gray-100 text-gray-700 hover:bg-green-100 border-gray-300"
            }`}
                    >
                      <input
                        type="radio"
                        name="sortOrder"
                        value={value}
                        checked={filters.sortOrder === value}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <hr className="border-t border-dashed border-gray-400 mt-3" />
            {/* Text Inputs */}
            {[["search", "Search"]].map(([name, label]) => (
              <div key={name} className="flex flex-col">
                <label
                  htmlFor={name}
                  className="text-sm font-semibold text-gray-800 mb-2"
                >
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  value={filters[name]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${label}`}
                  className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            ))}
            <hr className="border-t border-dashed border-gray-400 mt-3" />
            {/* Button Filters */}
            {[
              ["department", "Department", fixedValues?.departments],
              ["shelf", "Shelf", fixedValues?.shelves],
              ["country", "Country", fixedValues?.countries],
              ["language", "Language", fixedValues?.languages],
            ].map(([name, label, options]) => (
              <div key={name} className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-2">
                  {label}
                </label>
                <div className="w-full flex items-center justify-center flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleInputChange({ target: { name, value: "" } })
                    }
                    className={`flex-auto w-max p-[5px] text-[15px] text-center rounded-[10px] shadow-[0_0_3px_#00000012] transition-all
              ${
                filters[name] === ""
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }
            `}
                    aria-pressed={filters[name] === ""}
                  >
                    All
                  </button>
                  {options?.map((option) => (
                    <button
                      key={option._id}
                      type="button"
                      onClick={() =>
                        handleInputChange({
                          target: { name, value: option._id },
                        })
                      }
                      className={`flex-auto w-max p-[5px] text-[15px] text-center rounded-[10px] shadow-[0_0_3px_#00000012] transition-all
                ${
                  filters[name] === option._id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                }
              `}
                      aria-pressed={filters[name] === option.name}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
                <hr className="border-t border-dashed border-gray-400 mt-3" />
              </div>
            ))}

            {/* MRP Range Slider */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-2">
                MRP Range
              </label>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Min: {filters.mrpMin || 0}</span>
                  <span>Max: {filters.mrpMax || 3000}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="range"
                    name="mrpMin"
                    min={0}
                    max={filters.mrpMax || 3000}
                    value={filters.mrpMin}
                    onChange={handleInputChange}
                    className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
                  />
                  <input
                    type="range"
                    name="mrpMax"
                    min={filters.mrpMin || 0}
                    max={3000}
                    value={filters.mrpMax}
                    onChange={handleInputChange}
                    className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-dashed border-gray-400 m-3" />
          {/* Sort Options */}
        </div>

        {/* Reset Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow"
            onClick={() => {
              const defaultFilters = {
                bookName: "",
                bookAuthor: "",
                publisher: "",
                search: "",
                language: "",
                department: "",
                country: "",
                shelf: "",
                edition: "",
                mrpMin: "",
                mrpMax: "",
                quantityMin: "",
                quantityMax: "",
                search: "",
                sortBy: "",
                sortOrder: "",
                page: 1,
                limit: 10,
              };
              setFilters(defaultFilters);
              sessionStorage.removeItem("bookFilters");
              getBooks(defaultFilters);
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default BooksFilterFrom;
