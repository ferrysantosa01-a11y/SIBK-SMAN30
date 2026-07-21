"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";


export default function Home() {


  const [jumlahSiswa, setJumlahSiswa] = useState(0);
  const [jumlahKonseling, setJumlahKonseling] = useState(0);
  const [proses, setProses] = useState(0);
  const [selesai, setSelesai] = useState(0);



  useEffect(() => {

    loadDashboard();

  }, []);





  async function loadDashboard() {


    const siswa = await supabase

      .from("siswa")

      .select("*", { count: "exact", head: true });



    setJumlahSiswa(siswa.count ?? 0);




    const konseling = await supabase

      .from("konseling")

      .select("*", { count: "exact", head: true });



    setJumlahKonseling(konseling.count ?? 0);





    const prosesData = await supabase

      .from("konseling")

      .select("*", { count: "exact", head: true })

      .eq("status", "Proses");



    setProses(prosesData.count ?? 0);





    const selesaiData = await supabase

      .from("konseling")

      .select("*", { count: "exact", head: true })

      .eq("status", "Selesai");



    setSelesai(selesaiData.count ?? 0);



  }






  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="max-w-7xl mx-auto">


        <h1 className="text-3xl font-bold text-blue-700">

          Dashboard SiBK

        </h1>


        <p className="text-gray-600 mt-2">

          Sistem Informasi Bimbingan Konseling
          <br />
          SMAN 30 Kabupaten Tangerang

        </p>





        <div className="grid md:grid-cols-4 gap-6 mt-8">



          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-gray-500">
              Jumlah Siswa
            </h2>

            <p className="text-4xl font-bold text-blue-700 mt-3">

              {jumlahSiswa}

            </p>

          </div>





          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-gray-500">
              Total Konseling
            </h2>

            <p className="text-4xl font-bold text-green-600 mt-3">

              {jumlahKonseling}

            </p>

          </div>





          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-gray-500">
              Proses
            </h2>

            <p className="text-4xl font-bold text-yellow-600 mt-3">

              {proses}

            </p>

          </div>





          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-gray-500">
              Selesai
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-3">

              {selesai}

            </p>

          </div>




        </div>





        <div className="bg-white rounded-xl shadow p-6 mt-8">


          <h2 className="text-xl font-bold mb-4">

            Menu Cepat

          </h2>




          <div className="flex gap-4 flex-wrap">


            <Link

              href="/siswa"

              className="bg-blue-600 text-white px-5 py-3 rounded-lg"

            >

              Data Siswa

            </Link>




            <Link

              href="/konseling"

              className="bg-green-600 text-white px-5 py-3 rounded-lg"

            >

              Data Konseling

            </Link>




            <Link

              href="/konseling/tambah"

              className="bg-orange-500 text-white px-5 py-3 rounded-lg"

            >

              Tambah Konseling

            </Link>


          </div>


        </div>



      </div>


    </main>

  );

}