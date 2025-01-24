import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUsers(res.data));
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('User List', 10, 10);
    users.forEach((user, index) => {
      doc.text(`${index + 1}. ${user.name} (${user.company.name}, ${user.address.city})`, 10, 20 + index * 10);
    });
    doc.save('user-list.pdf');
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.company.name.toLowerCase().includes(search.toLowerCase()) ||
      user.address.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-md mt-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">User Management</h1>
      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search by name, company, or city"
          className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          onClick={handleDownloadPDF}
        >
          Download as PDF
        </button>
      </div>

      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Company</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">City</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.company.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
