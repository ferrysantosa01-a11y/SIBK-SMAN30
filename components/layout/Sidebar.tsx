"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


interface Menu {
  nama: string;
  url: string;
  icon: string;
  role: string[];
}



const menus: Menu[] = [

  {
    nama: "Dashboard",
    url: "/dashboard",
    icon: "🏠",
    role: ["Admin", "Guru BK", "Siswa"],
  },


  {
    nama: "Data Siswa",
    url: "/siswa",
    icon: "👨‍🎓",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Absensi",
    url: "/absensi",
    icon: "📅",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Pelanggaran",
    url: "/pelanggaran",
    icon: "⚠️",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Konseling",
    url: "/konseling",
    icon: "💬",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Hasil Konseling",
    url: "/hasil-konseling",
    icon: "📝",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Prestasi",
    url: "/prestasi",
    icon: "🏆",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "AKPD",
    url: "/akpd",
    icon: "📊",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "RPL",
    url: "/rpl",
    icon: "📚",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Program Tahunan",
    url: "/program-tahunan",
    icon: "📆",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Program Semester",
    url: "/program-semester",
    icon: "🗂️",
    role: ["Admin", "Guru BK"],
  },


  {
    nama: "Laporan",
    url: "/laporan",
    icon: "📄",
    role: ["Admin", "Guru BK"],
  },

];



export default function Sidebar() {


  const pathname = usePathname();

  const [role, setRole] = useState("");



  useEffect(() => {

    loadRole();

  }, []);




  async function loadRole() {


    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if (!user) return;



    const { data } = await supabase

      .from("profiles")

      .select("role")

      .eq("id", user.id)

      .single();



    setRole(data?.role || "");


  }





  const filteredMenus = menus.filter((menu)=>

    menu.role.includes(role)

  );




  return (

    <aside className="w-72 bg-white shadow-lg min-h-screen">


      <div className="p-5 border-b">

        <h2 className="font-bold text-xl text-blue-700">

          Menu SIBK

        </h2>

      </div>



      <nav className="p-3">


        {filteredMenus.map((menu)=>(


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


            <span className="text-xl">
              {menu.icon}
            </span>


            <span>
              {menu.nama}
            </span>


          </Link>


        ))}


      </nav>


    </aside>

  );

}