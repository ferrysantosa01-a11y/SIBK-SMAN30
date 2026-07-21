"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


export default function LoginPage() {


  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");





  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();


    setLoading(true);
    setError("");



    const { error } = await supabase.auth.signInWithPassword({

      email,

      password,

    });




    if (error) {


      setError(error.message);

      setLoading(false);

      return;


    }




   router.push("/dashboard");



  }





  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center">


      <div className="bg-white w-full max-w-md rounded-xl shadow p-8">


        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">

          Login SiBK

        </h1>




        {error && (

          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">

            {error}

          </div>

        )}






        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >



          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>


            <input

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              className="w-full border rounded p-3"

              placeholder="email@contoh.com"

              required

            />

          </div>





          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>


            <input

              type="password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full border rounded p-3"

              placeholder="Password"

              required

            />

          </div>





          <button

            type="submit"

            disabled={loading}

            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"

          >

            {loading
              ? "Memproses..."
              : "Login"
            }

          </button>




        </form>


      </div>


    </main>

  );

}