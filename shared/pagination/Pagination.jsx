"use client";
const Pagination = ({
  first,
  prev,
  next,
  last,
  pages,
  items,
  currentPage,
  onPageChange,
}) => {
  const totalPages = pages || 1;

  const goToPage = (page) => {
    const clampedPage = Math.max(1, Math.min(page, totalPages));
    if (clampedPage !== currentPage) {
      onPageChange(clampedPage);
    }
  };

  
  const getPageNumbers = () => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 3);
    const nums = [];
    for (let i = start; i <= end; i++) {
      nums.push(i);
    }
    return nums;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 py-2 bg-white rounded-md font-roboto gap-2 sm:gap-0">
      {/* Showing result info */}
      <span className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
        Page {currentPage} of {totalPages} ({items} Students)
      </span>

      {/* Pagination controls */}
      <div className="flex flex-wrap justify-center sm:justify-end space-x-1 sm:space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === first}
          className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
            currentPage === first
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 text-gray-600 hover:bg-gray-400"
          }`}
        >
          Previous
        </button>

        {getPageNumbers().map((num) => (
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
          disabled={currentPage === last}
          className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
            currentPage === last
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
