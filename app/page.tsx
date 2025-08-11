//
export default function Layout() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul className="space-y-2">
          <li className="hover:text-gray-300 cursor-pointer">Students</li>
          <li className="hover:text-gray-300 cursor-pointer">Add student</li>
          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="bg-gray-100 p-10 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome to the University Portal
        </h1>

        {/* Filter Students */}
        <div className="mb-6 flex items-center space-x-4">
          <label htmlFor="filter" className="font-medium">
            Filter by Name:
          </label>
          <input
            id="filter"
            type="text"
            className="border rounded px-3 py-1"
            placeholder="Enter student name"
            // Add state and onChange logic for filtering in the component
          />
        </div>
        {/* Student Data Table */}
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Student Data</h2>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Course</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">1</td>
                <td className="py-2 px-4 border">Alice Johnson</td>
                <td className="py-2 px-4 border">B.Sc Physics</td>
                <td className="py-2 px-4 border">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">2</td>
                <td className="py-2 px-4 border">Bob Smith</td>
                <td className="py-2 px-4 border">B.A History</td>
                <td className="py-2 px-4 border">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">3</td>
                <td className="py-2 px-4 border">Carol Lee</td>
                <td className="py-2 px-4 border">B.Com</td>
                <td className="py-2 px-4 border">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center space-x-2">
          <button className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">
            Previous
          </button>
          <span className="px-3 py-1">Page 1 of 3</span>
          <button className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
