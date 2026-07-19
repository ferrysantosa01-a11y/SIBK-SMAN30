import { supabase } from "@/lib/supabase";


export async function getAbsensiFilter(

  tanggal?:string,

  kelas?:string

){


  let query = supabase

    .from("absensi")

    .select(`

      id,
      tanggal,
      status,
      keterangan,

      siswa (

        id,
        nis,
        nama,
        kelas

      )

    `)

    .order("tanggal", {

      ascending:false

    });





  if(tanggal){

    query = query.eq(

      "tanggal",

      tanggal

    );

  }





  const {data,error}=await query;





  if(error){

    console.error(

      error.message

    );

    return [];

  }





  let hasil=data ?? [];





  if(kelas){


    hasil = hasil.filter(

      (item:any)=>

        item.siswa?.kelas===kelas

    );


  }






  return hasil;


}