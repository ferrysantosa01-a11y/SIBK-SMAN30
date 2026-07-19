"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


interface Siswa {

  nis: string;
  nisn: string | null;
  nama: string;
  jenis_kelamin: string | null;
  kelas: string | null;
  jurusan: string | null;
  status: string | null;

}



export default function ExportPdfButton({

  data

}: {

  data: Siswa[]

}) {



  function exportPDF() {


    const doc = new jsPDF("landscape");



    doc.setFontSize(16);

    doc.text(
      "SISTEM INFORMASI BIMBINGAN KONSELING",
      20,
      20
    );



    doc.setFontSize(12);

    doc.text(
      "SMAN 30 Kabupaten Tangerang",
      20,
      28
    );



    doc.text(
      "DAFTAR DATA SISWA",
      20,
      38
    );





    const dataTabel = data.map((siswa, index) => [


      index + 1,

      siswa.nis,

      siswa.nisn ?? "-",

      siswa.nama,

      siswa.jenis_kelamin ?? "-",

      siswa.kelas ?? "-",

      siswa.jurusan ?? "-",

      siswa.status ?? "-"



    ]);





    autoTable(doc, {


      head: [

        [

          "No",

          "NIS",

          "NISN",

          "Nama",

          "JK",

          "Kelas",

          "Jurusan",

          "Status"

        ]

      ],



      body: dataTabel,



      startY: 45,



      styles: {

        fontSize: 9

      }



    });






    doc.save(
      "daftar_data_siswa.pdf"
    );



  }







  return (


    <button

      onClick={exportPDF}

      className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"

    >

      📄 Export PDF

    </button>


  );


}
