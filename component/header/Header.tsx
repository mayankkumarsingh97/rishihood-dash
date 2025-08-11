import React, { useState } from "react";

const Header = ({
  onSearch,
  onDepartmentChange,
  onStatusChange,
}: {
  onSearch: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const departments = [
    "All",
    "Computer Science",
    "Physics",
    "Mathematics",
    "Chemistry",
    "Biology",
  ];
  const statuses = ["All", "Active", "Inactive"];

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white shadow-md rounded-lg mb-1">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search by name ..."
          className={`transition-all duration-300 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isFocused ? "w-92" : "w-48"
          }`}
        />
      </div>

      {/* Department Dropdown */}
      <select
        onChange={(e) => onDepartmentChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      {/* Active Status Dropdown */}
      <select
        onChange={(e) => onStatusChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
