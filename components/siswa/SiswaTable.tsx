"use client";

import Link from "next/link";
import { useState } from "react";
import DeleteButton from "@/components/siswa/DeleteButton";


interface Siswa {

  id: number;
  nis: string;
  nisn: string | null;
  nama: string;
  jenis_kelamin: string | null;
  kelas: string | null;
  jurusan: string | null;
  status: string | null;

}



export default function SiswaTable({

  data

}: {

  data: Siswa[]

}) {



  const [keyword, setKeyword] = useState("");

  const [kelas, setKelas] = useState("");

  const [jurusan, setJurusan] = useState("");

  const [status, setStatus] = useState("");



  const [page, setPage] = useState(1);



  const jumlahPerHalaman = 10;





  const daftarKelas = [

    ...new Set(

      data

        .map((item) => item.kelas)

        .filter(Boolean)

    )

  ];





  const daftarJurusan = [

    ...new Set(

      data

        .map((item) => item.jurusan)

        .filter(Boolean)

    )

  ];






  const hasilFilter = data.filter((siswa) => {



    const cari = keyword.toLowerCase();




    const cocokCari =


      siswa.nis

        ?.toLowerCase()

        .includes(cari)

      ||


      siswa.nisn

        ?.toLowerCase()

        .includes(cari)

      ||


      siswa.nama

        ?.toLowerCase()

        .includes(cari)

      ||


      siswa.kelas

        ?.toLowerCase()

        .includes(cari)

      ||


      siswa.jurusan

        ?.toLowerCase()

        .includes(cari);







    const cocokKelas =

      kelas === ""

      ||

      siswa.kelas === kelas;







    const cocokJurusan =

      jurusan === ""

      ||

      siswa.jurusan === jurusan;







    const cocokStatus =

      status === ""

      ||

      siswa.status === status;






    return (

      cocokCari

      &&

      cocokKelas

      &&

      cocokJurusan

      &&

      cocokStatus

    );



  });







  const totalHalaman = Math.ceil(

    hasilFilter.length / jumlahPerHalaman

  );





  const dataTampil = hasilFilter.slice(

    (page - 1) * jumlahPerHalaman,

    page * jumlahPerHalaman

  );
 return (


    <>


      {/* SEARCH DAN FILTER */}


      <div className="grid md:grid-cols-4 gap-3 mb-5">



        <input

          type="text"

          placeholder="🔎 Cari NIS / Nama / Kelas / Jurusan"

          value={keyword}

          onChange={(e)=>{

            setKeyword(e.target.value);

            setPage(1);

          }}

          className="border rounded-lg p-3"

        />






        <select

          value={kelas}

          onChange={(e)=>{

            setKelas(e.target.value);

            setPage(1);

          }}

          className="border rounded-lg p-3"

        >


          <option value="">

            Semua Kelas

          </option>



          {

            daftarKelas.map((item)=>(


              <option

                key={item ?? ""}

                value={item ?? ""}

              >

                {item}

              </option>


            ))

          }



        </select>







        <select

          value={jurusan}

          onChange={(e)=>{

            setJurusan(e.target.value);

            setPage(1);

          }}

          className="border rounded-lg p-3"

        >


          <option value="">

            Semua Jurusan

          </option>




          {

            daftarJurusan.map((item)=>(


              <option

                key={item ?? ""}

                value={item ?? ""}

              >

                {item}

              </option>


            ))

          }




        </select>







        <select

          value={status}

          onChange={(e)=>{

            setStatus(e.target.value);

            setPage(1);

          }}

          className="border rounded-lg p-3"

        >



          <option value="">

            Semua Status

          </option>



          <option value="Aktif">

            Aktif

          </option>



          <option value="Lulus">

            Lulus

          </option>



          <option value="Pindah">

            Pindah

          </option>



          <option value="Keluar">

            Keluar

          </option>



        </select>



      </div>









      {/* TABEL DATA */}



      <div className="overflow-x-auto">



        <table className="w-full border border-gray-300">



          <thead className="bg-blue-600 text-white">


            <tr>


              <th className="border p-3">

                No

              </th>


              <th className="border p-3">

                NIS

              </th>


              <th className="border p-3">

                NISN

              </th>


              <th className="border p-3">

                Nama

              </th>


              <th className="border p-3">

                JK

              </th>


              <th className="border p-3">

                Kelas

              </th>


              <th className="border p-3">

                Jurusan

              </th>


              <th className="border p-3">

                Status

              </th>


              <th className="border p-3">

                Aksi

              </th>



            </tr>


          </thead>






          <tbody>



            {

              dataTampil.length === 0 ? (



                <tr>


                  <td

                    colSpan={9}

                    className="text-center p-6"

                  >

                    Data tidak ditemukan

                  </td>


                </tr>



              ) : (



                dataTampil.map((siswa,index)=>(


                  <tr key={siswa.id}>


                    <td className="border p-3">

                      {((page-1)*jumlahPerHalaman)+index+1}

                    </td>



                    <td className="border p-3">

                      {siswa.nis}

                    </td>



                    <td className="border p-3">

                      {siswa.nisn ?? "-"}

                    </td>



                    <td className="border p-3 font-semibold">

                      {siswa.nama}

                    </td>



                    <td className="border p-3">

                      {siswa.jenis_kelamin ?? "-"}

                    </td>



                    <td className="border p-3">

                      {siswa.kelas ?? "-"}

                    </td>



                    <td className="border p-3">

                      {siswa.jurusan ?? "-"}

                    </td>



                    <td className="border p-3">

                      {siswa.status ?? "-"}

                    </td>

    <td className="border p-3">


                      <div className="flex gap-2 flex-wrap">



                        <Link

                          href={`/siswa/${siswa.id}`}

                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"

                        >

                          Detail

                        </Link>





                        <Link

                          href={`/siswa/${siswa.id}/edit`}

                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"

                        >

                          Edit

                        </Link>





                        <DeleteButton

                          id={siswa.id}

                        />





                        <Link

                          href={`/siswa/${siswa.id}/cetak`}

                          className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded"

                        >

                          Cetak

                        </Link>




                      </div>


                    </td>



                  </tr>



                ))



              )

            }



          </tbody>



        </table>



      </div>








      {/* PAGINATION */}



      <div className="flex justify-between items-center mt-5">



        <p className="text-gray-600">


          Menampilkan {dataTampil.length} dari {hasilFilter.length} data siswa


        </p>







        <div className="flex gap-2">





          <button


            onClick={()=>setPage(page-1)}


            disabled={page===1}


            className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"


          >

            ⬅ Sebelumnya


          </button>







          <span className="px-4 py-2 border rounded">


            {page} / {totalHalaman || 1}


          </span>







          <button


            onClick={()=>setPage(page+1)}


            disabled={page===totalHalaman || totalHalaman===0}


            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"


          >

            Berikutnya ➡


          </button>






        </div>




      </div>





    </>


  );


}