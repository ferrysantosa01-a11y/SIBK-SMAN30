"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


interface Profile {
  nama: string;
  role: string;
}



export default function Header() {


  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);



  const today = new Date();

  const tanggal = today.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });




  useEffect(() => {

    loadProfile();

  }, []);





  async function loadProfile() {


    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if (!user) return;



    const { data } = await supabase

      .from("profiles")

      .select("nama, role")

      .eq("id", user.id)

      .single();



    setProfile(data);


  }






  async function logout() {


    await supabase.auth.signOut();


    router.push("/login");


  }






  return (

    <header className="bg-blue-700 text-white shadow-md">


      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">



        <div className="flex items-center gap-4">


          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30"
            width={55}
            height={55}
          />


          <Image
            src="/logo/logo-bk-sman30.png"
            alt="Logo BK"
            width={55}
            height={55}
          />


          <div>

            <h1 className="text-2xl font-bold">
              SIBK
            </h1>

            <p className="text-sm">
              Sistem Informasi Bimbingan Konseling
            </p>

            <p className="text-xs opacity-90">
              SMAN 30 Kabupaten Tangerang
            </p>


          </div>


        </div>





        <div className="text-right">


          <p className="font-semibold">

            {profile?.nama ?? "Memuat..."}

          </p>


          <p className="text-sm">

            {profile?.role ?? ""}

          </p>


          <p className="text-xs opacity-90">

            {tanggal}

          </p>



          <button

            onClick={logout}

            className="mt-2 bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-sm"

          >

            Logout

          </button>


        </div>



      </div>


    </header>

  );

}