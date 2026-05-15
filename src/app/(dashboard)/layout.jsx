"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  FiHome, 
  FiBookOpen, 
  FiMessageCircle, 
  FiSettings, 
  FiLogOut,
  FiHelpCircle
} from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState("teacher"); // Defaulting to teacher for view

  useEffect(() => {
    setMounted(true);
    const r = localStorage.getItem("role");
    if (!r) {
      router.push("/signin");
    } else {
      setRole(r);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/signin");
  };

  if (!mounted) return null;

  // Teacher specific links
  const teacherMenu = [
    { name: "My Classes", path: "/teacher", icon: <FiHome className="text-lg" /> },
    { name: "Announcements", path: "/teacher/announcements", icon: <FiMessageCircle className="text-lg" /> },
  ];

  // Student specific links (Simplified)
  const studentMenu = [
    { name: "My Dashboard", path: "/student", icon: <FiHome className="text-lg" /> },
    { name: "My Grades/Attendance", path: "/student/records", icon: <FiBookOpen className="text-lg" /> },
    { name: "Announcements", path: "/student/announcements", icon: <FiMessageCircle className="text-lg" /> },
  ];

  const menuItems = role === "teacher" ? teacherMenu : studentMenu;

  return (
    <div className="flex h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      
      {/* Sidebar - Dynamically adjusted for Teacher/Student */}
      <aside className="w-[260px] bg-white flex flex-col h-full border-r border-gray-100 flex-shrink-0 relative z-20 shadow-sm rounded-r-[32px] overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 px-8 pt-8 pb-8">
          <IoLeafOutline className="text-black text-2xl" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">SAMS</span>
        </div>

        {/* User Badge */}
        <div className="px-6 mb-8">
          <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center gap-3">
             <img src="https://i.pravatar.cc/150?u=99" className="w-10 h-10 rounded-full border border-gray-200" alt="profile"/>
             <div>
               <p className="text-sm font-bold text-gray-900">Mithun Ray</p>
               <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{role}</p>
             </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-4">
          <div className="text-xs font-semibold text-gray-400 mb-4 px-4 uppercase tracking-wider">Main Menu</div>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
              return (
                <Link key={item.name} href={item.path}>
                  <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors font-medium cursor-pointer ${isActive ? 'text-gray-900 font-bold bg-white shadow-sm border border-gray-100 relative' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      {isActive && <span className="w-1 h-5 bg-black absolute left-0 rounded-r-md"></span>}
                      {item.icon} {item.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Menu */}
        <div className="px-4 pb-8 space-y-1 mt-auto">
          <Link href={`/${role}/help`}>
            <div className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-gray-900 font-medium rounded-xl cursor-pointer">
              <FiHelpCircle className="text-xl" /> Help Center
            </div>
          </Link>
          <Link href={`/${role}/settings`}>
            <div className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-gray-900 font-medium rounded-xl cursor-pointer">
              <FiSettings className="text-xl" /> Settings
            </div>
          </Link>
          <div onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 text-red-500 hover:text-red-700 font-medium rounded-xl mt-4 cursor-pointer">
            <FiLogOut className="text-xl" /> Sign Out
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 py-6 overflow-hidden">
        {children}
      </main>
    </div>
  );
}