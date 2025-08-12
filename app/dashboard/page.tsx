"use client";
import { useState, useEffect } from "react";
import StudentTable from "@/component/StudentTable";
import Pagination from "@/shared/pagination/Pagination";
import Header from "@/component/header/Header";
import { fetchStudents } from "@/services/student.service";

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [students, setStudents] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>();
  // Filters
  const [department, setDepartment] = useState("");
  const [active, setActive] = useState("active");
  const limit = 10;
  //
  // Function to fetch students based on filters and pagination
  const getStudents = async () => {
    setLoading(true);
    try {
      const data = await fetchStudents({
        page,
        limit,
        department: department || "",
        active: active,
      });

      setStudents(data.data.data);
      setPagination(data.data);
    } catch (err) {
      console.error("Failed to fetch students:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, [page, department, active]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      <aside className="bg-[#bae6fd] text-white p-6 hidden md:block">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
        </div>
        <ul className="space-y-2">
          <li className="hover:text-black-600 cursor-pointer text-black">
            Students
          </li>
          <li className="hover:text-black-600 cursor-pointer text-black">
            Add student
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="bg-[#c8ecff] p-2 md:p-10">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Mayank Kumar</h1>

        <Header
          onDepartmentChange={(value) => setDepartment(value)}
          onStatusChange={(value) => setActive(value)}
        />

        {/* Student Data Table */}
        <div className="bg-white rounded shadow p-6 mb-2 md:min-h-[500px] max-h-[500px]">
          {loading ? null : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <StudentTable studentList={students} page={page} limit={limit} />
          )}
        </div>

        <div className="bg-white rounded shadow p-2">
          {students && pagination && (
            <Pagination
              first={pagination.first}
              prev={pagination.prev}
              next={pagination.next}
              last={pagination.last}
              pages={pagination.pages}
              items={pagination.items}
              currentPage={page}
              onPageChange={(p: number) => setPage(p)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
