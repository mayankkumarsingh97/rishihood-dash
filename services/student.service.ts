interface FetchStudentsParams {
  page: number;
  limit: number;
  sortBy?: string;
  order?: "asc" | "desc";
  department?: string;
  active?: string; // "true" | "false"
  all?:string
}

export const fetchStudents = async ({
  page,
  limit,
  sortBy,
  order,
  department,
  active,
  all
}: FetchStudentsParams) => {
  try {
    let query = `_page=${page}`;
    if (sortBy) query += `&_sort=${sortBy}&_order=${order || "asc"}`;
    if (department) query += `&department=${encodeURIComponent(department)}`;
    if (active) query += `&active=${active}`;
    if (all) query += `http://localhost:4000/students`;

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




