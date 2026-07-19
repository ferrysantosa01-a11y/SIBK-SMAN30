import Image from "next/image";
import Link from "next/link";


export default function Home() {


  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center">


      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-full max-w-xl">


        {/* Logo Sekolah dan BK */}

        <div className="flex justify-center items-center gap-8 mb-8">


          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30 Kabupaten Tangerang"
            width={120}
            height={120}
            priority
          />


          <Image
            src="/logo/logo-bk-sman30.png"
            alt="Logo BK SMAN 30"
            width={120}
            height={120}
            priority
          />


        </div>





        {/* Judul */}


        <h1 className="text-5xl font-bold text-blue-700">
          SIBK
        </h1>


        <p className="text-lg mt-3 text-gray-600">
          Sistem Informasi Bimbingan Konseling
        </p>


        <p className="text-lg font-semibold mt-2">
          SMAN 30 Kabupaten Tangerang
        </p>





        {/* Tahun Ajaran */}


        <div className="mt-8">


          <p className="text-gray-500">
            Tahun Ajaran
          </p>


          <p className="text-xl font-bold text-blue-600">
            2026 / 2027
          </p>


        </div>






        {/* Tombol Login */}


        <Link

          href="/login"

          className="
          inline-block
          mt-10
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          px-10
          py-4
          rounded-xl
          shadow-lg
          transition
          "

        >

          Masuk ke Aplikasi

        </Link>




      </div>



    </main>

  );

}