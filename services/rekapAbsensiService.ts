import { supabase } from "@/lib/supabase";


export async function getRekapAbsensi(

  bulan?:string

){


  let query = supabase

    .from("absensi")

    .select(`

      tanggal,

      status,


      siswa (

        id,

        nis,

        nama,

        kelas

      )


    `);





  const {data,error}=await query;




  if(error){

    console.error(

      error.message

    );

    return [];

  }







  const rekap:any = {};







  (data ?? []).forEach((item:any)=>{





    if(bulan){


      const bulanData =

        item.tanggal.substring(0,7);



      if(bulanData !== bulan){

        return;

      }


    }







    const id = item.siswa.id;






    if(!rekap[id]){


      rekap[id]={


        nis:item.siswa.nis,

        nama:item.siswa.nama,

        kelas:item.siswa.kelas,


        hadir:0,

        izin:0,

        sakit:0,

        alpa:0


      };


    }








    if(item.status==="Hadir")

      rekap[id].hadir++;





    if(item.status==="Izin")

      rekap[id].izin++;





    if(item.status==="Sakit")

      rekap[id].sakit++;





    if(item.status==="Alpa")

      rekap[id].alpa++;





  });







  return Object.values(rekap);



}