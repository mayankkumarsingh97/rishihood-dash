import { memo } from "react";
//@
// This file contains the StudentTable component
// It displays a table of students with pagination and sorting features
//@
interface Student {
  id: number;
  name: string;
  department: string;
  active: string;
  phone: string;
  email: string;
  number: string;
  serial?: number;
}

interface StudentTableProps {
  studentList?: Student[];
  page: number;
  limit: number;
}
//@
// StudentTable component to display a list of students in a table format
// It accepts studentList, page, and limit as props
//@
const StudentTable = ({ page, limit, studentList = [] }: StudentTableProps) => {
  return (
    <div className="overflow-x-auto font-roboto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-100 text-left w-full sticky top-0">
          <tr>
            <th className="px-4 py-2 border-b">S.No</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Department</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Number</th>
            <th className="px-4 py-2 border-b">Active</th>
          </tr>
        </thead>
        <tbody>
          {studentList?.map((student, index: number) => (
            <tr
              key={student.id}
              className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-colors"
            >
              <td className="px-4 py-2 text-[14px] text-[#767676] ">
                {(page - 1) * limit + index + 1}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] ">
                {student.name}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] ">
                {student.department}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] ">
                {student.email}
              </td>

              <td className="px-4 py-2 text-[14px] text-[#767676] ">
                {student.phone}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] ">
                {student.active === "active" ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(StudentTable);
