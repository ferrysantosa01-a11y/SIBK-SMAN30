export default function ProgramBK() {


  const program = [

    {
      judul: "Layanan Konseling Siswa",
      deskripsi:
        "Program pendampingan siswa melalui layanan konseling individu maupun kelompok."
    },


    {
      judul: "Monitoring Perkembangan Siswa",
      deskripsi:
        "Pemantauan perkembangan akademik, pribadi, sosial, dan kedisiplinan siswa."
    },


    {
      judul: "Bimbingan Karir",
      deskripsi:
        "Membantu siswa mengenal potensi diri dan menentukan pilihan pendidikan maupun karir."
    },


    {
      judul: "Penguatan Karakter",
      deskripsi:
        "Program pembentukan karakter positif, tanggung jawab, dan kemandirian siswa."
    }

  ];



  return (

    <section
      id="program"
      className="bg-white py-16 px-6"
    >

      <div className="max-w-6xl mx-auto">


        <h2
          className="
          text-3xl
          font-bold
          text-center
          text-blue-700
          "
        >
          Program BK
        </h2>



        <p className="text-center text-gray-600 mt-3">

          Program Bimbingan dan Konseling
          SMAN 30 Kabupaten Tangerang

        </p>




        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          mt-10
          "
        >


          {program.map((item)=>(


            <div
              key={item.judul}
              className="
              rounded-2xl
              shadow-lg
              bg-gray-50
              p-6
              "
            >


              <h3
                className="
                text-xl
                font-bold
                text-blue-700
                "
              >

                ✓ {item.judul}

              </h3>



              <p
                className="
                mt-3
                text-gray-600
                "
              >

                {item.deskripsi}

              </p>



            </div>


          ))}


        </div>


      </div>


    </section>

  );

}