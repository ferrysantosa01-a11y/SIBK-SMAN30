import Image from "next/image";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center p-6">

        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-4xl w-full text-center">

          <div className="flex justify-center items-center gap-10">

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


          <h1 className="text-5xl font-bold text-blue-700 mt-8">
            SIBK
          </h1>


          <h2 className="text-2xl font-semibold text-gray-700 mt-4">
            Sistem Informasi Bimbingan Konseling
          </h2>


          <p className="text-lg text-gray-500 mt-3">
            SMAN 30 Kabupaten Tangerang
          </p>


          <p className="text-sm text-gray-400 mt-2">
            Tahun Ajaran 2026 / 2027
          </p>


          <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-semibold shadow-lg">
            Masuk ke Aplikasi
          </button>

        </div>

      </main>
    </>
  );
}