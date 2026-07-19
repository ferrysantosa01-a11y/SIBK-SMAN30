import Image from "next/image";
import Link from "next/link";


export default function Home() {


  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center">


      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-full max-w-lg">


        <div className="flex justify-center gap-6 mb-6">


          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30"
            width={100}
            height={100}
          />


          <Image
            src="/logo/logo-bk.png"
            alt="Logo BK"
            width={100}
            height={100}
          />


        </div>




        <h1 className="text-4xl font-bold text-blue-700">
          SIBK
        </h1>


        <p className="mt-3 text-gray-600">
          Sistem Informasi Bimbingan Konseling
        </p>


        <p className="font-semibold mt-2">
          SMAN 30 Kabupaten Tangerang
        </p>




        <p className="mt-6 text-gray-500">
          Tahun Ajaran 2026 / 2027
        </p>





        <Link
          href="/login"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >

          Masuk ke Aplikasi

        </Link>




      </div>


    </main>

  );


}