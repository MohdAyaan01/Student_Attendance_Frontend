"use client";

import React from "react";
import { 
  FiSearch, 
  FiBell, 
  FiFilter, 
  FiTrash2, 
  FiEdit2, 
  FiChevronDown,
  FiCalendar
} from "react-icons/fi";

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

export default function AttendancePage() {
  return (
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
            <FiChevronDown className="text-gray-400 mt-1" />
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
      <div className="flex-1 overflow-auto bg-white min-h-0">
        <table className="w-full text-left border-collapse min-w-max">
          <thead className="sticky top-0 bg-white z-20 shadow-sm border-b border-gray-100">
            <tr>
              <th className="py-4 px-6 w-[240px]">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                  <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                  Student Profile
                  <FiChevronDown className="text-gray-400" />
                </div>
              </th>
              {days.map((d, i) => (
                <th key={i} className={`py-3 px-2 text-center min-w-[100px] border-l border-gray-100 ${d.isHoliday ? 'bg-gray-50/50' : 'bg-white'}`}>
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
                <td className="border-b border-gray-100 py-3 px-6 bg-white z-10 sticky left-0 group-hover:bg-gray-50/50 transition-colors w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border border-gray-300 rounded-full flex-shrink-0 bg-white"></div>
                    <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full border border-gray-200 bg-white" />
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
  );
}