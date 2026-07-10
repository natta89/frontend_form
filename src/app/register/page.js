'use client';
import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, User, Mail, Lock, Phone } from 'lucide-react';

export default function UltimateLuxuryRegister() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 selection:bg-[#D4AF37] selection:text-black overflow-hidden">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D4AF37] blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 blur-[150px]" />
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        className="group relative z-10 w-full max-w-lg bg-[#0b0f19] p-10 rounded-[30px] border border-white/10 overflow-hidden shadow-2xl"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[30px] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(212, 175, 55, 0.15), transparent 80%)`,
          }}
        />

        <div className="relative mb-8 text-center">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 uppercase tracking-tighter">
            REGISTER
          </h1>
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mt-2 font-light">Join the elite circle</p>
        </div>

        <form className="relative space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <StyledInput label="Name" icon={User} placeholder="First Name" />
            <StyledInput label="Surname" icon={User} placeholder="Last Name" />
          </div>
          
          <StyledInput label="Email Address" icon={Mail} type="email" placeholder="identity@luxury.com" />
          <StyledInput label="Phone Number" icon={Phone} type="tel" placeholder="+66 00 000 0000" />
          
          <div className="grid grid-cols-2 gap-4">
            <StyledInput label="Password" icon={Lock} type="password" placeholder="••••••••" />
            <StyledInput label="Confirm Password" icon={Lock} type="password" placeholder="••••••••" />
          </div>
          
          <button className="group relative w-full mt-6 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#fcd34d] translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              Create Account <ArrowRight size={18} />
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}

const StyledInput = ({ label, icon: Icon, placeholder, type = "text" }) => (
  <div className="space-y-1">
    <label className="text-[9px] text-white/30 uppercase tracking-[0.2em] ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-3.5 opacity-30">
        <Icon size={14} className="text-white" />
      </div>
      <input
        type={type}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all focus:bg-white/10 backdrop-blur-sm"
        placeholder={placeholder}
      />
    </div>
  </div>
);