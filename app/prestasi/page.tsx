export default function PrestasiPage() {


  const dataPrestasi = [


    {
      nama: "Ahmad Fauzan",
      kelas: "X-1",
      prestasi: "Juara Olimpiade Matematika",
      tingkat: "Kabupaten Tangerang",
      tahun: "2026",
      keterangan: "Juara 1"
    },


    {
      nama: "Siti Aisyah",
      kelas: "X-2",
      prestasi: "Lomba Pidato Bahasa Indonesia",
      tingkat: "Provinsi",
      tahun: "2026",
      keterangan: "Juara 2"
    },


    {
      nama: "Rizky Ramadhan",
      kelas: "XI-1",
      prestasi: "Turnamen Futsal",
      tingkat: "Sekolah",
      tahun: "2026",
      keterangan: "Pemain Terbaik"
    }


  ];



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">



        <div className="flex justify-between items-center">



          <div>


            <h1 className="text-3xl font-bold text-blue-700">

              Data Prestasi Siswa

            </h1>



            <p className="text-gray-500 mt-2">

              Rekap prestasi siswa SMAN 30 Kabupaten Tangerang

            </p>


          </div>





          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah Prestasi

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
                  Prestasi
                </th>


                <th className="border p-3">
                  Tingkat
                </th>


                <th className="border p-3">
                  Tahun
                </th>


                <th className="border p-3">
                  Keterangan
                </th>


              </tr>


            </thead>





            <tbody>


              {dataPrestasi.map((item,index)=>(



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

                    {item.prestasi}

                  </td>




                  <td className="border p-3">

                    {item.tingkat}

                  </td>




                  <td className="border p-3 text-center">

                    {item.tahun}

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