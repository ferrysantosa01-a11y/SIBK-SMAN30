"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import UserInfo from "@/components/auth/UserInfo";

interface Konseling {
  id: number;
  siswa_id: number;
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


export default function KonselingPage() {

  const router = useRouter();


  const [data, setData] = useState<Konseling[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const [role, setRole] = useState("");


  async function loadData() {

    try {

      setLoading(true);


      const { data, error } = await supabase
        .from("konseling")
        .select(`
          id,
          siswa_id,
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
        .order("tanggal", {
          ascending: false
        });



      if (error) throw error;


      setData((data as Konseling[]) || []);



    } catch (err: any) {


      console.error(err);

      setError(err.message);



    } finally {


      setLoading(false);


    }

  }



 async function checkRole() {

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



  if (data?.role === "Siswa") {

    router.push("/dashboard");

    return;

  }


  loadData();

}



useEffect(() => {

  checkRole();

}, []);




  async function deleteKonseling(id: number) {


    const confirmDelete = confirm(
      "Apakah data konseling ini ingin dihapus?"
    );


    if (!confirmDelete) return;



    try {


      const { error } = await supabase
        .from("konseling")
        .delete()
        .eq("id", id);



      if (error) throw error;



      loadData();



    } catch (err: any) {


      alert(err.message);


    }


  }



  return (

    <main className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6">

<UserInfo />
       <div className="flex justify-between items-center mb-6">


<div>

<button
  onClick={() => router.push("/dashboard")}
  className="mb-3 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
>
  ← Kembali ke Dashboard
</button>


<h1 className="text-2xl font-bold text-blue-700">
  Data Konseling
</h1>

</div>


         {role !== "Siswa" && (

<Link
  href="/konseling/tambah"
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  + Tambah Konseling
</Link>

)}


        </div>
      {loading ? (

          <p className="text-gray-500">
            Memuat data konseling...
          </p>


        ) : error ? (

          <p className="text-red-500">
            {error}
          </p>


        ) : data.length === 0 ? (

          <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">

            <h2 className="text-xl font-semibold text-yellow-700">
              Belum Ada Data Konseling
            </h2>


            <p className="text-gray-600 mt-3">
              Silakan klik tombol <b>Tambah Konseling</b> untuk menambahkan data pertama.
            </p>

          </div>


        ) : (

          <div className="overflow-x-auto">


            <table className="min-w-full border border-gray-200">


              <thead className="bg-blue-600 text-white">

                <tr>


                  <th className="border px-4 py-3 text-center">
                    No
                  </th>


                  <th className="border px-4 py-3">
                    Nama Siswa
                  </th>


                  <th className="border px-4 py-3">
                    Kelas
                  </th>


                  <th className="border px-4 py-3">
                    Tanggal
                  </th>


                  <th className="border px-4 py-3">
                    Jenis
                  </th>


                  <th className="border px-4 py-3">
                    Permasalahan
                  </th>


                  <th className="border px-4 py-3">
                    Hasil
                  </th>


                  <th className="border px-4 py-3">
                    Tindak Lanjut
                  </th>


                  <th className="border px-4 py-3 text-center">
                    Status
                  </th>


                  <th className="border px-4 py-3 text-center">
                    Aksi
                  </th>


                </tr>

              </thead>



              <tbody>


                {data.map((item, index) => (


                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >


                    <td className="border px-4 py-3 text-center">
                      {index + 1}
                    </td>



                    <td className="border px-4 py-3">
                      {item.siswa?.nama ?? "-"}
                    </td>



                    <td className="border px-4 py-3 text-center">
                      {item.siswa?.kelas ?? "-"}
                    </td>



                    <td className="border px-4 py-3">
                      {new Date(item.tanggal).toLocaleDateString("id-ID")}
                    </td>



                    <td className="border px-4 py-3">
                      {item.jenis}
                    </td>



                    <td className="border px-4 py-3">
                      <div className="max-w-xs truncate">
                        {item.permasalahan}
                      </div>
                    </td>



                    <td className="border px-4 py-3">
                      <div className="max-w-xs truncate">
                        {item.hasil}
                      </div>
                    </td>



                    <td className="border px-4 py-3">
                      <div className="max-w-xs truncate">
                        {item.tindak_lanjut}
                      </div>
                    </td>



                    <td className="border px-4 py-3 text-center">

                      <span
                        className={
                          item.status === "Selesai"
                            ? "px-3 py-1 rounded-full bg-green-100 text-green-700"
                            : item.status === "Proses"
                            ? "px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                            : "px-3 py-1 rounded-full bg-red-100 text-red-700"
                        }
                      >

                        {item.status}

                      </span>


                    </td>
  <td className="border px-4 py-3">

                      <div className="flex justify-center gap-2">


                        <button
                          onClick={() =>
                            router.push(`/konseling/${item.id}`)
                          }
                          className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded"
                        >
                          Detail
                        </button>



                        <button
                          onClick={() =>
                            router.push(`/konseling/${item.id}/edit`)
                          }
                          className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded"
                        >
                          Edit
                        </button>



                        <button
                          onClick={() =>
                            deleteKonseling(item.id)
                          }
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                        >
                          Hapus
                        </button>


                      </div>

                    </td>



                  </tr>


                ))}


              </tbody>


            </table>


          </div>


        )}


      </div>


    </main>

  );


}