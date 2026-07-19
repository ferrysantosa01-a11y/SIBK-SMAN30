"use client";


import { useState } from "react";

import { supabase } from "@/lib/supabase";



export default function UploadDokumen(){


const [file,setFile]=useState<File | null>(null);

const [kategori,setKategori]=useState("Prosem");

const [loading,setLoading]=useState(false);





async function upload(){


if(!file){

alert("Pilih dokumen terlebih dahulu");

return;

}



setLoading(true);



const namaFile =

`${Date.now()}-${file.name}`;







// Upload ke storage


const {error:uploadError}=await supabase

.storage

.from("dokumen-bk")

.upload(

namaFile,

file

);





if(uploadError){


alert(uploadError.message);


setLoading(false);

return;


}







const {data:url}=supabase

.storage

.from("dokumen-bk")

.getPublicUrl(

namaFile

);







// simpan informasi file


const {error:dbError}=await supabase

.from("dokumen_bk")

.insert([


{

jenis_dokumen:file.type,

kategori:kategori,

nama_file:file.name,

url_file:url.publicUrl,

tahun_pelajaran:"2026/2027"

}


]);







if(dbError){


alert(dbError.message);


setLoading(false);

return;


}






alert("Dokumen berhasil disimpan");



window.location.reload();



}







return(


<div className="flex gap-3 items-center">





<select

value={kategori}

onChange={(e)=>setKategori(e.target.value)}

className="border p-3 rounded-lg"

>


<option value="Prosem">

Prosem BK

</option>


<option value="Prota">

Prota BK

</option>


<option value="RPL">

RPL BK

</option>



</select>








<input

type="file"

accept=".pdf,.doc,.docx,.xls,.xlsx"

onChange={(e)=>

setFile(

e.target.files?.[0] ?? null

)

}

className="border p-2 rounded-lg"

/>







<button

onClick={upload}

className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg"

>


{

loading

?

"Mengupload..."

:

"📄 Upload Dokumen"

}


</button>






</div>


);


}