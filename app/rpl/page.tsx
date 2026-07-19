export default function RPLPage() {


  const dataRPL = [


    {
      tanggal: "20-07-2026",
      bidang: "Pribadi",
      topik: "Membangun Kedisiplinan Siswa",
      tujuan: "Siswa memahami pentingnya disiplin dalam kehidupan sekolah",
      metode: "Bimbingan Klasikal",
      sasaran: "Kelas X",
      evaluasi: "Observasi perubahan perilaku",
      status: "Selesai"
    },


    {
      tanggal: "25-07-2026",
      bidang: "Belajar",
      topik: "Manajemen Waktu Belajar",
      tujuan: "Siswa mampu mengatur waktu belajar secara efektif",
      metode: "Diskusi Kelompok",
      sasaran: "Kelas XI",
      evaluasi: "Refleksi siswa",
      status: "Rencana"
    },


    {
      tanggal: "01-08-2026",
      bidang: "Sosial",
      topik: "Membangun Hubungan Positif",
      tujuan: "Siswa mampu berinteraksi dengan baik",
      metode: "Bimbingan Kelompok",
      sasaran: "Kelas XII",
      evaluasi: "Lembar evaluasi",
      status: "Rencana"
    }


  ];





  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">
              RPL BK
            </h1>


            <p className="text-gray-500 mt-2">
              Rencana Pelaksanaan Layanan Bimbingan Konseling
            </p>


          </div>




          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah RPL

          </button>


        </div>





        <div className="overflow-x-auto mt-8">


          <table className="w-full border">


            <thead className="bg-blue-600 text-white">


              <tr>


                <th className="border p-3">
                  No
                </th>


                <th className="border p-3">
                  Tanggal
                </th>


                <th className="border p-3">
                  Bidang Layanan
                </th>


                <th className="border p-3">
                  Topik
                </th>


                <th className="border p-3">
                  Tujuan
                </th>


                <th className="border p-3">
                  Metode
                </th>


                <th className="border p-3">
                  Sasaran
                </th>


                <th className="border p-3">
                  Evaluasi
                </th>


                <th className="border p-3">
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {dataRPL.map((item,index)=>(


                <tr key={index}>


                  <td className="border p-3 text-center">
                    {index + 1}
                  </td>


                  <td className="border p-3">
                    {item.tanggal}
                  </td>


                  <td className="border p-3">
                    {item.bidang}
                  </td>


                  <td className="border p-3">
                    {item.topik}
                  </td>


                  <td className="border p-3">
                    {item.tujuan}
                  </td>


                  <td className="border p-3">
                    {item.metode}
                  </td>


                  <td className="border p-3">
                    {item.sasaran}
                  </td>


                  <td className="border p-3">
                    {item.evaluasi}
                  </td>


                  <td className="border p-3 text-center">
                    {item.status}
                  </td>


                </tr>


              ))}


            </tbody>


          </table>


        </div>



      </div>


    </main>


  );

}