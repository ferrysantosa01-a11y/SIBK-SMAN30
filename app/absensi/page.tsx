export default function AbsensiPage() {


  const dataAbsensi = [


    {
      nama: "Ahmad Fauzan",
      kelas: "X-1",
      tanggal: "19-07-2026",
      hadir: "Hadir",
      keterangan: "-"
    },


    {
      nama: "Siti Aisyah",
      kelas: "X-2",
      tanggal: "19-07-2026",
      hadir: "Sakit",
      keterangan: "Demam"
    },


    {
      nama: "Rizky Ramadhan",
      kelas: "XI-1",
      tanggal: "19-07-2026",
      hadir: "Izin",
      keterangan: "Keperluan keluarga"
    },


    {
      nama: "Dimas Pratama",
      kelas: "XI-2",
      tanggal: "19-07-2026",
      hadir: "Alpa",
      keterangan: "-"
    }


  ];



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>

            <h1 className="text-3xl font-bold text-blue-700">
              Absensi Siswa
            </h1>


            <p className="text-gray-500 mt-2">
              Rekap kehadiran siswa SMAN 30 Kabupaten Tangerang
            </p>


          </div>



          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah Absensi

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
                  Status
                </th>


                <th className="border p-3">
                  Keterangan
                </th>


              </tr>


            </thead>





            <tbody>


              {dataAbsensi.map((item,index)=>(


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


                  <td className="border p-3 text-center">
                    {item.hadir}
                  </td>


                  <td className="border p-3">
                    {item.keterangan}
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