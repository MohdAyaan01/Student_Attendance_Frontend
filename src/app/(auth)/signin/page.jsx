"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiLock, FiChevronDown, FiCheck } from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";

export default function SignIn() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [form, setForm] = useState({
    id: "",
    password: "",
    role: "teacher"
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a bit of loading for premium feel
    await new Promise(resolve => setTimeout(resolve, 800));

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", form.role);

    if (form.role === "teacher") {
      router.push("/teacher");
    } else if (form.role === "student") {
      router.push("/student");
    }
  };

  if (!isMounted) return null;

  const roles = [
    { id: "teacher", label: "Teacher", icon: "👨‍🏫" },
    { id: "student", label: "Student", icon: "🎓" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl mb-6 shadow-indigo-500/20">
            <IoLeafOutline className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
            SAMS<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-gray-400 font-medium">Student Attendance System</p>
        </div>

        <div className="glass-dark p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-gradient" />
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-gray-400 text-sm">Please enter your details to sign in</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">User ID</label>
              <div className="relative group">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="text" 
                  required
                  placeholder="Enter your ID"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  value={form.id}
                  onChange={(e) => setForm({ ...form, id: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Account Type</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-left text-white flex items-center justify-between hover:bg-white/10 transition-all outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">
                      {roles.find(r => r.id === form.role)?.icon}
                    </span>
                    {roles.find(r => r.id === form.role)?.label}
                  </span>
                  <FiChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 w-full mt-2 bg-[#1e293b] border border-white/10 rounded-2xl overflow-hidden z-20 shadow-2xl"
                    >
                      {roles.map((role) => (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, role: role.id });
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-4 text-left text-white flex items-center justify-between hover:bg-indigo-600/20 transition-all"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">{role.icon}</span>
                            {role.label}
                          </span>
                          {form.role === role.id && <FiCheck className="text-indigo-400" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full btn-premium py-4 mt-4 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              {isLoading ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Forgotten your credentials? <a href="#" className="text-indigo-400 font-bold hover:underline">Contact Admin</a>
            </p>
          </div>
        </div>
        
        <p className="text-center text-gray-600 text-xs mt-10 tracking-widest uppercase">
          © {new Date().getFullYear()} SAMS Secure Access System
        </p>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}