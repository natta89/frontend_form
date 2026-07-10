"use client";

import React, { useState, useRef } from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_email: "",
    txt_password: "",
    txt_confirm: "",
  });

  // สำหรับ effect แสงตามเมาส์
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", form);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
      {/* Container ที่มี Effect แสงตามเมาส์ */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative w-full max-w-lg bg-[#0b0f19] p-10 rounded-[30px] border border-white/10 shadow-2xl overflow-hidden"
        style={{
          background: `radial-gradient(circle 300px at var(--x) var(--y), rgba(212, 175, 55, 0.15), transparent 80%), #0b0f19`
        }}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 uppercase tracking-tighter">
            REGISTER
          </h1>
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mt-2 font-light">
            สร้างบัญชีผู้ใช้ใหม่
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <StyledInput label="First Name" name="txt_firstname" value={form.txt_firstname} onChange={handleChange} placeholder="ชื่อจริง" icon={<User size={14} />} />
            <StyledInput label="Last Name" name="txt_lastname" value={form.txt_lastname} onChange={handleChange} placeholder="นามสกุล" icon={<User size={14} />} />
          </div>
          
          <StyledInput label="Email Address" name="txt_email" value={form.txt_email} onChange={handleChange} placeholder="example@mail.com" icon={<Mail size={14} />} type="email" />
          <StyledInput label="Password" name="txt_password" value={form.txt_password} onChange={handleChange} placeholder="••••••••" icon={<Lock size={14} />} type="password" />
          <StyledInput label="Confirm Password" name="txt_confirm" value={form.txt_confirm} onChange={handleChange} placeholder="••••••••" icon={<Lock size={14} />} type="password" />

          {/* Button */}
          <button 
            type="submit" 
            className="group/btn relative w-full mt-6 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#fcd34d] translate-x-[-100%] group-hover/btn:translate-x-[0%] transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              ลงทะเบียน <ArrowRight size={18} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

const StyledInput = ({ label, name, value, onChange, placeholder, icon, type = "text" }) => (
  <div className="space-y-1">
    <label className="text-[9px] text-white/30 uppercase tracking-[0.2em] ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-3.5 opacity-30 text-white">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all focus:bg-white/10 backdrop-blur-sm"
        placeholder={placeholder}
      />
    </div>
  </div>
);