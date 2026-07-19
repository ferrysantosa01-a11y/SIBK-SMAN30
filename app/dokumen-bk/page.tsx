"use client";


import { useEffect, useState } from "react";

import Link from "next/link";

import { supabase } from "@/lib/supabase";



export default function DokumenBK(){


const [dokumen,setDokumen]=useState<any[]>([]);

const [loading,setLoading]=useState(true);





async function loadData(){


const {data,error}=await supabase

.from("dokumen_bk")

.select("*")

.order("id",{ascending:false});





if(error){

console.log(error.message);

return;

}



setDokumen(data ?? []);

setLoading(false);


}






useEffect(()=>{

loadData();

},[]);








async function hapusDokumen(

id:number

){


const yakin = confirm(

"Yakin hapus dokumen?"

);



if(!yakin){

return;

}




const {error}=await supabase

.from("dokumen_bk")

.delete()

.eq("id",id);





if(error){

alert(error.message);

return;

}



alert("Dokumen dihapus");

loadData();



}







return(


<main className="min-h-screen bg-gray-100 p-8">



<div className="bg-white rounded-xl shadow-lg p-6">






<div className="flex justify-between items-center mb-6">



<h1 className="text-3xl font-bold text-blue-700">

Arsip Dokumen BK

</h1>




<Link

href="/dashboard"

className="bg-gray-600 text-white px-5 py-3 rounded-lg"

>

⬅ Kembali

</Link>



</div>








{loading ? (


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

Nama File

</th>


<th className="border p-3">

Kategori

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

dokumen.length===0 ? (


<tr>


<td

colSpan={5}

className="border p-6 text-center"

>

Belum ada dokumen

</td>


</tr>


)

:


dokumen.map((item,index)=>(



<tr key={item.id}>


<td className="border p-3 text-center">

{index+1}

</td>




<td className="border p-3">

{item.nama_file}

</td>



<td className="border p-3">

{item.kategori}

</td>



<td className="border p-3">

{item.jenis_dokumen}

</td>





<td className="border p-3">


<div className="flex gap-2">



<a

href={item.url_file}

target="_blank"

className="bg-green-600 text-white px-3 py-2 rounded"

>

Lihat

</a>




<button

onClick={()=>hapusDokumen(item.id)}

className="bg-red-600 text-white px-3 py-2 rounded"

>

Hapus

</button>



</div>



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