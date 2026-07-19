export default function AKPDPage() {


  const dataAKPD = [


    {
      nama: "Ahmad Fauzan",
      kelas: "X-1",
      tanggal: "19-07-2026",
      kebutuhan: "Kedisiplinan",
      analisis: "Membutuhkan pembinaan aturan sekolah",
      prioritas: "Tinggi",
      status: "Ditindaklanjuti"
    },


    {
      nama: "Siti Aisyah",
      kelas: "X-2",
      tanggal: "18-07-2026",
      kebutuhan: "Belajar",
      analisis: "Membutuhkan strategi belajar efektif",
      prioritas: "Sedang",
      status: "Proses"
    },


    {
      nama: "Rizky Ramadhan",
      kelas: "XI-1",
      tanggal: "17-07-2026",
      kebutuhan: "Sosial",
      analisis: "Membutuhkan pendampingan hubungan sosial",
      prioritas: "Sedang",
      status: "Proses"
    }


  ];





  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>


            <h1 className="text-3xl font-bold text-blue-700">
              AKPD
            </h1>


            <p className="text-gray-500 mt-2">
              Angket Kebutuhan Peserta Didik
            </p>


          </div>




          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah AKPD

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
                  Bidang Kebutuhan
                </th>


                <th className="border p-3">
                  Hasil Analisis
                </th>


                <th className="border p-3">
                  Prioritas
                </th>


                <th className="border p-3">
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {dataAKPD.map((item,index)=>(


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
                    {item.kebutuhan}
                  </td>


                  <td className="border p-3">
                    {item.analisis}
                  </td>


                  <td className="border p-3 text-center">
                    {item.prioritas}
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