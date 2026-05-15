"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  FiSearch, 
  FiCalendar, 
  FiChevronDown,
  FiArrowLeft
} from "react-icons/fi";

const dummyStudents = [
  { id: 1, name: "Marta Adams", avatar: "https://i.pravatar.cc/150?u=1", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
  { id: 2, name: "Robin Logan", avatar: "https://i.pravatar.cc/150?u=2", attendance: ["Absent|Health Problem", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
  { id: 3, name: "Cruz French", avatar: "https://i.pravatar.cc/150?u=3", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "Late|Traffic Jam"] },
  { id: 4, name: "Claudine Cherry", avatar: "https://i.pravatar.cc/150?u=5", attendance: ["On time", "On time", "Holiday", "On time", "On time", "On time", "On time"] },
  { id: 5, name: "Mitch Huber", avatar: "https://i.pravatar.cc/150?u=6", attendance: ["On time", "On time", "Holiday", "On time", "On time", "Late|Family Problem", "On time"] },
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

export default function ClassAttendancePage() {
  const params = useParams();
  const router = useRouter();
  
  // Format class name from ID (e.g. bca-a -> BCA A)
  const className = params.id 
    ? params.id.toString().replace("-", " ").toUpperCase() 
    : "Class Section";

  const renderStatus = (status, isHolidayColumn, idx) => {
    if (isHolidayColumn) {
       if (idx === 0) return <div className="text-[11px] text-gray-400 py-4 w-full text-center">Holiday</div>;
       return null;
    }
    if (status === "On time") return <span className="text-gray-500 font-medium text-xs">On time</span>;
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
    <div className="bg-white rounded-[32px] flex-1 flex flex-col shadow-sm border border-gray-100 overflow-hidden relative h-full">
      
      {/* Header */}
      <header className="px-8 py-6 flex items-center justify-between border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push('/teacher')}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition"
          >
            <FiArrowLeft className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{className} - Attendance Roster</h1>
            <p className="text-sm text-gray-500 mt-1">Review and manage student records</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-4 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-md">
            <FiCalendar /> 23 Sep - 29 Sep 2024
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-md">
            Save Register
          </button>
        </div>
      </header>

      {/* Table Container */}
      <div className="flex-1 overflow-auto bg-white min-h-0">
        <table className="w-full text-left border-collapse min-w-max">
          <thead className="sticky top-0 bg-white z-20 border-b border-gray-100 shadow-sm">
            <tr>
              <th className="py-4 px-6 w-[240px]">
                <div className="text-sm font-bold text-gray-900">Student Profile</div>
              </th>
              {days.map((d, i) => (
                <th key={i} className={`py-3 px-2 text-center min-w-[100px] border-l border-gray-100 ${d.isHoliday ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-gray-900">{d.date}</span>
                    <span className="text-[11px] font-medium text-gray-400">{d.day}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dummyStudents.map((student, sIdx) => (
              <tr key={student.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="border-b border-gray-100 py-3 px-6 bg-white z-10 sticky left-0 group-hover:bg-gray-50/50 w-[240px]">
                  <div className="flex items-center gap-3">
                    <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full border border-gray-200" />
                    <span className="text-[13px] font-medium text-gray-600 whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                {student.attendance.map((status, i) => (
                  <td key={i} className={`border-b border-gray-100 text-center relative h-[52px] border-l ${days[i].isHoliday ? 'bg-gray-50' : ''}`}>
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
