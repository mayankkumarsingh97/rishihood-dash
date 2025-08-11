"use client";
import useHttp from "@/hooks/useHttp";
import { getStudentList } from "@/services/student.service";
import TableShimmer from "@/shared/shimmer/TableShimmer";
import StudentTable from "@/component/StudentTable";
import Pagination from "@/shared/pagination/Pagination";
import Header from "@/component/header/Header";

//
export default function DashboardPage() {
  const { loading, data: studentList, error } = useHttp(getStudentList);
  //
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      <aside className="bg-[#adceff] text-white p-6 hidden md:block">
        <div>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        
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
      <main className="bg-[#a4bbdd] p-10">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome to the University Portal
        </h1>
        <Header
          onSearch={(value) => console.log("Search:", value)}
          onDepartmentChange={(value) => console.log("Department:", value)}
          onStatusChange={(value) => console.log("Status:", value)}
        />
        {/* Student Data Table */}
        <div className="bg-white rounded shadow p-6 mb-8   md:min-h-[600px]  md:max-h-[600px] overflow-y-scroll">
          {loading ? (
            <TableShimmer />
          ) : error ? (
            <p>Error:</p>
          ) : (
            <StudentTable studentList={studentList} />
          )}
        </div>

        <div className="bg-white rounded shadow p-2 justify-center items-center">
          {/* Pagination Component */}
          {studentList && (
            <Pagination
              data={studentList}
              onPageChange={() => {}}
              itemsPerPage={10}
            />
          )}
        </div>
      </main>
    </div>
  );
}
