"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


interface Profile {
  nama: string;
  role: string;
}



export default function Navbar() {


  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);



 useEffect(() => {

  loadProfile();

  const {
    data: listener
  } = supabase.auth.onAuthStateChange(() => {

    loadProfile();

  });


  return () => {

    listener.subscription.unsubscribe();

  };


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

console.log("USER LOGIN:", user);
console.log("PROFILE:", data);

    setProfile(data);


  }





  async function logout() {


    await supabase.auth.signOut();

    router.push("/login");


  }





  return (

    <nav className="bg-blue-700 text-white px-6 py-4 shadow">


      <div className="max-w-7xl mx-auto flex justify-between items-center">


        <div>

          <h1 className="text-xl font-bold">
            SiBK
          </h1>


          <p className="text-sm text-blue-100">
            Sistem Informasi Bimbingan Konseling
          </p>

        </div>





        <div className="flex items-center gap-5">



          {/* Dashboard semua user */}

          <Link
            href="/"
            className="hover:text-blue-200"
          >
            Dashboard
          </Link>





          {/* Admin dan Guru BK */}

          {profile &&
            (
              profile.role === "Admin" ||
              profile.role === "Guru BK"
            ) && (

            <>

              <Link
                href="/siswa"
                className="hover:text-blue-200"
              >
                Siswa
              </Link>



              <Link
                href="/konseling"
                className="hover:text-blue-200"
              >
                Konseling
              </Link>


              <Link
                href="/konseling/tambah"
                className="hover:text-blue-200"
              >
                Tambah Konseling
              </Link>


            </>

          )}







          {/* Siswa */}

          {profile?.role === "Siswa" && (

            <Link

              href="/profil"

              className="hover:text-blue-200"

            >

              Profil Saya

            </Link>

          )}








          {profile && (

            <div className="border-l border-blue-300 pl-5">


              <p className="font-semibold">

                {profile.nama}

              </p>


              <p className="text-sm text-blue-100">

                {profile.role}

              </p>


            </div>

          )}






          <button

            onClick={logout}

            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"

          >

            Logout

          </button>





        </div>


      </div>


    </nav>

  );
<button
  onClick={logout}
>
  Logout
</button>
}