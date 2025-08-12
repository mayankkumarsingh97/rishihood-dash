import { useState, useEffect } from "react";
import { fetchStudents } from "@/services/student.service";

const useStudent = () => {
  // Custom hook to manage student data fetching and state
  // State variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [students, setStudents] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>();
  const [department, setDepartment] = useState("");
  const [active, setActive] = useState("active");
  const limit = 10;
  //@
  // Function to fetch students based on filters and pagination
  // This function is called whenever the page, department, or active status changes
  //@
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
