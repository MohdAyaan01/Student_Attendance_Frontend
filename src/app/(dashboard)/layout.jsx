"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, 
  FiBookOpen, 
  FiMessageCircle, 
  FiSettings, 
  FiLogOut,
  FiHelpCircle,
  FiSearch,
  FiBell,
  FiMenu,
  FiX
} from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState("teacher");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const menuItems = role === "teacher" ? [
    { name: "My Classes", path: "/teacher", icon: <FiHome /> },
    { name: "Announcements", path: "/teacher/announcements", icon: <FiMessageCircle /> },
  ] : [
    { name: "My Dashboard", path: "/student", icon: <FiHome /> },
    { name: "My Records", path: "/student/records", icon: <FiBookOpen /> },
    { name: "Announcements", path: "/student/announcements", icon: <FiMessageCircle /> },
  ];

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-[#0f172a] border-r border-white/5 flex flex-col h-full flex-shrink-0 z-30 relative"
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center px-6 gap-3 mb-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
            <IoLeafOutline className="text-white text-xl" />
          </div>
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-xl font-black text-white tracking-tighter"
              >
                SAMS<span className="text-indigo-500">.</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 space-y-8 overflow-y-auto overflow-x-hidden">
          <div>
            {isSidebarOpen && (
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-3 mb-4">
                Main Menu
              </p>
            )}
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
                return (
                  <Link key={item.name} href={item.path}>
                    <div className={`
                      flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300 cursor-pointer group
                      ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}
                    `}>
                      <div className={`text-xl ${isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'}`}>
                        {item.icon}
                      </div>
                      {isSidebarOpen && (
                        <span className="font-semibold text-sm whitespace-nowrap">{item.name}</span>
                      )}
                      {isActive && isSidebarOpen && (
                        <motion.div layoutId="active" className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            {isSidebarOpen && (
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-3 mb-4">
                Support
              </p>
            )}
            <nav className="space-y-1">
              <Link href={`/${role}/help`}>
                <div className="flex items-center gap-4 px-3 py-3 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all cursor-pointer group">
                  <FiHelpCircle className="text-xl group-hover:scale-110 transition-transform" />
                  {isSidebarOpen && <span className="font-semibold text-sm whitespace-nowrap">Help Center</span>}
                </div>
              </Link>
              <Link href={`/${role}/settings`}>
                <div className="flex items-center gap-4 px-3 py-3 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all cursor-pointer group">
                  <FiSettings className="text-xl group-hover:scale-110 transition-transform" />
                  {isSidebarOpen && <span className="font-semibold text-sm whitespace-nowrap">Settings</span>}
                </div>
              </Link>
            </nav>
          </div>
        </div>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-white/5 bg-[#0f172a]/50 backdrop-blur-sm">
          <div className={`flex items-center gap-3 p-2 rounded-2xl bg-white/5 border border-white/5 ${isSidebarOpen ? '' : 'justify-center'}`}>
            <img src="https://i.pravatar.cc/150?u=99" className="w-10 h-10 rounded-xl object-cover border border-white/10" alt="profile"/>
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">Mithun Ray</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{role}</p>
              </div>
            )}
            {isSidebarOpen && (
              <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-400 transition-colors">
                <FiLogOut />
              </button>
            )}
          </div>
          {!isSidebarOpen && (
            <button onClick={handleLogout} className="w-full mt-4 flex justify-center p-3 text-red-400 hover:bg-red-400/10 rounded-2xl transition-all">
              <FiLogOut className="text-xl" />
            </button>
          )}
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#020617]/50 backdrop-blur-md z-20">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white transition-all"
            >
              {isSidebarOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/5 rounded-2xl w-64 focus-within:border-indigo-500/50 transition-all group">
              <FiSearch className="text-slate-500 group-focus-within:text-indigo-400" />
              <input type="text" placeholder="Search anything..." className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-slate-600" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white transition-all">
              <FiBell />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#020617]"></span>
            </button>
            <div className="h-8 w-[1px] bg-white/5 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white">Mithun Ray</p>
                <p className="text-[10px] text-slate-500 font-medium">Class Teacher</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content View */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}