"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiClock, 
  FiCalendar, 
  FiCheckCircle, 
  FiAlertCircle,
  FiBookOpen,
  FiTrendingUp,
  FiMapPin
} from "react-icons/fi";

export default function StudentDashboard() {
  const stats = [
    { label: "Overall Attendance", value: "94%", detail: "Excellent standing", icon: <FiCheckCircle />, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Classes Today", value: "4", detail: "First at 09:00 AM", icon: <FiClock />, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Assignments", value: "2", detail: "Due this week", icon: <FiBookOpen />, color: "text-amber-400", bg: "bg-amber-400/10" },
    { label: "Latest Grade", value: "A-", detail: "Mathematics", icon: <FiTrendingUp />, color: "text-purple-400", bg: "bg-purple-400/10" },
  ];

  const schedule = [
    { time: "09:00", period: "AM", subject: "C++", duration: "1h 30m", room: "Room 302", status: "Upcoming" },
    { time: "11:00", period: "AM", subject: "JavaScript", duration: "1h 30m", room: "Room 104", status: "Upcoming" },
    { time: "01:30", period: "PM", subject: "Java", duration: "1h 30m", room: "Room 201", status: "Scheduled" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-white tracking-tight mb-2">
          Welcome back, Mithun<span className="text-indigo-500">!</span> 👋
        </h1>
        <p className="text-slate-400 font-medium">Here's your academic overview and schedule for today</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-[32px] border-white/5 hover:border-white/10 transition-all relative overflow-hidden group"
          >
            <div className={`absolute -bottom-6 -right-6 text-7xl ${stat.color} opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
              {stat.icon}
            </div>
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl mb-4`}>
              {stat.icon}
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h2 className="text-3xl font-black text-white tracking-tighter mb-1">{stat.value}</h2>
            <p className="text-[10px] font-bold text-slate-400">{stat.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Today's Schedule */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <h3 className="text-xl font-bold text-white tracking-tight">Today's Schedule</h3>
          </div>
          
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="glass p-5 rounded-3xl border-white/5 flex gap-5 hover:bg-white/5 transition-all group">
                <div className="flex flex-col items-center justify-center bg-white/5 rounded-2xl px-4 py-2 min-w-[80px] border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                  <span className="text-lg font-black text-white">{item.time}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{item.period}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors">{item.subject}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-xs text-slate-400 flex items-center gap-1.5"><FiClock className="text-indigo-400" /> {item.duration}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5"><FiMapPin className="text-indigo-400" /> {item.room}</p>
                  </div>
                </div>
                <div className="self-center">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-purple-500 rounded-full" />
            <h3 className="text-xl font-bold text-white tracking-tight">Recent Activity</h3>
          </div>
          
          <div className="glass-dark rounded-[32px] p-8 border-white/5">
            <ul className="space-y-8">
              {[
                { subject: "C++", status: "Present", time: "Yesterday • 09:00 AM", color: "text-emerald-400", bg: "bg-emerald-400/10", icon: <FiCheckCircle /> },
                { subject: "JavaScript", status: "Present", time: "Yesterday • 11:00 AM", color: "text-emerald-400", bg: "bg-emerald-400/10", icon: <FiCheckCircle /> },
                { subject: "Java", status: "Absent", time: "24 Sep • 01:30 PM", color: "text-rose-400", bg: "bg-rose-400/10", icon: <FiAlertCircle /> },
              ].map((activity, i) => (
                <li key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${activity.bg} ${activity.color} flex items-center justify-center text-xl transition-transform group-hover:scale-110`}>
                      {activity.icon}
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-indigo-400 transition-colors">{activity.subject}</p>
                      <p className="text-[11px] font-medium text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full ${activity.bg} ${activity.color} text-[10px] font-black uppercase tracking-widest`}>
                    {activity.status}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-10 py-4 rounded-2xl bg-white/5 text-slate-400 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all">
              View Detailed Records
            </button>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}