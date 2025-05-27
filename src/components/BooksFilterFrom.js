"use client";
import { fixdeValues, getBooks } from "@/store/Action";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const BooksFilterFrom = ({ filters, setFilters }) => {
  const fixedValues = useSelector((state) => state.fixedValues);
  const dispatch = useDispatch();
  const [collaps, setCollaps] = useState(true);

  useEffect(() => {
    dispatch(fixdeValues());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value, page: 1 };
    setFilters(newFilters);
    localStorage.setItem("bookFilters", JSON.stringify(newFilters));
    dispatch(getBooks(newFilters));
  };

  return (
    <>
      <div
        className={`z-40 absolute lg:relative bg-white p-6 rounded-xl shadow-[0_0_10px_#00000035] space-y-6 mb-3 transition-all duration-300 w-[300px] ${
          collaps ? "left-[-310px]" : "left-[5px]"
        } lg:left-[0] lg:w-[30%]`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Filters</h2>
          <button
            className="lg:hidden rounded-full border-none shadow-[0_0_10px_#00000036] px-2 flex items-center gap-2 fixed top-[108px] right-[5px]"
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

        <div className="space-y-8">
          {/* Search Inputs + Button Filters + Slider */}
          <div className="grid grid-cols-1 gap-2">
            {/* Text Inputs */}
            {[
              ["bookName", "Book Name"],
              ["bookAuthor", "Author"],
              ["publisher", "Publisher"],
            ].map(([name, label]) => (
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
              ["country", "Country", fixedValues?.countries],
              ["language", "Language", fixedValues?.languages],
              ["shelf", "Shelf", fixedValues?.shelves],
              ["department", "Department", fixedValues?.departments],
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
                  <span>Max: {filters.mrpMax || 1000}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="range"
                    name="mrpMin"
                    min={0}
                    max={filters.mrpMax || 1000}
                    value={filters.mrpMin}
                    onChange={handleInputChange}
                    className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
                  />
                  <input
                    type="range"
                    name="mrpMax"
                    min={filters.mrpMin || 0}
                    max={1000}
                    value={filters.mrpMax}
                    onChange={handleInputChange}
                    className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-dashed border-gray-400" />
          {/* Sort Options */}
          <div className="flex flex-col flex-row items-start justify-between gap-2">
            {/* Sort By */}
            <fieldset className="flex flex-col sm:flex-row sm:items-center gap-2">
              <legend className="text-sm font-semibold text-gray-800">
                Sort By
              </legend>
              <div className="flex flex-wrap gap-2 sm:mt-0">
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
                    className="flex items-center gap-2 cursor-pointer text-sm select-none"
                  >
                    <input
                      type="radio"
                      name="sortBy"
                      value={value}
                      checked={filters.sortBy === value}
                      onChange={handleInputChange}
                      className="text-blue-600 focus:ring-2 focus:ring-blue-400"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Sort Order */}
            <fieldset className="flex flex-col flex-row sm:items-center gap-4">
              <legend className="text-sm font-semibold text-gray-800">
                Sort Order
              </legend>
              <div className="flex gap-6 mt-2 sm:mt-0">
                {[
                  { label: "Ascending", value: "asc" },
                  { label: "Descending", value: "desc" },
                ].map(({ label, value }) => (
                  <label
                    key={value}
                    className="flex items-center gap-2 cursor-pointer text-sm select-none"
                  >
                    <input
                      type="radio"
                      name="sortOrder"
                      value={value}
                      checked={filters.sortOrder === value}
                      onChange={handleInputChange}
                      className="text-blue-600 focus:ring-2 focus:ring-blue-400"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
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
              localStorage.removeItem("bookFilters");
              dispatch(getBooks(defaultFilters));
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
