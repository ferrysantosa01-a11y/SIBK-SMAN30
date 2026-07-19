"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { nama: "Dashboard", url: "/dashboard", icon: "🏠" },
  { nama: "Data Siswa", url: "/siswa", icon: "👨‍🎓" },
  { nama: "Absensi", url: "/absensi", icon: "📅" },
  { nama: "Pelanggaran", url: "/pelanggaran", icon: "⚠️" },
  { nama: "Konseling", url: "/konseling", icon: "💬" },
  { nama: "Hasil Konseling", url: "/hasil-konseling", icon: "📝" },
  { nama: "Prestasi", url: "/prestasi", icon: "🏆" },
  { nama: "AKPD", url: "/akpd", icon: "📊" },
  { nama: "RPL", url: "/rpl", icon: "📚" },
  { nama: "Program Tahunan", url: "/program-tahunan", icon: "📆" },
  { nama: "Program Semester", url: "/program-semester", icon: "🗂️" },
  { nama: "Laporan", url: "/laporan", icon: "📄" },
];

export default function Sidebar() {

  const pathname = usePathname();

  return (

    <aside className="w-72 bg-white shadow-lg min-h-screen">

      <div className="p-5 border-b">

        <h2 className="font-bold text-xl text-blue-700">

          Menu SIBK

        </h2>

      </div>

      <nav className="p-3">

        {menus.map((menu) => (

          <Link
            key={menu.url}
            href={menu.url}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition

              ${
                pathname === menu.url
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 text-gray-700"
              }
            `}
          >
            <span className="text-xl">{menu.icon}</span>

            <span>{menu.nama}</span>

          </Link>

        ))}

      </nav>

    </aside>

  );

}