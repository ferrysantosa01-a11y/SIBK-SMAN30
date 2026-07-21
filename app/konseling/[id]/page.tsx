"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


interface Konseling {
  id: number;
  tanggal: string;
  jenis: string;
  permasalahan: string;
  hasil: string;
  tindak_lanjut: string;
  status: string;

  siswa: {
    nama: string;
    kelas: string;
  } | null;
}



export default function DetailKonselingPage() {


  const params = useParams();
  const router = useRouter();


  const id = params.id as string;



  const [data, setData] = useState<Konseling | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    loadData();

  }, []);




  async function loadData() {


    try {


      const { data, error } = await supabase

        .from("konseling")

        .select(`

          id,
          tanggal,
          jenis,
          permasalahan,
          hasil,
          tindak_lanjut,
          status,

          siswa (
            nama,
            kelas
          )

        `)

        .eq("id", id)

        .single();



      if (error) throw error;



      setData(data as Konseling);



    } catch (error) {


      console.error(error);


    } finally {


      setLoading(false);


    }


  }





  if (loading) {

    return (

      <main className="p-6">

        Memuat data...

      </main>

    );

  }





  if (!data) {

    return (

      <main className="p-6">

        Data konseling tidak ditemukan.

      </main>

    );

  }





  return (

    <main className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center mb-6">


          <h1 className="text-2xl font-bold text-blue-700">

            Detail Konseling

          </h1>



          <button

            onClick={() => router.back()}

            className="bg-gray-500 text-white px-4 py-2 rounded"

          >

            Kembali

          </button>


        </div>




        <div className="space-y-4">


          <div>

            <b>Nama Siswa</b>

            <p>
              {data.siswa?.nama ?? "-"}
            </p>

          </div>



          <div>

            <b>Kelas</b>

            <p>
              {data.siswa?.kelas ?? "-"}
            </p>

          </div>



          <div>

            <b>Tanggal</b>

            <p>
              {new Date(data.tanggal)
                .toLocaleDateString("id-ID")}
            </p>

          </div>



          <div>

            <b>Jenis Konseling</b>

            <p>
              {data.jenis}
            </p>

          </div>



          <div>

            <b>Permasalahan</b>

            <p className="bg-gray-100 p-3 rounded">

              {data.permasalahan}

            </p>

          </div>




          <div>

            <b>Hasil Konseling</b>

            <p className="bg-gray-100 p-3 rounded">

              {data.hasil || "-"}

            </p>

          </div>




          <div>

            <b>Tindak Lanjut</b>

            <p className="bg-gray-100 p-3 rounded">

              {data.tindak_lanjut || "-"}

            </p>

          </div>




          <div>

            <b>Status</b>

            <p>

              {data.status}

            </p>

          </div>



        </div>


      </div>


    </main>

  );


}