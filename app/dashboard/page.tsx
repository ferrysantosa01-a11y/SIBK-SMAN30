export const dynamic = "force-dynamic";

import Link from "next/link";


export default function Dashboard(){


  const menu = [


    {
      nama:"Data Siswa",
      icon:"👨‍🎓",
      deskripsi:"Kelola data lengkap siswa",
      link:"/siswa",
      warna:"bg-blue-600 hover:bg-blue-700"
    },


    {
      nama:"Absensi",
      icon:"📋",
      deskripsi:"Input dan monitoring kehadiran siswa",
      link:"/absensi",
      warna:"bg-green-600 hover:bg-green-700"
    },


    {
      nama:"Rekap Absensi",
      icon:"📊",
      deskripsi:"Laporan kehadiran siswa",
      link:"/absensi/rekap",
      warna:"bg-purple-600 hover:bg-purple-700"
    },


    {
      nama:"Prota BK",
      icon:"📅",
      deskripsi:"Program Tahunan Bimbingan Konseling",
      link:"/program-bk/prota",
      warna:"bg-indigo-600 hover:bg-indigo-700"
    },


    {
      nama:"Prosem BK",
      icon:"📆",
      deskripsi:"Program Semester Bimbingan Konseling",
      link:"/program-bk/prosem",
      warna:"bg-cyan-600 hover:bg-cyan-700"
    },


    {
      nama:"RPL BK",
      icon:"📄",
      deskripsi:"Rencana Pelaksanaan Layanan",
      link:"/program-bk/rpl",
      warna:"bg-orange-600 hover:bg-orange-700"
    },


    {
      nama:"Arsip Dokumen BK",
      icon:"📁",
      deskripsi:"Upload Word, Excel, PDF administrasi BK",
      link:"/dokumen-bk",
      warna:"bg-pink-600 hover:bg-pink-700"
    },


    {
      nama:"Laporan",
      icon:"📁",
      deskripsi:"Laporan kegiatan BK",
      link:"/laporan",
      warna:"bg-red-600 hover:bg-red-700"
    },


    {
      nama:"Pengaturan",
      icon:"⚙️",
      deskripsi:"Konfigurasi sistem",
      link:"/pengaturan",
      warna:"bg-gray-700 hover:bg-gray-800"
    }


  ];





return (

<main className="min-h-screen bg-gray-100 p-8">


<div className="bg-white rounded-xl shadow-lg p-8">



<div className="mb-8">


<h1 className="text-4xl font-bold text-blue-700">

Sistem Informasi Bimbingan Konseling

</h1>


<p className="text-gray-500 mt-2 text-lg">

SMAN 30 Kabupaten Tangerang

</p>


</div>





<h2 className="text-2xl font-bold text-gray-700 mb-6">

Menu Utama

</h2>






<div className="grid md:grid-cols-3 gap-6">



{

menu.map((item,index)=>(


<Link

key={index}

href={item.link}

className={`${item.warna} text-white rounded-xl p-6 shadow-lg transition hover:scale-105`}

>


<div className="text-4xl mb-3">

{item.icon}

</div>



<h3 className="text-xl font-bold">

{item.nama}

</h3>



<p className="mt-2">

{item.deskripsi}

</p>



</Link>


))


}



</div>





</div>


</main>


);


}