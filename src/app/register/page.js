"use client";

import React from 'react'
import { useState } from "react";
import swal from 'sweetalert2';

export default function FormRegister() {

  const [form, setForm] = useState({
        txt_firstname: "",
        txt_lastname: "",
        txt_email: "",
        txt_password: "",
        txt_confirm_password: ""
   });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(form);
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
        //สำเร็จ (status 201)
        await swal.fire({
          icon: 'success',
          title: `สมัครสมาชิกสำเร็จ(status: ${response.status})`,
          text: 'เพิ่มข้อมูลผู้ใช้งานเรียบร้อยแล้ว',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#3085d6',
        });
      } else if (response.status === 400) {
        // Validation error 
        await swal.fire({
          icon: 'warning',
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || 'เกิดข้อผิดพลาด',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#FFF700',
        });
      }else if (response.status === 500) {
        // Server error
        await swal.fire({
          icon: 'error',
          title: `เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || 'เกิดข้อผิดพลาด',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#FF0000',
        });
      }

  }catch (error) {
    //เข้ามาที่นี่เฉพาะตอน"เรียก fetch ไม่สำเร็จเลย"เช่น ไม่มีอินเทอร์เน็ต
    await swal.fire({
      icon: "warning",
      title: `ไม่สามาเชื่อมต่อกับเซิร์ฟเวอร์ได้ (status: ${response.status})`,
      text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ แล้วลองใหม่อีกครั้ง",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#EB1A60",
    });
  }
   
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

      <form onSubmit={handleSubmit} className='p-6 space-y-5'>

        <label className="text-black">กรุณาระบุชื่อ </label>
        <input type="text" name="txt_firstname" defaultValue={form.txt_firstname} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='firstname' />
        <label className="text-black">กรุณาระบุนาสกุล </label>
        <input type="text" name="txt_lastname" defaultValue={form.txt_lastname} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='lastname' />
        <label className="text-black">กรุณาระบุอีเมล </label>
        <input type="email" name="txt_email" defaultValue={form.txt_email} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='email' />
        <label className="text-black">กรุณาระบุรหัสผ่าน </label>
        <input type="password" name="txt_password" defaultValue={form.txt_password} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='password' />
        <label className="text-black">กรุณายืนยันรหัสผ่าน </label>
        <input type="password" name="txt_confirm_password" defaultValue={form.txt_confirm_password} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='confirm password' />

        <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">บันทึกข้อมูล</button>
      </form>
    </div>
    </div>
  )
}