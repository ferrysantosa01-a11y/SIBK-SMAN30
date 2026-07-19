import Image from "next/image";


export default function LoginPage() {

  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">


        <div className="flex justify-center gap-5 mb-6">


          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30"
            width={90}
            height={90}
          />


          <Image
            src="/logo/logo-bk-sman30.png"
            alt="Logo BK SMAN 30"
            width={90}
            height={90}
          />


        </div>



        <h1 className="text-3xl font-bold text-center text-blue-700">
          Login SIBK
        </h1>


        <p className="text-center text-gray-500 mt-2">
          SMAN 30 Kabupaten Tangerang
        </p>




        <div className="mt-8">

          <label className="block mb-2">
            Username
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Masukkan username"
          />

        </div>




        <div className="mt-5">

          <label className="block mb-2">
            Password
          </label>

          <input
            type="password"
            className="w-full border rounded-lg p-3"
            placeholder="Masukkan password"
          />

        </div>




        <button
          className="
          w-full
          mt-8
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-lg
          font-semibold
          "
        >
          Masuk
        </button>



      </div>


    </main>

  );

}