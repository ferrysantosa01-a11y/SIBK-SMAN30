import Link from "next/link";

import { getAbsensiFilter } from "@/services/absensiFilterService";



export const dynamic="force-dynamic";



export default async function FilterAbsensi(){



const data = await getAbsensiFilter();





return (

<main className="min-h-screen bg-gray-100 p-8">


<div className="bg-white rounded-xl shadow-lg p-6">



<h1 className="text-3xl font-bold text-blue-700 mb-6">

Filter Absensi

</h1>




<div className="mb-5">

<Link

href="/absensi"

className="bg-gray-600 text-white px-5 py-3 rounded-lg"

>

⬅ Kembali

</Link>

</div>





<table className="w-full border">


<thead className="bg-blue-600 text-white">


<tr>


<th className="border p-3">

No

</th>


<th className="border p-3">

Tanggal

</th>


<th className="border p-3">

Nama

</th>


<th className="border p-3">

Kelas

</th>


<th className="border p-3">

Status

</th>


</tr>


</thead>





<tbody>


{

data.map((item:any,index)=>(


<tr key={item.id}>


<td className="border p-3">

{index+1}

</td>



<td className="border p-3">

{item.tanggal}

</td>



<td className="border p-3">

{item.siswa?.nama}

</td>



<td className="border p-3">

{item.siswa?.kelas}

</td>



<td className="border p-3">

{item.status}

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