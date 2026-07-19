export const dynamic="force-dynamic";


import Link from "next/link";

import {getProta} from "@/services/protaService";



export default async function ProtaPage(){


const data = await getProta();



return (

<main className="min-h-screen bg-gray-100 p-8">


<div className="bg-white rounded-xl shadow-lg p-6">


<div className="flex justify-between items-center mb-6">


<h1 className="text-3xl font-bold text-blue-700">

Program Tahunan BK

</h1>



<Link

href="/dashboard"

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


</tr>


</thead>





<tbody>


{

data.map((item:any,index:number)=>(


<tr key={item.id}>


<td className="border p-3">

{index+1}

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


</tr>


))


}


</tbody>


</table>


</div>


</main>


);


}