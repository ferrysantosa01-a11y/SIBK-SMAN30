export default function ProgramSemesterPage() {


  const dataSemester = [


    {
      semester: "Ganjil",
      bulan: "Juli 2026",
      bidang: "Pribadi",
      kegiatan: "Asesmen kebutuhan peserta didik",
      tujuan: "Mengetahui kebutuhan dan permasalahan siswa",
      sasaran: "Kelas X",
      waktu: "Minggu ke-2",
      status: "Selesai"
    },


    {
      semester: "Ganjil",
      bulan: "Agustus 2026",
      bidang: "Belajar",
      kegiatan: "Bimbingan manajemen waktu belajar",
      tujuan: "Meningkatkan kemampuan belajar siswa",
      sasaran: "Kelas XI",
      waktu: "Minggu ke-3",
      status: "Rencana"
    },


    {
      semester: "Genap",
      bulan: "Januari 2027",
      bidang: "Karir",
      kegiatan: "Persiapan studi lanjut dan karir",
      tujuan: "Membantu siswa menentukan masa depan",
      sasaran: "Kelas XII",
      waktu: "Minggu ke-2",
      status: "Rencana"
    }


  ];





  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">
              Program Semester BK
            </h1>


            <p className="text-gray-500 mt-2">
              Rencana kegiatan Bimbingan Konseling per semester
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
                  Semester
                </th>


                <th className="border p-3">
                  Bulan
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
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {dataSemester.map((item,index)=>(


                <tr key={index}>


                  <td className="border p-3 text-center">
                    {index + 1}
                  </td>


                  <td className="border p-3">
                    {item.semester}
                  </td>


                  <td className="border p-3">
                    {item.bulan}
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