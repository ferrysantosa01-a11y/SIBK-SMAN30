export default function LayananBK() {


  const layanan = [

    {
      judul: "Konseling Individu",
      deskripsi:
        "Layanan pendampingan pribadi untuk membantu siswa menyelesaikan permasalahan secara aman dan rahasia."
    },


    {
      judul: "Konseling Akademik",
      deskripsi:
        "Membantu siswa dalam mengembangkan kebiasaan belajar dan meningkatkan prestasi akademik."
    },


    {
      judul: "Bimbingan Karir",
      deskripsi:
        "Mendampingi siswa dalam mengenal potensi diri dan menentukan rencana masa depan."
    },


    {
      judul: "Pengembangan Siswa",
      deskripsi:
        "Membantu perkembangan karakter, sosial, dan keterampilan siswa."
    }

  ];



  return (

    <section
      id="layanan"
      className="py-16 px-6"
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
          Layanan BK
        </h2>


        <p className="text-center text-gray-600 mt-3">
          Layanan Bimbingan dan Konseling
          SMAN 30 Kabupaten Tangerang
        </p>




        <div
          className="
          grid
          md:grid-cols-4
          gap-6
          mt-10
          "
        >


          {layanan.map((item)=>(


            <div
              key={item.judul}
              className="
              bg-white
              rounded-2xl
              shadow-lg
              p-6
              hover:shadow-xl
              transition
              "
            >


              <div
                className="
                text-blue-600
                text-3xl
                mb-4
                "
              >
                ✓
              </div>


              <h3
                className="
                font-bold
                text-lg
                "
              >
                {item.judul}
              </h3>



              <p
                className="
                text-gray-600
                text-sm
                mt-3
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