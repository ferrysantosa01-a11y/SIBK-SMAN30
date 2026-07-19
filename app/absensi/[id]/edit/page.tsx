"use client";


import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";



export default function EditAbsensi(){



  const router = useRouter();

  const params = useParams();

  const id = Number(params.id);




  const [form,setForm]=useState({

    tanggal:"",

    status:"Hadir",

    keterangan:""

  });



  const [loading,setLoading]=useState(true);






  useEffect(()=>{


    async function loadData(){


      const {data,error}=await supabase

        .from("absensi")

        .select("*")

        .eq("id",id)

        .single();




      if(error){

        alert(error.message);

        router.push("/absensi");

        return;

      }





      setForm({

        tanggal:data.tanggal,

        status:data.status,

        keterangan:data.keterangan ?? ""

      });




      setLoading(false);



    }




    loadData();



  },[id,router]);








  function ubah(

    e:React.ChangeEvent<

      HTMLInputElement |

      HTMLSelectElement |

      HTMLTextAreaElement

    >

  ){



    setForm({

      ...form,

      [e.target.name]:e.target.value

    });


  }







  async function simpan(){



    const {error}=await supabase

      .from("absensi")

      .update(form)

      .eq("id",id);





    if(error){

      alert(error.message);

      return;

    }




    alert("Absensi berhasil diperbarui");

    router.push("/absensi");

    router.refresh();


  }







  if(loading){

    return (

      <main className="p-8">

        Memuat...

      </main>

    );

  }







  return (


    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl">


        <h1 className="text-3xl font-bold text-blue-700 mb-6">

          Edit Absensi

        </h1>





        <div className="space-y-4">


          <input

            type="date"

            name="tanggal"

            value={form.tanggal}

            onChange={ubah}

            className="border p-3 rounded-lg w-full"

          />





          <select

            name="status"

            value={form.status}

            onChange={ubah}

            className="border p-3 rounded-lg w-full"

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





          <textarea

            name="keterangan"

            value={form.keterangan}

            onChange={ubah}

            className="border p-3 rounded-lg w-full"

            rows={4}

            placeholder="Keterangan"

          />





          <div className="flex gap-3">


            <button

              onClick={()=>router.back()}

              className="bg-gray-600 text-white px-5 py-3 rounded-lg"

            >

              Kembali

            </button>




            <button

              onClick={simpan}

              className="bg-blue-600 text-white px-5 py-3 rounded-lg"

            >

              💾 Simpan

            </button>



          </div>



        </div>


      </div>


    </main>


  );


}