"use client";
import { useRouter } from "next/navigation";
import StudentTable from "@/component/StudentTable";
import Pagination from "@/shared/pagination/Pagination";
import Header from "@/component/header/Header";
import useStudent from "@/hooks/useStudent";
import { useAuth } from "@/context/auth/AuthContext";
// This is the main dashboard page for the application
// It includes a sidebar, header, and main content area
export default function DashboardPage() {
  //@
  // and the useAuth hook to access authentication state
  // and user information
  // The useStudent hook is used to manage student data and pagination
  //@
  const router = useRouter();
  const { state, dispatch } = useAuth();
  const { firstname } = state?.user?.name ?? {};
  const {
    loading,
    error,
    students,
    pagination,
    page,
    setPage,
    department,
    setDepartment,
    active,
    setActive,
    limit,
  } = useStudent();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      user: null,
    });
    router.push("/");
  };

  // It also handles department and status changes through the Header component
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      <aside className="bg-[#bae6fd] text-white p-6 hidden md:block">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
        </div>
        <ul className="space-y-2">
          <li className="hover:text-black-600 cursor-pointer text-black bg-[#99d8fa] px-4 py-2 rounded">
            Students
          </li>
          <li className="hover:text-black-600 cursor-pointer text-black px-4 py-2 rounded">
            Add student
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="bg-[#c8ecff] p-2 md:p-10">
        <div className="flex items-center justify-between">
          <h1 className=" text-[16px]  md:text-3xl  font-semibold py-4">
            Welcome, <span className="uppercase">{firstname}</span>
          </h1>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="bg-blue-400 px-2 py-1  custom-button text-white hover:bg-blue-500 transition duration-300 cursor-pointer"
            >
              Logout
            </button>
            <button
              onClick={() => {}}
              className="bg-[#6ec6f5] px-2 py-1  custom-button text-white hover:bg-blue-400 transition duration-300 cursor-pointer block md:hidden"
            >
              Add Student
            </button>
          </div>
        </div>

        <Header
          onDepartmentChange={(value) => setDepartment(value)}
          onStatusChange={(value) => setActive(value)}
        />

        {/* Student Data Table */}
        <div className="bg-white rounded shadow p-6 mb-2 md:min-h-[500px] max-h-full max-h-[500px]">
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
