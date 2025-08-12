"use client"
import { useState, useEffect } from "react";

const Pagination = ({ data = [], itemsPerPage = 50, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const goToPage = (page) => {
    const clampedPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(clampedPage);
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    onPageChange(data.slice(start, end));
  }, [currentPage, data, itemsPerPage, onPageChange]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 py-2 bg-white rounded-md font-roboto gap-2 sm:gap-0">
      {/* Showing result info */}
      <span className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, data?.length)} of {data && data.length}{" "}
        Students
      </span>

      {/* Pagination controls */}
      <div className="flex flex-wrap justify-center sm:justify-end space-x-1 sm:space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 text-gray-600 hover:bg-gray-400"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
              num === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 text-gray-600 hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
