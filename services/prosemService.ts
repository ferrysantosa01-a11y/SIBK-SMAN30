import { supabase } from "@/lib/supabase";


export async function getProsem(){


const {data,error}=await supabase

.from("prosem_bk")

.select("*")

.order("id");



if(error){

console.error("PROSEM:",error.message);

return [];

}



return data ?? [];


}