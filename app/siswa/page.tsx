export default function SiswaPage() {

  const dataSiswa = [
    {
      nis: "1001",
      nama: "Ahmad Fauzan",
      kelas: "X-1",
      jk: "Laki-laki",
      wali: "Budi Santoso"
    },
    {
      nis: "1002",
      nama: "Siti Aisyah",
      kelas: "X-2",
      jk: "Perempuan",
      wali: "Dewi Lestari"
    },
    {
      nis: "1003",
      nama: "Rizky Ramadhan",
      kelas: "XI-1",
      jk: "Laki-laki",
      wali: "Agus Setiawan"
    }
  ];


  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-6">


        <div className="flex justify-between items-center">


          <div>

            <h1 className="text-3xl font-bold text-blue-700">
              Data Siswa
            </h1>

            <p className="text-gray-500 mt-2">
              Sistem Informasi Bimbingan Konseling
            </p>

          </div>



          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

            + Tambah Siswa

          </button>


        </div>



        <div className="mt-6">


          <input

            type="text"

            placeholder="Cari nama siswa..."

            className="border rounded-lg p-3 w-full"

          />


        </div>





        <div className="overflow-x-auto mt-6">


          <table className="w-full border">


            <thead className="bg-blue-600 text-white">


              <tr>


                <th className="p-3 border">
                  No
                </th>


                <th className="p-3 border">
                  NIS
                </th>


                <th className="p-3 border">
                  Nama
                </th>


                <th className="p-3 border">
                  Kelas
                </th>


                <th className="p-3 border">
                  Jenis Kelamin
                </th>


                <th className="p-3 border">
                  Wali Kelas
                </th>


                <th className="p-3 border">
                  Aksi
                </th>


              </tr>


            </thead>




            <tbody>


              {dataSiswa.map((siswa,index)=>(


                <tr key={index}>


                  <td className="p-3 border text-center">
                    {index+1}
                  </td>


                  <td className="p-3 border">
                    {siswa.nis}
                  </td>


                  <td className="p-3 border">
                    {siswa.nama}
                  </td>


                  <td className="p-3 border">
                    {siswa.kelas}
                  </td>


                  <td className="p-3 border">
                    {siswa.jk}
                  </td>


                  <td className="p-3 border">
                    {siswa.wali}
                  </td>


                  <td className="p-3 border text-center">


                    <button className="bg-yellow-400 px-3 py-1 rounded mr-2">

                      Edit

                    </button>



                    <button className="bg-red-500 text-white px-3 py-1 rounded">

                      Hapus

                    </button>


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