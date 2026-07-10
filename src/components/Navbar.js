import Link from "next/link";

export default function Navbar() {
  return (
    // ปรับ h-12 เพื่อลดความสูงของแถบ Navbar
    <nav className="w-full bg-black border-b border-[#D4AF37] h-12 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-between items-center text-sm font-medium">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#D4AF37]">
            MyWebsite
          </Link>

          {/* เมนูตรงกลาง */}
          <div className="flex gap-8 text-white">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">หน้าแรก</Link>
            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">เกี่ยวกับ</Link>
            <Link href="/service" className="hover:text-[#D4AF37] transition-colors">บริการของเรา</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">ติดต่อ</Link>
          </div>
            
          {/* ปุ่มสมัครสมาชิก */}
          <Link 
            href="/register" 
            className="px-4 py-1 bg-[#D4AF37] text-black font-bold rounded-full hover:bg-yellow-500 transition-all text-sm"
          >
            สมัครสมาชิก
          </Link>
          
        </div>
      </div>
    </nav>
  );
}