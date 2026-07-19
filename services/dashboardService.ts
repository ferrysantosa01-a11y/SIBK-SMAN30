import { supabase } from "@/lib/supabase";



export async function getDashboardData(){



  const { data:siswa,error:siswaError } = await supabase

    .from("siswa")

    .select("id,status");





  if(siswaError){

    console.error(
      siswaError.message
    );

  }





  const totalSiswa = siswa?.length ?? 0;






  const siswaAktif = siswa?.filter(

    (item:any)=>

      item.status==="Aktif"

  ).length ?? 0;








  const hariIni = new Date()

    .toISOString()

    .split("T")[0];







  const {data:absensi,error:absensiError}=await supabase

    .from("absensi")

    .select("status")

    .eq(

      "tanggal",

      hariIni

    );







  if(absensiError){

    console.error(

      absensiError.message

    );

  }







  let hadir=0;

  let izin=0;

  let sakit=0;

  let alpa=0;







  (absensi ?? []).forEach((item:any)=>{


    if(item.status==="Hadir")

      hadir++;



    if(item.status==="Izin")

      izin++;



    if(item.status==="Sakit")

      sakit++;



    if(item.status==="Alpa")

      alpa++;



  });







  return {


    totalSiswa,

    siswaAktif,

    hadir,

    izin,

    sakit,

    alpa


  };



}