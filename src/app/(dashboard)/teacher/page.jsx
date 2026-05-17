"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiBookOpen, 
  FiClock,
  FiChevronRight,
  FiMoreVertical,
  FiCalendar,
  FiPlus,
  FiTrendingUp
} from "react-icons/fi";

export default function TeacherDashboard() {
  const router = useRouter();

  const sections = [
    { id: "bca-a", name: "BCA A", subject: "C++", students: 32, time: "09:00 AM - 10:30 AM", gradient: "from-blue-500 to-indigo-600", iconColor: "text-blue-400" },
    { id: "bca-b", name: "BCA B", subject: "Java", students: 28, time: "11:00 AM - 12:30 PM", gradient: "from-purple-500 to-pink-600", iconColor: "text-purple-400" },
    { id: "bca-c", name: "BCA C", subject: "JavaScript", students: 35, time: "01:30 PM - 03:00 PM", gradient: "from-orange-500 to-red-600", iconColor: "text-orange-400" },
  ];

  const stats = [
    { label: "Total Students", value: "95", icon: <FiUsers />, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { label: "Today's Attendance", value: "92%", trend: "+2%", icon: <FiTrendingUp />, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Active Sections", value: "3", icon: <FiBookOpen />, color: "text-amber-400", bg: "bg-amber-400/10" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">
            My Classes<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-slate-400 font-medium">Manage your schedule and mark student attendance</p>
        </div>
        <button className="btn-premium flex items-center gap-2 self-start md:self-center">
          <FiPlus className="text-xl" /> Create New Section
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-[32px] border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:scale-110 duration-500`}>
                {stat.icon}
              </div>
              {stat.trend && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <FiTrendingUp /> {stat.trend}
                </span>
              )}
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h2 className="text-3xl font-black text-white tracking-tighter">{stat.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* Schedule Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
          <h3 className="text-xl font-bold text-white tracking-tight">Today's Schedule</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <motion.div 
              key={section.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              onClick={() => router.push(`/teacher/class/${section.id}`)}
              className="card-premium group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`} />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${section.iconColor}`}>
                    {section.subject}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">
                    {section.name}
                  </h3>
                </div>
                <button className="p-2 text-slate-500 hover:text-white transition-colors">
                  <FiMoreVertical className="text-xl" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-sm text-slate-400 font-medium gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors">
                    <FiClock />
                  </div>
                  {section.time}
                </div>
                <div className="flex items-center text-sm text-slate-400 font-medium gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors">
                    <FiUsers />
                  </div>
                  {section.students} Students Enrolled
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((num) => (
                    <img 
                      key={num}
                      className="w-8 h-8 rounded-full border-2 border-[#0f172a] shadow-lg" 
                      src={`https://i.pravatar.cc/150?u=${section.id}${num}`} 
                      alt="student" 
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#0f172a] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                    +{section.students - 3}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Mark Attendance <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}