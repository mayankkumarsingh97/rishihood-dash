import { useState, useEffect } from "react";
import { fetchStudents } from "@/services/student.service";

// Define types for student and pagination
export interface Student {
  id: string;
  name: string;
  department: string;
  active: boolean;
  // Add other student fields as needed
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  // Add other pagination fields as needed
  data: Student[];
}

export interface UseStudentReturn {
  loading: boolean;
  error: string;
  students: Student[];
  pagination?: Pagination;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  department: string;
  setDepartment: React.Dispatch<React.SetStateAction<string>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  getStudents: () => Promise<void>;
  limit: number;
}

const useStudent = (): UseStudentReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<Pagination>();
  const [department, setDepartment] = useState<string>("");
  const [active, setActive] = useState<string>("active");
  const limit = 10;

  const getStudents = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await fetchStudents({
        page,
        limit,
        department: department || "",
        active: active,
      });

      setStudents(data.data.data as Student[]);
      setPagination(data.data as Pagination);
    } catch (err) {
      console.error("Failed to fetch students:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, department, active]);

  return {
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
    getStudents,
    limit,
  };
};

export default useStudent;
