export default function StatCard(

{

title,

value,

color

}:{

title:string;

value:number;

color:string;

}

){



return(


<div className={`rounded-xl shadow-lg p-6 text-white ${color}`}>


<h2 className="text-lg">

{title}

</h2>


<p className="text-4xl font-bold mt-3">

{value}

</p>


</div>



);



}