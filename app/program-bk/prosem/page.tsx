export const dynamic = "force-dynamic";


import Link from "next/link";

import { getProsem } from "@/services/prosemService";

import ImportProsem from "@/components/prosem/ImportProsem";

import UploadDokumen from "@/components/dokumen/UploadDokumen";




export default async function ProsemPage(){


const data = await getProsem();



return (

<main className="min-h-screen bg-gray-100 p-8">


<div className="bg-white rounded-xl shadow-lg p-6">





<div className="flex justify-between items-center mb-6">


<div>


<h1 className="text-3xl font-bold text-blue-700">

Program Semester BK

</h1>


<p className="text-gray-500 mt-2">

Tahun Pelajaran 2026/2027

</p>


</div>



<Link

href="/dashboard"

className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-lg"

>

⬅ Kembali

</Link>



</div>







<div className="flex gap-3 mb-6">


<ImportProsem />


<UploadDokumen />



</div>









<table className="w-full border border-gray-300">


<thead className="bg-blue-600 text-white">


<tr>


<th className="border p-3">

No

</th>


<th className="border p-3">

Semester

</th>


<th className="border p-3">

Bulan

</th>


<th className="border p-3">

Bidang

</th>


<th className="border p-3">

Kegiatan

</th>


<th className="border p-3">

Kelas

</th>


<th className="border p-3">

Keterangan

</th>


</tr>


</thead>






<tbody>


{

data.length === 0 ? (


<tr>


<td

colSpan={7}

className="border p-6 text-center text-gray-500"

>

Belum ada data Prosem BK

</td>


</tr>


)


:

data.map((item:any,index:number)=>(


<tr key={item.id}>


<td className="border p-3 text-center">

{index+1}

</td>



<td className="border p-3">

{item.semester}

</td>



<td className="border p-3">

{item.bulan}

</td>



<td className="border p-3">

{item.bidang_layanan}

</td>



<td className="border p-3">

{item.kegiatan}

</td>



<td className="border p-3">

{item.sasaran_kelas}

</td>



<td className="border p-3">

{item.keterangan}

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