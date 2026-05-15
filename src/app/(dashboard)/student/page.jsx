"use client";

import React from "react";
import { 
  FiClock, 
  FiCalendar, 
  FiCheckCircle, 
  FiAlertCircle,
  FiBookOpen,
  FiTrendingUp
} from "react-icons/fi";

export default function StudentDashboard() {
  return (
    <div className="bg-white rounded-[32px] flex-1 flex flex-col shadow-sm border border-gray-100 overflow-y-auto w-full">
      
      {/* Header */}
      <header className="px-8 py-8 border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back, Mithun! 👋</h1>
        <p className="text-gray-500 mt-2 font-medium">Here's your academic overview and schedule for today</p>
      </header>

      {/* Content */}
      <div className="p-8">
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 border border-green-200 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm font-bold text-green-600 uppercase tracking-wide">Overall Attendance</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-1">94%</h2>
              <span className="text-xs font-medium text-green-700">Excellent standing</span>
            </div>
            <FiCheckCircle className="absolute -bottom-4 -right-4 text-8xl text-green-200/50" />
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 border border-blue-200 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Classes Today</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-1">4</h2>
              <span className="text-xs font-medium text-blue-700">First class at 9:00 AM</span>
            </div>
            <FiClock className="absolute -bottom-4 -right-4 text-8xl text-blue-200/50" />
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 border border-orange-200 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">Assignments</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-1">2</h2>
              <span className="text-xs font-medium text-orange-700">Due this week</span>
            </div>
            <FiBookOpen className="absolute -bottom-4 -right-4 text-8xl text-orange-200/50" />
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 border border-purple-200 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wide">Latest Grade</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-1">A-</h2>
              <span className="text-xs font-medium text-purple-700">Mathematics Midterm</span>
            </div>
            <FiTrendingUp className="absolute -bottom-4 -right-4 text-8xl text-purple-200/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Today's Schedule */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FiCalendar /> Today's Schedule
            </h3>
            <div className="space-y-4">
              
              <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 hover:shadow-md transition bg-white">
                <div className="flex flex-col items-center justify-center font-bold text-sm text-gray-500 w-20 border-r border-gray-100 pr-4">
                  <span>09:00</span>
                  <span className="text-gray-300">AM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">C++</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1"><FiClock /> 1h 30m • Room 302</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 hover:shadow-md transition bg-white">
                <div className="flex flex-col items-center justify-center font-bold text-sm text-gray-500 w-20 border-r border-gray-100 pr-4">
                  <span>11:00</span>
                  <span className="text-gray-300">AM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Java Script</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1"><FiClock /> 1h 30m • Room 104</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 hover:shadow-md transition bg-white opacity-60">
                <div className="flex flex-col items-center justify-center font-bold text-sm text-gray-500 w-20 border-r border-gray-100 pr-4">
                  <span>01:30</span>
                  <span className="text-gray-300">PM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Java</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1"><FiClock /> 1h 30m • Room 201</p>
                </div>
              </div>

            </div>
          </div>

          {/* Recent Attendance History */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FiClock /> Recent Attendance activity
            </h3>
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <ul className="space-y-5">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <FiCheckCircle className="text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">C++</p>
                      <p className="text-xs font-medium text-gray-500">Yesterday • 09:00 AM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100">Present</span>
                </li>

                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <FiCheckCircle className="text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Java Script</p>
                      <p className="text-xs font-medium text-gray-500">Yesterday • 11:00 AM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100">Present</span>
                </li>

                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <FiAlertCircle className="text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Java</p>
                      <p className="text-xs font-medium text-gray-500">Tuesday, 24 Sep • 01:30 PM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100">Absent</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}