"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function UserInfo() {


  const [profile, setProfile] = useState<any>(null);



  useEffect(() => {

    loadProfile();

  }, []);




  async function loadProfile() {


    const {
      data: {
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





  if (!profile) {

    return null;

  }





  return (

    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">

      <p className="font-semibold text-blue-700">

        Selamat datang, {profile.nama}

      </p>


      <p className="text-gray-600">

        Role: {profile.role}

      </p>


    </div>

  );


}