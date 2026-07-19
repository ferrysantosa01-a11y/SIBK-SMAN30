import Image from "next/image";


export default function DashboardPage() {

  return (

    <main className="min-h-screen bg-gray-100">


      <header className="bg-blue-700 p-6 text-white">

        <h1 className="text-3xl font-bold">
          SIBK
        </h1>

        <p>
          Sistem Informasi Bimbingan Konseling
        </p>

        <p className="text-sm">
          SMAN 30 Kabupaten Tangerang
        </p>

      </header>





      <div className="flex">


        <aside className="w-72 bg-white min-h-screen shadow-lg p-6">


          <div className="text-center">


            <Image
              src="/profile/ferry.png"
              alt="Foto Admin"
              width={120}
              height={120}
              className="rounded-full mx-auto"
            />


            <h2 className="font-bold text-xl mt-3">
              Ferry Santosa
            </h2>


            <p className="text-gray-500">
              Administrator
            </p>


          </div>





          <nav className="mt-8 space-y-3">


            <a href="/dashboard" className="block p-3 rounded-lg bg-blue-100">
              📊 Dashboard
            </a>


            <a href="/siswa" className="block p-3 rounded-lg hover:bg-gray-100">
              👨‍🎓 Data Siswa
            </a>


            <a href="/absensi" className="block p-3 rounded-lg hover:bg-gray-100">
              📅 Absensi
            </a>


            <a href="/pelanggaran" className="block p-3 rounded-lg hover:bg-gray-100">
              ⚠ Pelanggaran
            </a>


            <a href="/konseling" className="block p-3 rounded-lg hover:bg-gray-100">
              📝 Konseling Individu
            </a>


            <a href="/hasil-konseling" className="block p-3 rounded-lg hover:bg-gray-100">
              📌 Hasil Konseling
            </a>


            <a href="/akpd" className="block p-3 rounded-lg hover:bg-gray-100">
              📋 AKPD
            </a>


            <a href="/rpl" className="block p-3 rounded-lg hover:bg-gray-100">
              📘 RPL
            </a>


            <a href="/program-tahunan" className="block p-3 rounded-lg hover:bg-gray-100">
              📆 Program Tahunan
            </a>


            <a href="/program-semester" className="block p-3 rounded-lg hover:bg-gray-100">
              📅 Program Semester
            </a>


            <a href="/prestasi" className="block p-3 rounded-lg hover:bg-gray-100">
              🏆 Prestasi
            </a>


            <a href="/laporan" className="block p-3 rounded-lg hover:bg-gray-100">
              📄 Laporan
            </a>


            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
              ⚙ Pengaturan
            </a>


          </nav>


        </aside>







        <section className="flex-1 p-8">


          <h1 className="text-3xl font-bold text-gray-700">
            Selamat Datang, Ferry Santosa
          </h1>


          <p className="text-gray-500 mt-2">
            Dashboard Administrator SIBK
          </p>





          <div className="grid grid-cols-4 gap-6 mt-8">


            <div className="bg-white rounded-xl shadow p-6">
              <p>Data Siswa</p>
              <h2 className="text-4xl font-bold text-blue-700">
                0
              </h2>
            </div>


            <div className="bg-white rounded-xl shadow p-6">
              <p>Absensi</p>
              <h2 className="text-4xl font-bold text-green-600">
                0
              </h2>
            </div>


            <div className="bg-white rounded-xl shadow p-6">
              <p>Pelanggaran</p>
              <h2 className="text-4xl font-bold text-red-600">
                0
              </h2>
            </div>


            <div className="bg-white rounded-xl shadow p-6">
              <p>Konseling</p>
              <h2 className="text-4xl font-bold text-purple-600">
                0
              </h2>
            </div>


          </div>


        </section>


      </div>


    </main>

  );

}