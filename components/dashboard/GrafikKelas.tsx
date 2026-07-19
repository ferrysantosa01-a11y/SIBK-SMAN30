"use client";


import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

} from "recharts";



export default function GrafikKelas(

{

data

}:{

data:any[]

}

){



return(


<div className="bg-white rounded-xl shadow p-6">



<h2 className="text-xl font-bold mb-5">

Jumlah Siswa Per Kelas

</h2>




<div className="h-72">


<ResponsiveContainer width="100%" height="100%">


<BarChart data={data}>


<XAxis dataKey="nama"/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="jumlah"

/>



</BarChart>



</ResponsiveContainer>



</div>




</div>



);



}