"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


interface Props {
  children: React.ReactNode;
}



export default function AuthGuard({ children }: Props) {


  const router = useRouter();

  const [loading, setLoading] = useState(true);




  useEffect(() => {


    checkSession();



    const {
      data: authListener
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {


        if (!session) {

          router.push("/login");

        } else {

          setLoading(false);

        }


      }
    );



    return () => {

      authListener.subscription.unsubscribe();

    };


  }, []);







  async function checkSession() {


    const {
      data
    } = await supabase.auth.getSession();



    if (!data.session) {


      router.push("/login");


      return;


    }



    setLoading(false);


  }







  if (loading) {


    return (

      <div className="min-h-screen flex items-center justify-center">

        <p className="text-gray-600">

          Memeriksa login...

        </p>

      </div>

    );


  }





  return (

    <>

      {children}

    </>

  );


}