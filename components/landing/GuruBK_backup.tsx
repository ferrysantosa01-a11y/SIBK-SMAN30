"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


interface GuruBK {

  id: number;
  nama: string;
  jabatan: string | null;
  foto: string | null;
  kontak: string | null;
  email: string | null;

}



export default function GuruBK() {


  const [guru, setGuru] = useState<GuruBK[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    async function loadGuruBK() {


      const { data, error } = await supabase
        .from("guru_bk")
        .select("*")
        .eq("aktif", true)
        .order("id");



      if (error) {

        console.log(error.message);

      } else {

        setGuru(data || []);

      }



      setLoading(false);


    }



    loadGuruBK();


  }, []);





  return (

    <section
      id="guru"
      className="bg-white py-16 px-6"
    >


      <div className="max-w-6xl mx-auto">


        <h2 className="
        text-3xl
        font-bold
        text-center
        text-blue-700
        ">

          Guru BK

        </h2>



        <p className="text-center text-gray-600 mt-3">

          Tim Guru Bimbingan dan Konseling
          SMAN 30 Kabupaten Tangerang

        </p>




        {loading && (

          <p className="text-center mt-8">

            Memuat data...

          </p>

        )}






        <div className="
        grid
        md:grid-cols-3
        gap-8
        mt-10
        ">



          {guru.map((item)=>(


            <div
              key={item.id}
              className="
              bg-gray-50
              rounded-2xl
              shadow-lg
              p-6
              text-center
              "
            >




              <div
                className="
                w-32
                h-32
                mx-auto
                rounded-full
                overflow-hidden
                bg-gray-200
                mb-5
                "
              >



                {item.foto ? (

                  <img
                    src={item.foto}
                    alt={item.nama}
                    className="
                    w-full
                    h-full
                    object-cover
                    "
                  />

                ) : (

                  <div className="
                  flex
                  items-center
                  justify-center
                  h-full
                  text-gray-500
                  ">

                    Foto

                  </div>

                )}



              </div>





              <h3 className="
              text-xl
              font-bold
              ">

                {item.nama}

              </h3>




              <p className="text-blue-600 mt-2">

                {item.jabatan}

              </p>




              <p className="mt-3 text-sm">

                {item.kontak}

              </p>




              <p className="text-sm">

                {item.email}

              </p>




            </div>


          ))}



        </div>



      </div>


    </section>

  );

}