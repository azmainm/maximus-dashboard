// app/users/components/UsersTable.tsx
'use client';
import { FaCheckSquare, FaSquare, FaTrash } from "react-icons/fa";  // Import FaTrash

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  sex: string;
  height: string;
  weight: string;
  joiningDate: string;
  totalArticles: number;
}

interface UsersTableProps {
  users: User[];
  selectedRows: number[];
  setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
  deleteSelectedRows: () => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, selectedRows, setSelectedRows, deleteSelectedRows }) => {

  const toggleRowSelection = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const selectAll = () => {
    if (selectedRows.length === users.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users.map((user) => user.id));
    }
  };

  return (
    <div className="overflow-x-auto relative">
      <div className="max-h-[28rem] overflow-y-auto">
        {/* Delete Selected Button */}
        {selectedRows.length > 0 && (
          <div className="absolute top-4 right-4">
            <button
              onClick={deleteSelectedRows}
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <FaTrash className="text-xl" />
              <span>Delete Selected</span>
            </button>
          </div>
        )}

        {/* Table */}
        <table className="w-full table-auto border-collapse border border-white text-sm">
          <thead>
            <tr className="bg-white text-gray-950">
              <th className="border border-white px-4 py-2">
                <button
                  onClick={selectAll}
                  className="text-white hover:text-cyan-300"
                >
                  {selectedRows.length === users.length ? (
                    <FaCheckSquare className="text-green-500" />
                  ) : (
                    <FaSquare className="text-white" />
                  )}
                </button>
              </th>
              <th className="border border-white px-4 py-2 hidden sm:table-cell">User ID</th>
              <th className="border border-white px-4 py-2">Name</th>
              <th className="border border-white px-4 py-2 sm:table-cell">Email</th>
              <th className="border border-white px-4 py-2 hidden md:table-cell">Age</th>
              <th className="border border-white px-4 py-2 hidden md:table-cell">Sex</th>
              <th className="border border-white px-4 py-2 hidden lg:table-cell">Height</th>
              <th className="border border-white px-4 py-2 hidden lg:table-cell">Weight</th>
              <th className="border border-white px-4 py-2 hidden lg:table-cell">Joining Date</th>
              <th className="border border-white px-4 py-2 hidden lg:table-cell">Total Articles</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`text-gray-200 hover:bg-gray-700 ${selectedRows.includes(user.id) ? "bg-gray-700" : ""}`}
              >
                <td className="border border-white px-4 py-2 text-center">
                  <button
                    onClick={() => toggleRowSelection(user.id)}
                    className="flex items-center justify-center gap-2 text-white hover:text-cyan-300"
                  >
                    {selectedRows.includes(user.id) ? (
                      <FaCheckSquare className="text-green-500" />
                    ) : (
                      <FaSquare className="text-white" />
                    )}
                  </button>
                </td>
                <td className="border border-white px-4 py-2 text-center hidden sm:table-cell">{user.id}</td>
                <td className="border border-white px-4 py-2">{user.name}</td>
                <td className="border border-white px-4 py-2 sm:table-cell">{user.email}</td>
                <td className="border border-white px-4 py-2 text-center hidden md:table-cell">{user.age}</td>
                <td className="border border-white px-4 py-2 text-center hidden md:table-cell">{user.sex}</td>
                <td className="border border-white px-4 py-2 text-center hidden lg:table-cell">{user.height}</td>
                <td className="border border-white px-4 py-2 text-center hidden lg:table-cell">{user.weight}</td>
                <td className="border border-white px-4 py-2 text-center hidden lg:table-cell">{user.joiningDate}</td>
                <td className="border border-white px-4 py-2 text-center hidden lg:table-cell">{user.totalArticles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;


// Filter option to see which columns i want
// Filter by joining data (latest or oldest first)
// filter by name alphabetically
// deletion modal
// fix delete button placement