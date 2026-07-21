"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


export default function EditKonselingPage() {

  const params = useParams();
  const router = useRouter();

  const id = params.id as string;


  const [loading, setLoading] = useState(true);


  const [form, setForm] = useState({
    tanggal: "",
    jenis: "",
    permasalahan: "",
    hasil: "",
    tindak_lanjut: "",
    status: "Proses",
  });




  useEffect(() => {

    loadData();

  }, []);





  async function loadData() {

    try {


      const { data, error } = await supabase

        .from("konseling")

        .select("*")

        .eq("id", id)

        .single();



      if (error) throw error;



      setForm({

        tanggal: data.tanggal || "",

        jenis: data.jenis || "",

        permasalahan: data.permasalahan || "",

        hasil: data.hasil || "",

        tindak_lanjut: data.tindak_lanjut || "",

        status: data.status || "Proses",

      });



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

      .update({

        tanggal: form.tanggal,

        jenis: form.jenis,

        permasalahan: form.permasalahan,

        hasil: form.hasil,

        tindak_lanjut: form.tindak_lanjut,

        status: form.status,

      })

      .eq("id", id);




    if (error) {


      alert(error.message);

      return;


    }



    alert("Data konseling berhasil diperbarui");



    router.push(`/konseling/${id}`);


  }






  if (loading) {

    return (

      <main className="p-6">

        Memuat data...

      </main>

    );

  }






  return (

    <main className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">


        <h1 className="text-2xl font-bold text-blue-700 mb-6">

          Edit Konseling

        </h1>




        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >




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

              rows={4}

              className="w-full border rounded p-3"

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

              rows={4}

              className="w-full border rounded p-3"

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

              rows={3}

              className="w-full border rounded p-3"

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

              Simpan Perubahan

            </button>




            <button

              type="button"

              onClick={() => router.back()}

              className="bg-gray-500 text-white px-5 py-3 rounded"

            >

              Kembali

            </button>


          </div>




        </form>


      </div>


    </main>

  );

}