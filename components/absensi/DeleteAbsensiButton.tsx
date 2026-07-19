"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function DeleteAbsensiButton({

  id

}: {

  id:number

}) {


  const router = useRouter();




  async function hapusData(){



    const konfirmasi = confirm(
      "Apakah yakin ingin menghapus data absensi ini?"
    );



    if(!konfirmasi){

      return;

    }






    const { error } = await supabase

      .from("absensi")

      .delete()

      .eq("id", id);





    if(error){

      alert(error.message);

      return;

    }






    alert(
      "Data absensi berhasil dihapus"
    );



    router.refresh();



  }







  return (


    <button

      onClick={hapusData}

      className="
      bg-red-600 
      hover:bg-red-700 
      text-white 
      px-3 
      py-2 
      rounded
      "

    >

      🗑 Hapus


    </button>


  );


}