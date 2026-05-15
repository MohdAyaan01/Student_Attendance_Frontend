"use client";

import React from "react";
import { 
  FiHome, 
  FiUsers, 
  FiCalendar, 
  FiFileText, 
  FiMessageCircle, 
  FiSettings, 
  FiLogOut, 
  FiSearch, 
  FiBell, 
  FiFilter, 
  FiTrash2, 
  FiEdit2, 
  FiChevronDown,
  FiPlus,
  FiHelpCircle
} from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";

export default function ScholarlyDashboard() {
  const students = [
    { id: 1, name: "Marta Adams", avatar: "https://i.pravatar.cc/150?u=1", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
    { id: 2, name: "Robin Logan", avatar: "https://i.pravatar.cc/150?u=2", attendance: ["Absent|Health Problem", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
    { id: 3, name: "Cruz French", avatar: "https://i.pravatar.cc/150?u=3", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "Late|Traffic Jam"] },
    { id: 4, name: "Marta Adams", avatar: "https://i.pravatar.cc/150?u=4", attendance: ["On time", "Late|Traffic Jam", "Holiday", "On time", "On time", "On time", "On time"] },
    { id: 5, name: "Claudine Cherry", avatar: "https://i.pravatar.cc/150?u=5", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
    { id: 6, name: "Mitch Huber", avatar: "https://i.pravatar.cc/150?u=6", attendance: ["On time", "On time", "Holiday", "On time", "On time", "Late|Family Problem", "On time"] },
    { id: 7, name: "Essie Fry", avatar: "https://i.pravatar.cc/150?u=7", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "Absent|Health Problem"] },
    { id: 8, name: "Shanna Orozco", avatar: "https://i.pravatar.cc/150?u=8", attendance: ["Late|Traffic Jam", "On time", "Holiday", "On time", "Absent|Health Problem", "On time", "On time"] },
    { id: 9, name: "Gabriel Nelson", avatar: "https://i.pravatar.cc/150?u=9", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
    { id: 10, name: "Shirley George", avatar: "https://i.pravatar.cc/150?u=10", attendance: ["On time", "On time", "Holiday", "On time", "On time", "Late|Traffic Jam", "On time"] },
    { id: 11, name: "Gustavo Lopez", avatar: "https://i.pravatar.cc/150?u=11", attendance: ["On time", "Absent|Health Problem", "Holiday", "Late|Family Problem", "On time", "On time", "On time"] },
    { id: 12, name: "Dante Cantrell", avatar: "https://i.pravatar.cc/150?u=12", attendance: ["On time", "On time", "Holiday", "Late|Traffic Jam", "On time", "On time", "On time"] },
  ];

  const days = [
    { date: 23, day: "Monday" },
    { date: 24, day: "Tuesday" },
    { date: 25, day: "Wednesday", isHoliday: true },
    { date: 26, day: "Thursday" },
    { date: 27, day: "Friday" },
    { date: 28, day: "Saturday" },
    { date: 29, day: "Sunday" },
  ];

  const renderStatus = (status, isHolidayColumn, idx) => {
    if (isHolidayColumn) {
       // Just empty for holiday columns as per mock, we'll put the text in the first row
       if (idx === 0) {
          return (
            <div className="flex flex-col items-center justify-center text-[11px] text-gray-400 py-4 h-full relative z-10 w-full whitespace-nowrap">
              <span>Holiday</span>
              <span>- - -</span>
              <span>(Annual Book Fair)</span>
            </div>
          );
       }
       return null;
    }

    if (status === "On time") {
      return <span className="text-gray-500 font-medium text-xs">On time</span>;
    }

    if (status.startsWith("Absent")) {
      const reason = status.split("|")[1];
      return (
        <div className="bg-[#fff0f0] w-full h-full border-l-2 border-red-500 flex flex-col justify-center items-center py-2 absolute inset-0">
          <span className="text-red-500 font-medium text-xs">Absent</span>
          <span className="text-gray-400 text-[10px]">({reason})</span>
        </div>
      );
    }

    if (status.startsWith("Late")) {
      const reason = status.split("|")[1];
      return (
        <div className="bg-[#ffffe0] w-full h-full border-l-2 border-yellow-400 flex flex-col justify-center items-center py-2 absolute inset-0">
          <span className="text-yellow-600 font-medium text-xs">Late</span>
          <span className="text-gray-400 text-[10px]">({reason})</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-white flex flex-col h-full border-r border-gray-100 flex-shrink-0 relative z-20 shadow-sm rounded-r-[32px] overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 px-8 pt-8 pb-8">
          <IoLeafOutline className="text-black text-2xl" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">Scholarly</span>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-4">
          <div className="text-xs font-semibold text-gray-400 mb-4 px-4 uppercase tracking-wider">Main Menu</div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium">
              <FiHome className="text-lg" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium">
              <FiUsers className="text-lg" /> Students
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-900 font-bold bg-white rounded-xl shadow-sm border border-gray-100">
              <span className="w-1 h-5 bg-black absolute left-0 rounded-r-md"></span>
              <FiCalendar className="text-lg" /> Attendance
            </a>
            <a href="#" className="flex items-center justify-between px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium">
              <div className="flex items-center gap-3"><FiFileText className="text-lg" /> Report</div>
              <FiPlus className="text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-between px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium">
              <div className="flex items-center gap-3"><FiMessageCircle className="text-lg" /> Announcements</div>
              <FiPlus className="text-gray-400" />
            </a>
          </nav>

          {/* Quick Add Card */}
          <div className="mt-8 mx-2 bg-gray-50/80 border border-gray-100 rounded-3xl p-6 flex flex-col items-center shadow-sm relative overflow-hidden">
            <div className="flex -space-x-2 mb-4">
              <img className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=41" alt="avatar" />
              <img className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=42" alt="avatar" />
              <img className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=43" alt="avatar" />
            </div>
            <h4 className="text-gray-900 font-bold mb-4 text-center text-[15px]">Quick Add New<br/>Students</h4>
            <button className="bg-black text-white rounded-full py-2.5 px-5 flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition shadow-md w-full justify-center">
              <FiPlus /> Add Student
            </button>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="px-4 pb-8 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-gray-900 font-medium rounded-xl">
            <FiHelpCircle className="text-xl" /> Help Center
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-gray-900 font-medium rounded-xl">
            <FiSettings className="text-xl" /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-gray-900 font-medium rounded-xl mt-4">
            <FiLogOut className="text-xl" /> Sign Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 py-6 overflow-hidden">
        <div className="bg-white rounded-[32px] flex-1 flex flex-col shadow-sm border border-gray-100 overflow-hidden relative">
          
          {/* Header */}
          <header className="px-8 py-6 flex items-center justify-between bg-white z-10 sticky top-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
              <p className="text-sm text-gray-500 mt-1">Manage and review records</p>
            </div>

            <div className="flex items-center gap-6">
              {/* Search */}
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input 
                  type="text" 
                  placeholder="Search here..." 
                  className="pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-sm outline-none w-[300px] focus:ring-2 focus:ring-gray-200 transition"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50">
                  <span className="text-xs font-bold">F</span>
                </button>
              </div>

              {/* Action Icons */}
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center relative hover:bg-gray-50 transition text-gray-600">
                <FiBell className="text-lg" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-3 cursor-pointer">
                <img src="https://i.pravatar.cc/150?u=99" alt="User" className="w-10 h-10 rounded-full border border-gray-200" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Mithun Ray</h3>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
                <FiChevronDown className="text-gray-400 ml-2" />
              </div>
            </div>
          </header>

          {/* Subheader controls */}
          <div className="px-8 py-4 flex items-center justify-between border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-md flex items-center gap-2">
                <FiCalendar /> 23 Sep - 29 Sep 2024
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                September <FiChevronDown />
              </button>
            </div>

            <div className="flex items-center gap-6 text-[13px] font-medium text-gray-500">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-300"></div> Holiday</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> On time 82%</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Late 10%</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Absent 8%</div>
              <div className="w-px h-6 bg-gray-200 ml-2"></div>
              <button className="text-gray-400 hover:text-gray-900"><FiEdit2 className="text-lg" /></button>
              <button className="text-gray-400 hover:text-red-500"><FiTrash2 className="text-lg" /></button>
            </div>
          </div>

          {/* Table Container */}
          <div className="flex-1 overflow-auto bg-white">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-white z-20 shadow-sm">
                <tr>
                  <th className="py-4 px-6 border-b border-gray-100 w-[240px]">
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                      Student Profile
                      <FiChevronDown className="text-gray-400" />
                    </div>
                  </th>
                  {days.map((d, i) => (
                    <th key={i} className={`py-3 px-2 border-b border-gray-100 text-center min-w-[100px] border-l ${d.isHoliday ? 'bg-gray-50/50' : 'bg-white'}`}>
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-bold text-gray-900">{d.date}</span>
                        <span className="text-[11px] font-medium text-gray-400">{d.day}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((student, sIdx) => (
                  <tr key={student.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="border-b border-gray-100 py-3 px-6 bg-white z-10 sticky left-0 group-hover:bg-gray-50/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border border-gray-300 rounded-full flex-shrink-0"></div>
                        <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full border border-gray-200" />
                        <span className="text-[13px] font-medium text-gray-600 whitespace-nowrap">{student.name}</span>
                      </div>
                    </td>
                    {student.attendance.map((status, i) => (
                      <td key={i} className={`border-b border-gray-100 text-center relative h-[52px] border-l ${days[i].isHoliday ? 'bg-gray-50/50' : ''}`}>
                        {renderStatus(status, days[i].isHoliday, sIdx)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
