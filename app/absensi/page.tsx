export const dynamic = "force-dynamic";


import Link from "next/link";

import { getAbsensi } from "@/services/absensiService";

import DeleteAbsensiButton from "@/components/absensi/DeleteAbsensiButton";



export default async function AbsensiPage() {


  const dataAbsensi = await getAbsensi();



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow-lg p-6">



        {/* HEADER */}

        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">

              Data Absensi Siswa

            </h1>



            <p className="text-gray-500 mt-2">

              Sistem Informasi Bimbingan Konseling

              <br />

              SMAN 30 Kabupaten Tangerang

            </p>


          </div>







          <div className="flex gap-3 flex-wrap">



            <Link

              href="/dashboard"

              className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-lg"

            >

              ⬅ Kembali

            </Link>







            <Link

              href="/absensi/tambah"

              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"

            >

              + Input Absensi

            </Link>







            <Link

              href="/absensi/rekap"

              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"

            >

              📊 Rekap Absensi

            </Link>





          </div>



        </div>









        {/* TABEL */}



        <div className="overflow-x-auto">



          <table className="w-full border border-gray-300">



            <thead className="bg-blue-600 text-white">


              <tr>


                <th className="border p-3">
                  No
                </th>


                <th className="border p-3">
                  Tanggal
                </th>


                <th className="border p-3">
                  NIS
                </th>


                <th className="border p-3">
                  Nama Siswa
                </th>


                <th className="border p-3">
                  Kelas
                </th>


                <th className="border p-3">
                  Status
                </th>


                <th className="border p-3">
                  Keterangan
                </th>


                <th className="border p-3">
                  Aksi
                </th>


              </tr>


            </thead>







            <tbody>


            {


              dataAbsensi.length === 0 ? (



                <tr>


                  <td

                    colSpan={8}

                    className="text-center p-6 text-gray-500"

                  >

                    Belum ada data absensi

                  </td>


                </tr>




              ) : (





                dataAbsensi.map((absensi:any,index:number)=>(



                  <tr key={absensi.id}>


                    <td className="border p-3 text-center">

                      {index + 1}

                    </td>





                    <td className="border p-3">

                      {absensi.tanggal}

                    </td>





                    <td className="border p-3">

                      {absensi.siswa?.nis ?? "-"}

                    </td>





                    <td className="border p-3 font-semibold">

                      {absensi.siswa?.nama ?? "-"}

                    </td>





                    <td className="border p-3">

                      {absensi.siswa?.kelas ?? "-"}

                    </td>





                    <td className="border p-3">

                      {absensi.status}

                    </td>





                    <td className="border p-3">

                      {absensi.keterangan ?? "-"}

                    </td>





                    <td className="border p-3">


                      <div className="flex gap-2">



                        <Link

                          href={`/absensi/${absensi.id}/edit`}

                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"

                        >

                          Edit

                        </Link>







                        <DeleteAbsensiButton

                          id={absensi.id}

                        />





                      </div>



                    </td>





                  </tr>



                ))



              )



            }



            </tbody>



          </table>



        </div>





      </div>



    </main>


  );


}