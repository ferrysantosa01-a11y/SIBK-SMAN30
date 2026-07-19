export default function ProgramTahunanPage() {


  const dataProgram = [


    {
      tahun: "2026/2027",
      bidang: "Pribadi",
      kegiatan: "Pembinaan Kedisiplinan Siswa",
      tujuan: "Membantu siswa memiliki sikap disiplin",
      sasaran: "Kelas X",
      waktu: "Juli 2026",
      keterangan: "Awal tahun pelajaran",
      status: "Selesai"
    },


    {
      tahun: "2026/2027",
      bidang: "Belajar",
      kegiatan: "Motivasi dan Strategi Belajar",
      tujuan: "Meningkatkan motivasi belajar siswa",
      sasaran: "Kelas XI",
      waktu: "Agustus 2026",
      keterangan: "Layanan klasikal",
      status: "Rencana"
    },


    {
      tahun: "2026/2027",
      bidang: "Karir",
      kegiatan: "Pengenalan Studi Lanjut",
      tujuan: "Membantu siswa menentukan pilihan masa depan",
      sasaran: "Kelas XII",
      waktu: "September 2026",
      keterangan: "Persiapan kelulusan",
      status: "Rencana"
    }


  ];





  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">
              Program Tahunan BK
            </h1>


            <p className="text-gray-500 mt-2">
              Rencana kegiatan Bimbingan Konseling selama satu tahun pelajaran
            </p>


          </div>



          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah Program

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
                  Tahun Pelajaran
                </th>


                <th className="border p-3">
                  Bidang Layanan
                </th>


                <th className="border p-3">
                  Kegiatan
                </th>


                <th className="border p-3">
                  Tujuan
                </th>


                <th className="border p-3">
                  Sasaran
                </th>


                <th className="border p-3">
                  Waktu
                </th>


                <th className="border p-3">
                  Keterangan
                </th>


                <th className="border p-3">
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {dataProgram.map((item,index)=>(


                <tr key={index}>


                  <td className="border p-3 text-center">
                    {index + 1}
                  </td>


                  <td className="border p-3">
                    {item.tahun}
                  </td>


                  <td className="border p-3">
                    {item.bidang}
                  </td>


                  <td className="border p-3">
                    {item.kegiatan}
                  </td>


                  <td className="border p-3">
                    {item.tujuan}
                  </td>


                  <td className="border p-3">
                    {item.sasaran}
                  </td>


                  <td className="border p-3">
                    {item.waktu}
                  </td>


                  <td className="border p-3">
                    {item.keterangan}
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