"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {


  const router = useRouter();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  function handleLogin() {


    if (username === "admin" && password === "123456") {


      router.push("/dashboard");


    } else {


      alert("Username atau password salah");


    }


  }



  return (

    <main className="min-h-screen flex items-center justify-center bg-blue-50">


      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">



        <div className="flex justify-center gap-5">


          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30"
            width={90}
            height={90}
          />



          <Image
            src="/logo/logo-bk-sman30.png"
            alt="Logo BK"
            width={90}
            height={90}
          />


        </div>




        <h1 className="text-3xl font-bold text-blue-700 text-center mt-6">

          Login SIBK

        </h1>




        <p className="text-center text-gray-600 mt-2">

          SMAN 30 Kabupaten Tangerang

        </p>





        <div className="mt-8">


          <label>
            Username
          </label>


          <input

            type="text"

            value={username}

            onChange={(e)=>setUsername(e.target.value)}

            className="w-full border rounded-lg p-3 mt-2"

            placeholder="Masukkan username"

          />




          <label className="block mt-5">

            Password

          </label>



          <input

            type="password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            className="w-full border rounded-lg p-3 mt-2"

            placeholder="Masukkan password"

          />





          <button

            onClick={handleLogin}

            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-bold"

          >

            Masuk

          </button>




        </div>



        <div className="text-center text-sm text-gray-400 mt-5">

          Demo Login:
          <br/>
          admin / 123456

        </div>



      </div>


    </main>

  );
}