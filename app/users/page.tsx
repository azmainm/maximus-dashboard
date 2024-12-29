// app/users/page.tsx 
'use client';
import { useState } from "react";
import UsersTable from "./components/UsersTable"; // Import UsersTable component
import TotalUsersCard from "./components/TotalUsersCard"; // Import component
import TimeChart from "./components/TimeChart"; // Import component

const UsersPage = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30, sex: "Male", height: "5'9\"", weight: "70kg", joiningDate: "2022-01-01", totalArticles: 15 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25, sex: "Female", height: "5'5\"", weight: "60kg", joiningDate: "2021-05-15", totalArticles: 10 },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 28, sex: "Female", height: "5'7\"", weight: "65kg", joiningDate: "2023-03-10", totalArticles: 5 },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 35, sex: "Male", height: "5'11\"", weight: "80kg", joiningDate: "2020-06-20", totalArticles: 20 },
    { id: 5, name: "Charlie White", email: "charlie@example.com", age: 40, sex: "Male", height: "6'0\"", weight: "90kg", joiningDate: "2019-08-12", totalArticles: 30 },
    { id: 6, name: "David Green", email: "david@example.com", age: 29, sex: "Male", height: "5'8\"", weight: "75kg", joiningDate: "2022-02-28", totalArticles: 8 },
    { id: 7, name: "Eva Blue", email: "eva@example.com", age: 27, sex: "Female", height: "5'6\"", weight: "65kg", joiningDate: "2021-11-10", totalArticles: 12 },
    { id: 8, name: "Frank Black", email: "frank@example.com", age: 32, sex: "Male", height: "5'10\"", weight: "85kg", joiningDate: "2020-03-19", totalArticles: 18 },
  ];

  const deleteSelectedRows = () => {
    // Delete the selected users
    const remainingUsers = users.filter(user => !selectedRows.includes(user.id));
    console.log("Deleted users: ", selectedRows);
    console.log("Remaining users: ", remainingUsers);
    setSelectedRows([]); // Clear selected rows after deletion
  };

  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 flex flex-col">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">User Management</h1>
      </header>

      {/* Users Table Component */}
      <UsersTable
        users={users}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        deleteSelectedRows={deleteSelectedRows}
      />

      {/* Footer Section */}
      <div className="flex flex-wrap justify-center items-center mt-12 gap-6">
        {/* Total Users Card Component */}
        <TotalUsersCard users={users} />
        {/* Time Chart Component */}
        <TimeChart />
      </div>
    </div>
  );
};

export default UsersPage;


