export const dynamic = "force-dynamic";


import Link from "next/link";

import { getSiswa } from "@/services/siswaService";

import SiswaTable from "@/components/siswa/SiswaTable";

import ExportExcelButton from "@/components/siswa/ExportExcelButton";

import ExportPdfButton from "@/components/siswa/ExportPdfButton";




export default async function SiswaPage() {



  const dataSiswa = await getSiswa();






  return (



    <main className="min-h-screen bg-gray-100 p-8">



      <div className="bg-white rounded-xl shadow-lg p-6">






        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">






          <div>



            <h1 className="text-3xl font-bold text-blue-700">

              Data Siswa

            </h1>



            <p className="text-gray-500 mt-2">

              Sistem Informasi Bimbingan Konseling

              <br />

              SMAN 30 Kabupaten Tangerang

            </p>



          </div>








          <div className="flex gap-3 flex-wrap">






            <Link

              href="/dashboard"

              className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-lg"

            >

              ⬅ Kembali

            </Link>








            <Link

              href="/siswa/tambah"

              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"

            >

              + Tambah Siswa

            </Link>








            <ExportExcelButton

              data={dataSiswa}

            />








            <ExportPdfButton

              data={dataSiswa}

            />






          </div>







        </div>









        <SiswaTable

          data={dataSiswa}

        />







      </div>





    </main>



  );


}