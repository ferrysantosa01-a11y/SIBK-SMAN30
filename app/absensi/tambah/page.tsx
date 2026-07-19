"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";



interface Siswa {

  id:number;

  nis:string;

  nama:string;

  kelas:string | null;

}



interface AbsensiInput {

  siswa_id:number;

  status:string;

  keterangan:string;

}





export default function TambahAbsensi(){


  const router = useRouter();



  const [tanggal,setTanggal]=useState("");



  const [siswa,setSiswa]=useState<Siswa[]>([]);



  const [absensi,setAbsensi]=useState<AbsensiInput[]>([]);



  const [loading,setLoading]=useState(true);







  useEffect(()=>{


    async function loadSiswa(){



      const {data,error}=await supabase

        .from("siswa")

        .select("id,nis,nama,kelas")

        .order("nama");




      if(error){

        alert(error.message);

        return;

      }





      setSiswa(data ?? []);




      setAbsensi(

        (data ?? []).map((item)=>({


          siswa_id:item.id,


          status:"Hadir",


          keterangan:""



        }))

      );




      setLoading(false);



    }





    loadSiswa();



  },[]);









  function ubahStatus(

    id:number,

    status:string

  ){



    setAbsensi((prev)=>

      prev.map((item)=>

        item.siswa_id===id

        ?

        {

          ...item,

          status

        }

        :

        item

      )

    );



  }









  function ubahKeterangan(

    id:number,

    text:string

  ){



    setAbsensi((prev)=>

      prev.map((item)=>

        item.siswa_id===id

        ?

        {

          ...item,

          keterangan:text

        }

        :

        item

      )

    );



  }









  async function simpanAbsensi(){



    if(!tanggal){

      alert("Tanggal belum dipilih");

      return;

    }






    const dataSimpan = absensi.map((item)=>({


      siswa_id:item.siswa_id,


      tanggal,


      status:item.status,


      keterangan:item.keterangan



    }));







    const {error}=await supabase

      .from("absensi")

      .insert(dataSimpan);






    if(error){

      alert(error.message);

      return;

    }





    alert("Absensi berhasil disimpan");



    router.push("/absensi");

    router.refresh();



  }









  if(loading){


    return (

      <main className="p-8">

        Memuat data siswa...

      </main>

    );


  }









  return (



    <main className="min-h-screen bg-gray-100 p-8">



      <div className="bg-white rounded-xl shadow-lg p-6">






        <div className="flex justify-between items-center mb-6">



          <h1 className="text-3xl font-bold text-blue-700">

            Input Absensi Siswa

          </h1>



          <button

            onClick={()=>router.back()}

            className="bg-gray-600 text-white px-5 py-3 rounded-lg"

          >

            ⬅ Kembali

          </button>



        </div>







        <div className="mb-5">


          <label className="block mb-2 font-semibold">

            Tanggal Absensi

          </label>



          <input


            type="date"


            value={tanggal}


            onChange={(e)=>setTanggal(e.target.value)}


            className="border rounded-lg p-3"


          />


        </div>









        <div className="overflow-x-auto">



          <table className="w-full border">



            <thead className="bg-blue-600 text-white">


              <tr>


                <th className="border p-3">
                  No
                </th>


                <th className="border p-3">
                  NIS
                </th>


                <th className="border p-3">
                  Nama
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


              </tr>


            </thead>





            <tbody>


            {

              siswa.map((item,index)=>{


                const data = absensi.find(

                  (a)=>a.siswa_id===item.id

                );



                return (



                  <tr key={item.id}>


                    <td className="border p-3">

                      {index+1}

                    </td>


                    <td className="border p-3">

                      {item.nis}

                    </td>


                    <td className="border p-3">

                      {item.nama}

                    </td>


                    <td className="border p-3">

                      {item.kelas ?? "-"}

                    </td>


                    <td className="border p-3">


                      <select

                        value={data?.status}

                        onChange={(e)=>

                          ubahStatus(

                            item.id,

                            e.target.value

                          )

                        }

                        className="border p-2 rounded"

                      >

                        <option value="Hadir">

                          Hadir

                        </option>


                        <option value="Izin">

                          Izin

                        </option>


                        <option value="Sakit">

                          Sakit

                        </option>


                        <option value="Alpa">

                          Alpa

                        </option>


                      </select>



                    </td>





                    <td className="border p-3">


                      <input

                        value={data?.keterangan}

                        onChange={(e)=>

                          ubahKeterangan(

                            item.id,

                            e.target.value

                          )

                        }

                        className="border p-2 rounded"

                      />


                    </td>



                  </tr>



                );


              })


            }


            </tbody>


          </table>


        </div>








        <button


          onClick={simpanAbsensi}


          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"


        >

          💾 Simpan Absensi


        </button>





      </div>



    </main>


  );


}