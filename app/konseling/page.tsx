export default function KonselingPage() {


  const dataKonseling = [


    {
      nama: "Ahmad Fauzan",
      kelas: "X-1",
      tanggal: "19-07-2026",
      masalah: "Sering terlambat datang ke sekolah",
      pelanggaran: "Terlambat (5 poin)",
      hasil: "Diberikan pembinaan",
      status: "Proses"
    },


    {
      nama: "Siti Aisyah",
      kelas: "X-2",
      tanggal: "18-07-2026",
      masalah: "Kesulitan mengikuti pembelajaran",
      pelanggaran: "Tidak ada",
      hasil: "Pendampingan belajar",
      status: "Selesai"
    },


    {
      nama: "Rizky Ramadhan",
      kelas: "XI-1",
      tanggal: "17-07-2026",
      masalah: "Tidak masuk tanpa keterangan",
      pelanggaran: "Alpa (10 poin)",
      hasil: "Pemanggilan orang tua",
      status: "Proses"
    }


  ];



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">
              Konseling Individu
            </h1>


            <p className="text-gray-500 mt-2">
              Layanan konseling siswa SMAN 30 Kabupaten Tangerang
            </p>


          </div>




          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah Konseling

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
                  Nama Siswa
                </th>


                <th className="border p-3">
                  Kelas
                </th>


                <th className="border p-3">
                  Tanggal
                </th>


                <th className="border p-3">
                  Permasalahan
                </th>


                <th className="border p-3">
                  Pelanggaran
                </th>


                <th className="border p-3">
                  Hasil Sementara
                </th>


                <th className="border p-3">
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {dataKonseling.map((item,index)=>(


                <tr key={index}>


                  <td className="border p-3 text-center">
                    {index + 1}
                  </td>



                  <td className="border p-3">
                    {item.nama}
                  </td>



                  <td className="border p-3">
                    {item.kelas}
                  </td>



                  <td className="border p-3">
                    {item.tanggal}
                  </td>



                  <td className="border p-3">
                    {item.masalah}
                  </td>



                  <td className="border p-3">
                    {item.pelanggaran}
                  </td>



                  <td className="border p-3">
                    {item.hasil}
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