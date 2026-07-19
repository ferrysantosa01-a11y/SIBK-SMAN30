import { supabase } from "@/lib/supabase";



export async function getGrafikAbsensi(){


  const {data,error}=await supabase

    .from("absensi")

    .select("status");




  if(error){

    console.error(error.message);

    return [];

  }





  let hasil:any={

    Hadir:0,

    Izin:0,

    Sakit:0,

    Alpa:0

  };





  data?.forEach((item:any)=>{


    if(hasil[item.status] !== undefined){

      hasil[item.status]++;

    }


  });





  return [

    {

      nama:"Hadir",

      jumlah:hasil.Hadir

    },


    {

      nama:"Izin",

      jumlah:hasil.Izin

    },


    {

      nama:"Sakit",

      jumlah:hasil.Sakit

    },


    {

      nama:"Alpa",

      jumlah:hasil.Alpa

    }


  ];



}







export async function getGrafikKelas(){



const {data,error}=await supabase

.from("siswa")

.select("kelas");





if(error){

console.error(error.message);

return [];

}





const hasil:any={};





data?.forEach((item:any)=>{


const kelas=item.kelas ?? "Tidak Ada";



if(!hasil[kelas]){

hasil[kelas]=0;

}


hasil[kelas]++;



});






return Object.keys(hasil).map((key)=>({


nama:key,

jumlah:hasil[key]


}));



}