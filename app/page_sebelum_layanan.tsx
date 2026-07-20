import Image from "next/image";
import Link from "next/link";
import GuruBK from "@/components/landing/GuruBK";


export default function Home() {

  return (

    <main className="min-h-screen bg-gray-50 text-gray-800">


      {/* NAVBAR */}

      <nav className="fixed top-0 w-full bg-white shadow-md z-50">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">


          <div className="flex items-center gap-3">

            <Image
              src="/logo/logo-sman30.png"
              alt="Logo SMAN 30"
              width={45}
              height={45}
            />


            <div>

              <h1 className="font-bold text-blue-700">
                SiBK
              </h1>

              <p className="text-xs text-gray-500">
                SMAN 30 Kabupaten Tangerang
              </p>

            </div>

          </div>



          <div className="hidden md:flex gap-5 items-center text-sm">


            <a href="#beranda">
              Beranda
            </a>


            <a href="#tentang">
              Tentang BK
            </a>


            <a href="#guru">
              Guru BK
            </a>


            <a href="#layanan">
              Layanan
            </a>


            <a href="#program">
              Program
            </a>


            <a href="#kontak">
              Kontak
            </a>



            <Link
              href="/login"
              className="
              bg-blue-600
              text-white
              px-5
              py-2
              rounded-lg
              "
            >
              Login
            </Link>


          </div>


        </div>


      </nav>





      {/* BERANDA */}

      <section
        id="beranda"
        className="
        pt-32
        pb-20
        text-center
        px-6
        "
      >


        <div className="flex justify-center gap-6 mb-8">


          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30"
            width={120}
            height={120}
            priority
          />



          <Image
            src="/logo/logo-bk-sman30.png"
            alt="Logo BK"
            width={120}
            height={120}
            priority
          />


        </div>




        <h1 className="text-5xl font-bold text-blue-700">

          SiBK

        </h1>



        <p className="text-xl mt-4">

          Sistem Informasi Bimbingan Konseling

        </p>



        <p className="font-semibold mt-2">

          SMAN 30 Kabupaten Tangerang

        </p>



        <p className="max-w-xl mx-auto mt-5 text-gray-600">

          Sistem layanan digital Bimbingan dan Konseling
          untuk membantu siswa mendapatkan pelayanan BK
          secara cepat, aman, dan terpercaya.

        </p>



        <Link
          href="/login"
          className="
          inline-block
          mt-8
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-10
          py-4
          rounded-xl
          font-semibold
          "
        >

          Masuk SiBK

        </Link>


      </section>






      {/* TENTANG BK */}

      <section
        id="tentang"
        className="bg-white py-16 px-6"
      >

        <div className="max-w-5xl mx-auto">


          <h2 className="text-3xl font-bold text-center text-blue-700">

            Tentang BK

          </h2>



          <p className="mt-6 text-center">

            Bimbingan dan Konseling membantu peserta didik
            dalam perkembangan pribadi, sosial, belajar,
            dan perencanaan karir.

          </p>


        </div>

      </section>







      {/* GURU BK */}

      <GuruBK />







      {/* LAYANAN BK */}

      <section
        id="layanan"
        className="py-16 px-6"
      >


        <h2 className="text-3xl font-bold text-center text-blue-700">

          Layanan BK

        </h2>




        <div
          className="
          max-w-5xl
          mx-auto
          grid
          md:grid-cols-4
          gap-6
          mt-10
          "
        >


          {
            [
              "Konseling Individu",
              "Konseling Akademik",
              "Bimbingan Karir",
              "Pengembangan Siswa"
            ].map((item)=>(


              <div
                key={item}
                className="
                bg-white
                shadow
                rounded-xl
                p-6
                text-center
                "
              >

                {item}

              </div>


            ))
          }


        </div>


      </section>








      {/* PROGRAM BK */}

      <section
        id="program"
        className="bg-white py-16 px-6"
      >


        <h2 className="text-3xl font-bold text-center text-blue-700">

          Program BK

        </h2>



        <div className="max-w-xl mx-auto mt-8">


          <ul className="space-y-3">


            <li>
              ✓ Layanan Konseling Siswa
            </li>


            <li>
              ✓ Monitoring Perkembangan Siswa
            </li>


            <li>
              ✓ Bimbingan Karir
            </li>


            <li>
              ✓ Penguatan Karakter
            </li>


          </ul>


        </div>


      </section>







      {/* KONTAK */}

      <section
        id="kontak"
        className="py-16 text-center px-6"
      >


        <h2 className="text-3xl font-bold text-blue-700">

          Kontak

        </h2>



        <p className="mt-5">

          SMAN 30 Kabupaten Tangerang

        </p>


      </section>







      {/* FOOTER */}

      <footer
        className="
        bg-blue-700
        text-white
        text-center
        py-5
        "
      >

        © 2026 SiBK SMAN 30 Kabupaten Tangerang

      </footer>



    </main>

  );

}