import { memo } from "react";

interface Student {
  id: number;
  name: string;
  department: string;
  active: boolean;
  phone: string;
  email: string;
  number: string;
  serial?: number;
}

interface StudentTableProps {
  studentList?: Student[];
}

const StudentTable = ({ studentList = [] }: StudentTableProps) => {
  return (
    <div className="overflow-x-auto font-roboto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-100 text-left w-full sticky top-0">
          <tr>
            <th className="px-4 py-2 border-b text-[14px] font-roboto">S.No</th>
            <th className="px-4 py-2 border-b text-[14px] font-roboto">Name</th>
            <th className="px-4 py-2 border-b text-[14px] font-roboto">
              Department
            </th>
            <th className="px-4 py-2 border-b text-[14px] font-roboto">
              Email
            </th>
            <th className="px-4 py-2 border-b text-[14px] font-roboto">
              Number
            </th>
            <th className="px-4 py-2 border-b text-[14px] font-roboto">
              Active
            </th>
          </tr>
        </thead>
        <tbody>
          {studentList?.map((student, index: number) => (
            <tr
              key={student.id}
              className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-colors"
            >
              <td className="px-4 py-2 text-[14px] text-[#767676] font-roboto">
                {index + 1}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] font-roboto">
                {student.name}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] font-roboto">
                {student.email}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] font-roboto">
                {student.department}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] font-roboto">
                {student.phone}
              </td>
              <td className="px-4 py-2 text-[14px] text-[#767676] font-roboto">
                {student.active ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(StudentTable);
