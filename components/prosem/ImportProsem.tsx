"use client";


import * as XLSX from "xlsx";

import { supabase } from "@/lib/supabase";

import { useState } from "react";



export default function ImportProsem(){


const [loading,setLoading]=useState(false);




async function handleUpload(

e:React.ChangeEvent<HTMLInputElement>

){


const file=e.target.files?.[0];



if(!file){

return;

}



setLoading(true);





const buffer = await file.arrayBuffer();



const workbook = XLSX.read(buffer);



const sheet = workbook.Sheets[

workbook.SheetNames[0]

];




const data:any[] = XLSX.utils.sheet_to_json(sheet);





if(data.length===0){


alert("File Excel kosong");


setLoading(false);

return;


}







const {error}=await supabase

.from("prosem_bk")

.insert(data);







if(error){


alert(error.message);


setLoading(false);


return;


}





alert("Import Prosem berhasil");



window.location.reload();



}






return(


<label

className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg cursor-pointer"

>


{

loading

?

"Memproses..."

:

"📥 Import Excel"

}





<input

type="file"

accept=".xlsx,.xls"

hidden

onChange={handleUpload}

/>



</label>


);


}