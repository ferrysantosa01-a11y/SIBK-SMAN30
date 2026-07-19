import { supabase } from "@/lib/supabase";
import { Absensi } from "@/types/absensi";


export async function getAbsensi(): Promise<any[]> {


  const { data, error } = await supabase

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



  if(error){

    console.error(
      "getAbsensi:",
      error.message
    );

    return [];

  }



  return data ?? [];

}