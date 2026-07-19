"use client";


import * as XLSX from "xlsx";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";





export default function ExportAbsensi(

{

data

}:{

data:any[]

}

){






function exportExcel(){



const excelData = data.map((item,index)=>({


No:index+1,

NIS:item.nis,

Nama:item.nama,

Kelas:item.kelas,

Hadir:item.hadir,

Izin:item.izin,

Sakit:item.sakit,

Alpa:item.alpa,

Persentase:item.persen+"%"


}));






const worksheet = XLSX.utils.json_to_sheet(

excelData

);



const workbook = XLSX.utils.book_new();



XLSX.utils.book_append_sheet(

workbook,

worksheet,

"Rekap Absensi"

);





XLSX.writeFile(

workbook,

"Rekap_Absensi.xlsx"

);



}








function exportPDF(){



const doc = new jsPDF();





doc.text(

"REKAP KEHADIRAN SISWA",

14,

15

);





autoTable(doc,{



startY:25,



head:[

[

"No",

"NIS",

"Nama",

"Kelas",

"Hadir",

"Izin",

"Sakit",

"Alpa",

"%"

]

],




body:data.map((item,index)=>[


index+1,

item.nis,

item.nama,

item.kelas,

item.hadir,

item.izin,

item.sakit,

item.alpa,

item.persen+"%"



])



});





doc.save(

"Rekap_Absensi.pdf"

);



}







return(


<div className="flex gap-3 mb-5">



<button

onClick={exportExcel}

className="bg-green-600 text-white px-5 py-3 rounded-lg"

>

📗 Export Excel

</button>





<button

onClick={exportPDF}

className="bg-red-600 text-white px-5 py-3 rounded-lg"

>

📄 Export PDF

</button>



</div>



);


}