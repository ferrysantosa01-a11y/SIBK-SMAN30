"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


interface Siswa {
  id: number;
  nama: string;
  kelas: string;
}


export default function TambahKonselingPage() {

  const router = useRouter();


  const [siswa, setSiswa] = useState<Siswa[]>([]);
  const [loading, setLoading] = useState(true);


  const [form, setForm] = useState({
    siswa_id: "",
    tanggal: "",
    jenis: "",
    permasalahan: "",
    hasil: "",
    tindak_lanjut: "",
    status: "Proses",
  });



  useEffect(() => {

    loadSiswa();

  }, []);




  async function loadSiswa() {

    try {

      const { data, error } = await supabase
        .from("siswa")
        .select("id,nama,kelas")
        .order("nama");


      if (error) throw error;


      setSiswa(data || []);


    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }




  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }





  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    const { error } = await supabase
      .from("konseling")
      .insert({

        siswa_id: Number(form.siswa_id),

        tanggal: form.tanggal,

        jenis: form.jenis,

        permasalahan: form.permasalahan,

        hasil: form.hasil,

        tindak_lanjut: form.tindak_lanjut,

        status: form.status,

      });



    if (error) {

      alert(error.message);

      return;

    }



    alert("Data konseling berhasil disimpan");


    router.push("/konseling");


  }





  return (

    <main className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">


        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Tambah Konseling
        </h1>



        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >



          <div>

            <label className="block font-semibold mb-2">
              Siswa
            </label>


            <select
              name="siswa_id"
              value={form.siswa_id}
              onChange={handleChange}
              className="w-full border rounded p-3"
              required
            >

              <option value="">
                Pilih Siswa
              </option>


              {siswa.map((item)=>(

                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.nama} - {item.kelas}
                </option>

              ))}


            </select>

          </div>





          <div>

            <label className="block font-semibold mb-2">
              Tanggal
            </label>


            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="w-full border rounded p-3"
              required
            />

          </div>





          <div>

            <label className="block font-semibold mb-2">
              Jenis Konseling
            </label>


            <select
              name="jenis"
              value={form.jenis}
              onChange={handleChange}
              className="w-full border rounded p-3"
              required
            >

              <option value="">
                Pilih Jenis
              </option>

              <option value="Pribadi">
                Pribadi
              </option>

              <option value="Sosial">
                Sosial
              </option>

              <option value="Belajar">
                Belajar
              </option>

              <option value="Karir">
                Karir
              </option>


            </select>


          </div>





          <div>

            <label className="block font-semibold mb-2">
              Permasalahan
            </label>


            <textarea
              name="permasalahan"
              value={form.permasalahan}
              onChange={handleChange}
              className="w-full border rounded p-3"
              rows={4}
              required
            />

          </div>





          <div>

            <label className="block font-semibold mb-2">
              Hasil Konseling
            </label>


            <textarea
              name="hasil"
              value={form.hasil}
              onChange={handleChange}
              className="w-full border rounded p-3"
              rows={4}
            />

          </div>





          <div>

            <label className="block font-semibold mb-2">
              Tindak Lanjut
            </label>


            <textarea
              name="tindak_lanjut"
              value={form.tindak_lanjut}
              onChange={handleChange}
              className="w-full border rounded p-3"
              rows={3}
            />

          </div>





          <div>

            <label className="block font-semibold mb-2">
              Status
            </label>


            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border rounded p-3"
            >

              <option value="Proses">
                Proses
              </option>


              <option value="Selesai">
                Selesai
              </option>


            </select>

          </div>





          <div className="flex gap-3">


            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded"
            >
              Simpan
            </button>


            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-3 rounded"
            >
              Kembali
            </button>


          </div>



        </form>


      </div>


    </main>

  );

}