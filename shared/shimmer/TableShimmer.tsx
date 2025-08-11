import React from "react";

const TableShimmer = ({ rows = 20, cols = 5 }: { rows?: number; cols?: number }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full  border border-gray-200">
        <thead>
          <tr>
            {Array.from({ length: cols }).map((_, i) => (
              <th key={i} className="p-2 border-b border-gray-200 bg-gray-100"></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <td key={colIndex} className="p-2 border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableShimmer;
