"use client";
import React from "react";
//@
// This file contains the Header component
// It provides dropdowns for filtering students by department and status
//@

const Header = ({
  onDepartmentChange,
  onStatusChange,
}: {
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}) => {
  const departments = [
    "All",
    "Computer Science",
    "Physics",
    "Mathematics",
    "Chemistry",
    "Biology",
  ];
  const statuses = ["All", "active", "Inactive"];

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white shadow-md rounded-lg mb-1">
      {/* Department Dropdown */}
      <label
        htmlFor="department"
        className="text-[14px] text-[#767676] font-roboto"
      >
        Sort by department:
      </label>
      <select
        name="department"
        id="department"
        onChange={(e) => onDepartmentChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-48 text-[14px] text-[#767676] font-roboto"
      >
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      {/* Active Status Dropdown */}
      <label
        htmlFor="status"
        className="text-[14px] text-[#767676] font-roboto"
      >
        Sort by status:
      </label>
      <select
        name="status"
        id="status"
        onChange={(e) => onStatusChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-48 text-[14px] text-[#767676] font-roboto"
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
