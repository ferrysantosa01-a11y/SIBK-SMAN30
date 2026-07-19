"use client";

import * as XLSX from "xlsx";


interface Siswa {

  nis:string;
  nisn:string | null;
  nama:string;
  jenis_kelamin:string | null;
  kelas:string | null;
  jurusan:string | null;
  status:string | null;

}



export default function ExportExcelButton({

  data

}:{

  data:Siswa[]

}) {



  function exportExcel(){



    const dataExcel = data.map((siswa)=>({


      NIS: siswa.nis,


      NISN: siswa.nisn ?? "-",


      Nama: siswa.nama,


      "Jenis Kelamin": siswa.jenis_kelamin ?? "-",


      Kelas: siswa.kelas ?? "-",


      Jurusan: siswa.jurusan ?? "-",


      Status: siswa.status ?? "-"



    }));





    const worksheet = XLSX.utils.json_to_sheet(

      dataExcel

    );





    const workbook = XLSX.utils.book_new();




    XLSX.utils.book_append_sheet(

      workbook,

      worksheet,

      "Data Siswa"

    );





    XLSX.writeFile(

      workbook,

      "data_siswa.xlsx"

    );



  }







  return (


    <button


      onClick={exportExcel}


      className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"


    >

      📊 Export Excel


    </button>


  );


}
