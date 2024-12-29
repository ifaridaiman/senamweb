"use client";
import { mulishBold, mulishLight } from "@/app/fonts/font";
import React, { useState, useEffect } from "react";
import { RiFileExcel2Line } from "react-icons/ri";

type UserPreSales = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  exportedAt?: string | null;
};

const PreSalesList = () => {
  const [users, setUsers] = useState<UserPreSales[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  const fetchUsers = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/presale/data?page=${page}&pageSize=5`);
      const data = await response.json();
      setTotalUsers(data.totalCount);

      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    const response = await fetch("/api/presale/excel");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className={`${mulishBold.className} mt-10`}>
      <div className="flex flex-row justify-between items-center rounded-t-lg border border-gray-400 px-8 py-2">
        <div>
          <p className="text-base font-bold">Pre-Sales List</p>
          <p className={`${mulishLight.className} text-sm`}>Total user registered: <span>{totalUsers}</span></p>
        </div>
        <div>
          <button className="flex gap-4 items-center border border-gray-300 rounded-sm px-3 py-2 hover:bg-gray-300 hover:text-gray-600 duration-150 " onClick={handleDownload}>
            <RiFileExcel2Line />
            Export
          </button>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-200 ">
              <th className="px-8 py-3">Name</th>
              <th className="px-8 py-3">Email</th>
              <th className="px-8 py-3">Phone</th>
              {/* <th className="px-8 py-3">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-8 py-3">{user.name}</td>
                <td className="px-8 py-3">{user.email}</td>
                <td className="px-8 py-3">{user.phone}</td>
                {/* <td className="px-8 py-3">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-4 py-2 border rounded ${
            page === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-200"
          }`}
        >
          Previous
        </button>
        <p>
          Page {page} of {totalPages}
        </p>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 border rounded ${
            page === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PreSalesList;
