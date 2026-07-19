export default function PelanggaranPage() {


  const dataPelanggaran = [

    {
      nama: "Ahmad Fauzan",
      kelas: "X-1",
      tanggal: "19-07-2026",
      pelanggaran: "Terlambat masuk sekolah",
      poin: 5,
      tindak: "Pembinaan",
      status: "Selesai"
    },


    {
      nama: "Siti Aisyah",
      kelas: "X-2",
      tanggal: "18-07-2026",
      pelanggaran: "Tidak membawa atribut",
      poin: 3,
      tindak: "Teguran",
      status: "Selesai"
    },


    {
      nama: "Rizky Ramadhan",
      kelas: "XI-1",
      tanggal: "17-07-2026",
      pelanggaran: "Tidak masuk tanpa keterangan",
      poin: 10,
      tindak: "Pemanggilan orang tua",
      status: "Proses"
    }

  ];



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">
              Data Pelanggaran Siswa
            </h1>


            <p className="text-gray-500 mt-2">
              Rekap kedisiplinan siswa SMAN 30 Kabupaten Tangerang
            </p>


          </div>



          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah Pelanggaran

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
                  Jenis Pelanggaran
                </th>


                <th className="border p-3">
                  Poin
                </th>


                <th className="border p-3">
                  Tindak Lanjut
                </th>


                <th className="border p-3">
                  Status
                </th>


              </tr>


            </thead>




            <tbody>


              {dataPelanggaran.map((item,index)=>(


                <tr key={index}>


                  <td className="border p-3 text-center">
                    {index+1}
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
                    {item.pelanggaran}
                  </td>


                  <td className="border p-3 text-center">
                    {item.poin}
                  </td>


                  <td className="border p-3">
                    {item.tindak}
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