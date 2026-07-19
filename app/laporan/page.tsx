export default function LaporanPage() {


  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>

            <h1 className="text-3xl font-bold text-blue-700">
              Laporan BK
            </h1>


            <p className="text-gray-500 mt-2">
              Rekap Sistem Informasi Bimbingan Konseling
            </p>

          </div>



          <button className="bg-green-600 text-white px-5 py-3 rounded-lg">

            🖨 Cetak Laporan

          </button>


        </div>





        <div className="grid grid-cols-4 gap-6 mt-8">



          <div className="bg-blue-100 p-6 rounded-xl">

            <p className="text-gray-600">
              Jumlah Siswa
            </p>


            <h2 className="text-4xl font-bold text-blue-700">
              0
            </h2>


          </div>





          <div className="bg-green-100 p-6 rounded-xl">

            <p className="text-gray-600">
              Konseling
            </p>


            <h2 className="text-4xl font-bold text-green-700">
              0
            </h2>


          </div>





          <div className="bg-red-100 p-6 rounded-xl">

            <p className="text-gray-600">
              Pelanggaran
            </p>


            <h2 className="text-4xl font-bold text-red-700">
              0
            </h2>


          </div>





          <div className="bg-yellow-100 p-6 rounded-xl">

            <p className="text-gray-600">
              Prestasi
            </p>


            <h2 className="text-4xl font-bold text-yellow-700">
              0
            </h2>


          </div>



        </div>






        <div className="mt-10">


          <h2 className="text-xl font-bold text-gray-700">

            Statistik Layanan BK

          </h2>




          <div className="mt-5 bg-gray-100 rounded-xl p-10 text-center">


            <p className="text-gray-500">

              Grafik statistik akan ditampilkan di sini

            </p>


          </div>


        </div>






        <div className="mt-10">


          <h2 className="text-xl font-bold text-gray-700">

            Rekap Laporan

          </h2>




          <table className="w-full border mt-5">


            <thead className="bg-blue-600 text-white">


              <tr>


                <th className="border p-3">
                  No
                </th>


                <th className="border p-3">
                  Jenis Laporan
                </th>


                <th className="border p-3">
                  Jumlah
                </th>


                <th className="border p-3">
                  Keterangan
                </th>


              </tr>


            </thead>



            <tbody>


              <tr>

                <td className="border p-3 text-center">
                  1
                </td>


                <td className="border p-3">
                  Konseling Siswa
                </td>


                <td className="border p-3 text-center">
                  0
                </td>


                <td className="border p-3">
                  Data layanan BK
                </td>


              </tr>




              <tr>

                <td className="border p-3 text-center">
                  2
                </td>


                <td className="border p-3">
                  Pelanggaran Siswa
                </td>


                <td className="border p-3 text-center">
                  0
                </td>


                <td className="border p-3">
                  Data kedisiplinan
                </td>


              </tr>




              <tr>

                <td className="border p-3 text-center">
                  3
                </td>


                <td className="border p-3">
                  Prestasi Siswa
                </td>


                <td className="border p-3 text-center">
                  0
                </td>


                <td className="border p-3">
                  Data prestasi
                </td>


              </tr>



            </tbody>


          </table>


        </div>



      </div>


    </main>

  );

}