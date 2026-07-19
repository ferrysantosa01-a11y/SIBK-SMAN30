"use client";


import { useEffect, useState } from "react";

import Link from "next/link";

import { supabase } from "@/lib/supabase";



export default function RPLPage(){


const [data,setData]=useState<any[]>([]);

const [loading,setLoading]=useState(true);





async function loadRPL(){



const {data,error}=await supabase

.from("dokumen_bk")

.select("*")

.eq("kategori","RPL")

.order("id",{ascending:false});





if(error){

console.log(error.message);

return;

}



setData(data ?? []);

setLoading(false);



}






useEffect(()=>{


loadRPL();


},[]);








return(


<main className="min-h-screen bg-gray-100 p-8">



<div className="bg-white rounded-xl shadow-lg p-6">





<div className="flex justify-between items-center mb-6">



<h1 className="text-3xl font-bold text-blue-700">

RPL BK

</h1>



<Link

href="/dashboard"

className="bg-gray-600 text-white px-5 py-3 rounded-lg"

>

⬅ Kembali

</Link>



</div>








<p className="mb-6 text-gray-600">

Daftar Rencana Pelaksanaan Layanan BK

</p>







{

loading ? (


<p>

Memuat data...

</p>


)

:


(


<table className="w-full border">



<thead className="bg-blue-600 text-white">


<tr>


<th className="border p-3">

No

</th>


<th className="border p-3">

Nama File RPL

</th>


<th className="border p-3">

Jenis

</th>


<th className="border p-3">

Aksi

</th>


</tr>


</thead>







<tbody>


{


data.length===0 ? (


<tr>


<td

colSpan={4}

className="border p-6 text-center"

>

Belum ada file RPL

</td>


</tr>



)


:


data.map((item,index)=>(


<tr key={item.id}>


<td className="border p-3 text-center">

{index+1}

</td>



<td className="border p-3">

{item.nama_file}

</td>



<td className="border p-3">

{item.jenis_dokumen}

</td>





<td className="border p-3">


<a

href={item.url_file}

target="_blank"

className="bg-green-600 text-white px-4 py-2 rounded-lg"

>

📄 Lihat RPL

</a>



</td>



</tr>



))


}



</tbody>



</table>


)


}




</div>


</main>


);


}