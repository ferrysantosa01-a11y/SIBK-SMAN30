"use client";


import {useEffect,useState} from "react";

import Link from "next/link";

import {getRekapAbsensi} from "@/services/rekapAbsensiService";

import ExportAbsensi from "@/components/absensi/ExportAbsensi";





export default function RekapAbsensi(){



const [bulan,setBulan]=useState("");

const [data,setData]=useState<any[]>([]);







async function tampilkan(){


const hasil:any[]=await getRekapAbsensi(bulan);




const hasilPersen=hasil.map((item)=>{


const total =

item.hadir+

item.izin+

item.sakit+

item.alpa;




return{


...item,

persen:

total===0

?

0

:

Math.round(

(item.hadir/total)*100

)


}



});





setData(hasilPersen);



}







useEffect(()=>{


tampilkan();


},[]);









return(


<main className="min-h-screen bg-gray-100 p-8">



<div className="bg-white rounded-xl shadow-lg p-6">





<div className="flex justify-between items-center mb-6">



<h1 className="text-3xl font-bold text-blue-700">

Rekap Kehadiran Siswa

</h1>





<Link

href="/absensi"

className="bg-gray-600 text-white px-5 py-3 rounded-lg"

>

⬅ Kembali

</Link>



</div>







<div className="flex gap-3 mb-6">


<input

type="month"

value={bulan}

onChange={(e)=>setBulan(e.target.value)}

className="border p-3 rounded-lg"

/>





<button

onClick={tampilkan}

className="bg-blue-600 text-white px-5 py-3 rounded-lg"

>

🔍 Tampilkan

</button>



</div>







<ExportAbsensi

data={data}

/>









<table className="w-full border">



<thead className="bg-blue-600 text-white">


<tr>


<th className="border p-3">
No
</th>

<th className="border p-3">
NIS
</th>


<th className="border p-3">
Nama
</th>


<th className="border p-3">
Kelas
</th>


<th className="border p-3">
Hadir
</th>


<th className="border p-3">
Izin
</th>


<th className="border p-3">
Sakit
</th>


<th className="border p-3">
Alpa
</th>


<th className="border p-3">
%
</th>



</tr>


</thead>





<tbody>


{

data.map((item,index)=>(


<tr key={index}>


<td className="border p-3">
{index+1}
</td>


<td className="border p-3">
{item.nis}
</td>


<td className="border p-3">
{item.nama}
</td>


<td className="border p-3">
{item.kelas}
</td>


<td className="border p-3 text-center">
{item.hadir}
</td>


<td className="border p-3 text-center">
{item.izin}
</td>


<td className="border p-3 text-center">
{item.sakit}
</td>


<td className="border p-3 text-center">
{item.alpa}
</td>


<td className="border p-3 text-center">
{item.persen}%
</td>


</tr>


))


}


</tbody>



</table>





</div>


</main>


);


}