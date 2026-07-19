"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


export default function TambahSiswa() {


  const router = useRouter();



  const [form, setForm] = useState({

    nis: "",
    nisn: "",
    nama: "",
    jenis_kelamin: "",
    kelas: "",
    jurusan: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    alamat: "",
    no_hp: "",
    nama_ayah: "",
    pekerjaan_ayah: "",
    nama_ibu: "",
    pekerjaan_ibu: "",
    status: "Aktif",

  });





  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ){


    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });


  }







  async function simpanData(){



    const { error } = await supabase

      .from("siswa")

      .insert([form]);





    if(error){

      alert(error.message);

      return;

    }



    alert("Data siswa berhasil disimpan");


    router.push("/siswa");

    router.refresh();



  }







  return (



    <main className="min-h-screen bg-gray-100 p-8">



      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">





        <div className="flex justify-between items-center mb-6">



          <h1 className="text-3xl font-bold text-blue-700">

            Tambah Data Siswa

          </h1>




          <button

            onClick={()=>router.back()}

            className="bg-gray-600 text-white px-5 py-3 rounded-lg"

          >

            ⬅️ Kembali

          </button>



        </div>







        <div className="grid md:grid-cols-2 gap-5">






          <Input

            label="NIS"

            name="nis"

            value={form.nis}

            onChange={handleChange}

          />




          <Input

            label="NISN"

            name="nisn"

            value={form.nisn}

            onChange={handleChange}

          />





          <Input

            label="Nama Lengkap"

            name="nama"

            value={form.nama}

            onChange={handleChange}

          />






          <div>


            <label className="font-semibold">

              Jenis Kelamin

            </label>


            <select

              name="jenis_kelamin"

              value={form.jenis_kelamin}

              onChange={handleChange}

              className="border border-gray-400 rounded-lg p-3 w-full"

            >


              <option value="">

                Pilih

              </option>


              <option value="Laki-laki">

                Laki-laki

              </option>


              <option value="Perempuan">

                Perempuan

              </option>


            </select>


          </div>






          <Input

            label="Kelas"

            name="kelas"

            value={form.kelas}

            onChange={handleChange}

          />





          <Input

            label="Jurusan"

            name="jurusan"

            value={form.jurusan}

            onChange={handleChange}

          />






          <Input

            label="Tempat Lahir"

            name="tempat_lahir"

            value={form.tempat_lahir}

            onChange={handleChange}

          />






          <Input

            label="Tanggal Lahir"

            type="date"

            name="tanggal_lahir"

            value={form.tanggal_lahir}

            onChange={handleChange}

          />






          <Input

            label="Agama"

            name="agama"

            value={form.agama}

            onChange={handleChange}

          />






          <Input

            label="No HP"

            name="no_hp"

            value={form.no_hp}

            onChange={handleChange}

          />







          <div className="md:col-span-2">


            <label className="font-semibold">

              Alamat

            </label>


            <textarea

              name="alamat"

              value={form.alamat}

              onChange={handleChange}

              className="border border-gray-400 rounded-lg p-3 w-full"

              rows={3}

            />


          </div>







          <Input

            label="Nama Ayah"

            name="nama_ayah"

            value={form.nama_ayah}

            onChange={handleChange}

          />






          <Input

            label="Pekerjaan Ayah"

            name="pekerjaan_ayah"

            value={form.pekerjaan_ayah}

            onChange={handleChange}

          />







          <Input

            label="Nama Ibu"

            name="nama_ibu"

            value={form.nama_ibu}

            onChange={handleChange}

          />







          <Input

            label="Pekerjaan Ibu"

            name="pekerjaan_ibu"

            value={form.pekerjaan_ibu}

            onChange={handleChange}

          />








          <div>


            <label className="font-semibold">

              Status

            </label>


            <select

              name="status"

              value={form.status}

              onChange={handleChange}

              className="border border-gray-400 rounded-lg p-3 w-full"

            >


              <option value="Aktif">
                Aktif
              </option>


              <option value="Lulus">
                Lulus
              </option>


              <option value="Pindah">
                Pindah
              </option>


              <option value="Keluar">
                Keluar
              </option>



            </select>


          </div>





        </div>







        <button

          onClick={simpanData}

          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"

        >

          💾 Simpan Data Siswa

        </button>





      </div>



    </main>



  );


}







function Input({

label,

name,

value,

onChange,

type="text"

}:any){



return(


<div>


<label className="font-semibold">

{label}

</label>


<input

type={type}

name={name}

value={value}

onChange={onChange}

className="border border-gray-400 rounded-lg p-3 w-full"

/>


</div>


);


}