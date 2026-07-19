import { supabase } from "@/lib/supabase";


export async function getProta(){


const {data,error}=await supabase

.from("prota_bk")

.select("*")

.order("id");



if(error){

console.error(error.message);

return [];

}



return data ?? [];


}