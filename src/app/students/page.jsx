"use client";

import React, { useState } from "react";
import { 
  FiSearch, 
  FiBell, 
  FiPlus, 
  FiTrash2, 
  FiEdit2, 
  FiChevronDown,
  FiMoreVertical,
  FiMail,
  FiPhone
} from "react-icons/fi";

const initialStudents = [
  { id: "STU-001", name: "Marta Adams", email: "marta.adams@student.edu", phone: "+1 234 567 890", class: "BCA - A", status: "Active", avatar: "https://i.pravatar.cc/150?u=1", joined: "12 Aug 2024" },
  { id: "STU-002", name: "Robin Logan", email: "robin.logan@student.edu", phone: "+1 234 567 891", class: "BCA - A", status: "Active", avatar: "https://i.pravatar.cc/150?u=2", joined: "14 Aug 2024" },
  { id: "STU-003", name: "Cruz French", email: "cruz.french@student.edu", phone: "+1 234 567 892", class: "BCA - G", status: "Inactive", avatar: "https://i.pravatar.cc/150?u=3", joined: "15 Aug 2024" },
  { id: "STU-004", name: "Claudine Cherry", email: "claudine.ch@student.edu", phone: "+1 234 567 893", class: "BCA C", status: "Active", avatar: "https://i.pravatar.cc/150?u=5", joined: "20 Aug 2024" },
  { id: "STU-005", name: "Mitch Huber", email: "mitch.huber@student.edu", phone: "+1 234 567 894", class: "BCA B", status: "Active", avatar: "https://i.pravatar.cc/150?u=6", joined: "01 Sep 2024" },
  { id: "STU-006", name: "Essie Fry", email: "essie.fry@student.edu", phone: "+1 234 567 895", class: "BCA A", status: "Suspended", avatar: "https://i.pravatar.cc/150?u=7", joined: "05 Sep 2024" },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100">Active</span>;
      case "Inactive":
        return <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold border border-gray-200">Inactive</span>;
      case "Suspended":
        return <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100">Suspended</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-[32px] flex-1 flex flex-col shadow-sm border border-gray-100 overflow-hidden relative h-full">
      {/* Header */}
      <header className="px-8 py-6 flex items-center justify-between bg-white z-10 sticky top-0 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students Directory</h1>
          <p className="text-sm text-gray-500 mt-1">Manage student profiles, enrollments, and details</p>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md flex items-center gap-2 hover:bg-gray-800 transition">
            <FiPlus className="text-lg" /> Add New Student
          </button>
          
          <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center relative hover:bg-gray-50 transition text-gray-600">
            <FiBell className="text-lg" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 cursor-pointer">
            <img src="https://i.pravatar.cc/150?u=99" alt="User" className="w-10 h-10 rounded-full border border-gray-200" />
            <FiChevronDown className="text-gray-400" />
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="px-8 py-4 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-sm outline-none w-[320px] focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
            All Classes <FiChevronDown />
          </button>
        </div>

        <div className="text-sm text-gray-500 font-medium">
          Showing <span className="text-gray-900 font-bold">{initialStudents.length}</span> students
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto bg-white min-h-0">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-gray-50 z-20 shadow-sm border-y border-gray-100">
            <tr>
              <th className="py-4 px-8 text-xs font-bold text-gray-500 uppercase tracking-wider">Student & ID</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Details</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Class</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Date Joined</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-4 px-8 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialStudents.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((student) => (
              <tr key={student.id} className="hover:bg-gray-50/50 transition-colors group border-b border-gray-50">
                
                {/* Profile Widget */}
                <td className="py-4 px-8">
                  <div className="flex items-center gap-4">
                    <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{student.name}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{student.id}</div>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[13px] text-gray-600">
                      <FiMail className="text-gray-400" /> {student.email}
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-600">
                      <FiPhone className="text-gray-400" /> {student.phone}
                    </div>
                  </div>
                </td>

                {/* Class */}
                <td className="py-4 px-6">
                  <span className="text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg">
                    {student.class}
                  </span>
                </td>

                {/* Joined Date */}
                <td className="py-4 px-6">
                  <span className="text-sm font-medium text-gray-500">{student.joined}</span>
                </td>

                {/* Status */}
                <td className="py-4 px-6">
                  {getStatusBadge(student.status)}
                </td>

                {/* Actions */}
                <td className="py-4 px-8">
                  <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition shadow-sm">
                      <FiEdit2 className="text-[13px]" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition shadow-sm">
                      <FiTrash2 className="text-[13px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
