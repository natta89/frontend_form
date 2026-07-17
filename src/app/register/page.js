"use client";

import React, { useState, useRef } from "react";
import { User, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import swal from 'sweetalert2';

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_email: "",
    txt_password: "",
    txt_confirm_password: ""
  });

  const cardRef = useRef(null);

  // การจัดการแสงตามเมาส์ให้ครอบคลุมและเห็นชัดเจน
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    cardRef.current.style.setProperty("--x", `${clientX}px`);
    cardRef.current.style.setProperty("--y", `${clientY}px`);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // --- เริ่มต้นตรรกะเดิมของคุณ (ไม่เปลี่ยนแปลง) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.itdev.cmtc.ac.th/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: form.txt_firstname,
          lastname: form.txt_lastname,
          username: form.txt_email,
          password: form.txt_password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        await swal.fire({
          icon: 'success',
          title: `สมัครสมาชิกสำเร็จ(status: ${response.status})`,
          text: 'เพิ่มข้อมูลผู้ใช้งานเรียบร้อยแล้ว',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#3085d6',
        });
      } else if (response.status === 400) {
        await swal.fire({
          icon: 'warning',
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || 'เกิดข้อผิดพลาด',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#FFF700',
        });
      } else if (response.status === 500) {
        await swal.fire({
          icon: 'error',
          title: `เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || 'เกิดข้อผิดพลาด',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#FF0000',
        });
      }
    } catch (error) {
      await swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#EB1A60",
      });
    }
  };
  // --- สิ้นสุดตรรกะเดิมของคุณ ---

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#020617] flex items-center justify-center p-6 lg:p-12"
      style={{
        background: `radial-gradient(circle 600px at var(--x, 50%) var(--y, 50%), rgba(212, 175, 55, 0.15), #020617)`
      }}
    >
      {/* Container */}
      <div className="w-full max-w-6xl min-h-[700px] bg-[#0b0f19]/80 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden grid lg:grid-cols-2">
        
        {/* ฝั่งซ้าย: Brand Experience */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-[#111622] to-[#0b0f19]/50">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center">
            <Sparkles className="text-black w-8 h-8" />
          </div>
          <div>
            <h1 className="text-6xl font-black text-white leading-tight mb-6">สร้างบัญชี<br/>ที่เหนือระดับ<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-200">เพื่อคุณ</span></h1>
            <p className="text-gray-400 font-medium max-w-sm text-lg">เข้าถึงฟีเจอร์พรีเมียมและระบบจัดการข้อมูลอัจฉริยะที่ออกแบบมาเพื่อประสบการณ์การใช้งานที่ดีที่สุด</p>
          </div>
        </div>

        {/* ฝั่งขวา: ฟอร์ม */}
        <div className="flex flex-col justify-center p-8 lg:p-16 bg-[#0e121d]/50">
          <div className="max-w-md w-full mx-auto space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight">ลงทะเบียนสมาชิก</h2>
              <p className="text-gray-500 mt-2 text-lg">กรอกข้อมูลให้ครบถ้วนเพื่อเริ่มใช้งาน</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <InputField label="ชื่อ" name="txt_firstname" value={form.txt_firstname} onChange={handleChange} icon={<User size={18}/>} />
                <InputField label="นามสกุล" name="txt_lastname" value={form.txt_lastname} onChange={handleChange} icon={<User size={18}/>} />
              </div>
              <InputField label="อีเมล" name="txt_email" value={form.txt_email} onChange={handleChange} icon={<Mail size={18}/>} type="email" />
              <InputField label="รหัสผ่าน" name="txt_password" value={form.txt_password} onChange={handleChange} icon={<Lock size={18}/>} type="password" />
              <InputField label="ยืนยันรหัสผ่าน" name="txt_confirm_password" value={form.txt_confirm_password} onChange={handleChange} icon={<Lock size={18}/>} type="password" />

              <button type="submit" className="w-full mt-8 py-5 bg-gradient-to-r from-yellow-600 to-amber-500 text-black font-bold text-lg rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(217,119,6,0.3)] transition-all duration-300">
                ยืนยันการสมัคร <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, icon, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">{label}</label>
    <div className="relative flex items-center">
      <div className="absolute left-4 text-gray-500">{icon}</div>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#161b26]/80 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-yellow-600 focus:bg-[#161b26] transition-all duration-300"
        placeholder={`กรอก${label}`}
      />
    </div>
  </div>
);