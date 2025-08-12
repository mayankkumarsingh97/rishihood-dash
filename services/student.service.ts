//
// This file contains the service for fetching student data from the API
// It includes the function to fetch students with optional filters for department and active status
//
interface FetchStudentsParams {
  page: number;
  limit: number;
  department?: string;
  active?: string;
  all?: string
}
//@
// Function to fetch students from the API with optional filters
// It constructs the query parameters based on the provided filters and returns the data
//@
export const fetchStudents = async ({
  page,
  limit,
  department,
  active,
  all
}: FetchStudentsParams) => {
  try {
    let query = `_page=${page}`;
    if (department) query += `&department=${department}`;
    if (active) query += `&active=${active}`;
    if (all) query += `_page=1`;

    const res = await fetch(`http://localhost:4000/students?${query}`);

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const total = res.headers.get("X-Total-Count");
    const data = await res.json();

    return { data, total: total ? Number(total) : 0 };
  } catch (error) {
    console.error("Error fetching students:", error);
    return { data: [], total: 0 };
  }
};




