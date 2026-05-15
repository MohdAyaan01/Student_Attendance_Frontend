"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  FiUsers, 
  FiBookOpen, 
  FiClock,
  FiChevronRight,
  FiMoreVertical,
  FiCalendar
} from "react-icons/fi";

export default function TeacherDashboard() {
  const router = useRouter();

  const sections = [
    { id: "bca-a", name: "BCA A", subject: "C++", students: 32, time: "09:00 AM - 10:30 AM", color: "bg-blue-500", light: "bg-blue-50 text-blue-600" },
    { id: "bca-b", name: "BCA B", subject: "Java", students: 28, time: "11:00 AM - 12:30 PM", color: "bg-purple-500", light: "bg-purple-50 text-purple-600" },
    { id: "bca-c", name: "BCA C", subject: "JavaScript", students: 35, time: "01:30 PM - 03:00 PM", color: "bg-orange-500", light: "bg-orange-50 text-orange-600" },
  ];

  return (
    <div className="bg-white rounded-[32px] flex-1 flex flex-col shadow-sm border border-gray-100 overflow-y-auto">
      {/* Header */}
      <header className="px-8 py-8 border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Classes</h1>
        <p className="text-gray-500 mt-2 font-medium">Select a section to view students and mark attendance</p>
      </header>

      {/* Content */}
      <div className="p-8">
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                <FiUsers className="text-xl" />
              </div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Total Students</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">95</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600">
                <FiCalendar className="text-xl" />
              </div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Today's Avg</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">92% <span className="text-sm text-green-500 font-medium ml-2">+2%</span></h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600">
                <FiBookOpen className="text-xl" />
              </div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Active Sections</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">3</h2>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Schedule</h3>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div 
              key={section.id} 
              onClick={() => router.push(`/teacher/class/${section.id}`)}
              className="group bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-gray-300 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 ${section.color}`}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${section.light} mb-3 inline-block`}>
                    {section.subject}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{section.name}</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-900 transition">
                  <FiMoreVertical className="text-xl" />
                </button>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-500 font-medium gap-3">
                  <FiClock className="text-gray-400 text-lg" /> {section.time}
                </div>
                <div className="flex items-center text-sm text-gray-500 font-medium gap-3">
                  <FiUsers className="text-gray-400 text-lg" /> {section.students} Students Enrolled
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/150?u=${section.id}1`} alt="student" />
                  <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/150?u=${section.id}2`} alt="student" />
                  <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/150?u=${section.id}3`} alt="student" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    +{section.students - 3}
                  </div>
                </div>
                
                <button className="flex items-center gap-1 text-sm font-bold text-black group-hover:underline">
                  Mark Attendance <FiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}