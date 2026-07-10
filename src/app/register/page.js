'use client';
import React from 'react'
import { useState } from "react";

export default function register() {
    const [form, setForm] = useState({
        txt_firstname: "",
        txt_lastname: "",
        txt_password: "",
        txt_confirm_password: "",
        txt_email: "",
        txt_phone: ""
   });
   const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
  <div className="max-w-6xl mx-auto p-6">
    <div className="bg-white rounded-lg shadow-md border">
          {/* Header */}
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            ฟอร์มสมัครสมาชิก
          </h1>
        </div>
        <form className='p-6 space-y-5' onSubmit={handleSubmit}>
               <label className="text-black">กรุณาระบุชื่อ  </label>
               <input type="text" name="txt_firstname"defaultValue={""} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='firstname' required></input>
               <label className="text-black">กรุณาระบุนามสกุล </label>
               <input type="text" name="txt_lastname"defaultValue={""} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='lastname' required></input>
                <label className="text-black">กรุณาสร้างรหัสผ่าน </label>
               <input type="password" name="txt_password"defaultValue={""} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='password' required></input>
               <label className="text-black">ยืนยันรหัสผ่าน </label>
               <input type="password" name="txt_confirm_password"defaultValue={""} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='confirm password' required></input>
                <label className="text-black">กรุณาระบุอีเมล </label>
               <input type="text" name="txt_email"defaultValue={""} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='email' required></input>
               <label className="text-black">กรุณาระบุหมายเลขโทรศัพท์ </label>
               <input type="text" name="txt_phone"defaultValue={""} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='phone' required></input>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">บันทึกข้อมูล</button>

        </form>
    </div>
    </div>
  )
}
