"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


interface Siswa {
  id: number;
  nama: string;
  kelas: string | null;
}


export default function FormKonseling() {

  const router = useRouter();


  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);


  const [daftarSiswa, setDaftarSiswa] = useState<Siswa[]>([]);


  const [tanggal, setTanggal] = useState("");

  const [siswaId, setSiswaId] = useState("");

  const [kelas, setKelas] = useState("");


  const [jenis, setJenis] = useState("Individu");

  const [permasalahan, setPermasalahan] = useState("");

  const [hasil, setHasil] = useState("");

  const [tindakLanjut, setTindakLanjut] = useState("");

  const [status, setStatus] = useState("Proses");



  useEffect(() => {

    loadSiswa();

  }, []);




  async function loadSiswa() {

    const { data, error } = await supabase
      .from("siswa")
      .select("id,nama,kelas")
      .order("nama");


    if (error) {

      alert(error.message);

      setLoading(false);

      return;

    }


    setDaftarSiswa(data ?? []);

    setLoading(false);

  }




  function pilihSiswa(id: string) {

    setSiswaId(id);


    const siswa = daftarSiswa.find(
      (item) => item.id === Number(id)
    );


    setKelas(siswa?.kelas ?? "");

  }




  async function simpanData() {


    if (!tanggal) {

      alert("Tanggal konseling belum dipilih");

      return;

    }


    if (!siswaId) {

      alert("Silakan pilih siswa");

      return;

    }


    if (!permasalahan.trim()) {

      alert("Permasalahan belum diisi");

      return;

    }


    setSaving(true);



    const { error } = await supabase
      .from("konseling")
      .insert({

        siswa_id: Number(siswaId),

        tanggal,

        jenis,

        permasalahan,

        hasil,

        tindak_lanjut: tindakLanjut,

        status,

      });



    setSaving(false);



    if (error) {

      alert(error.message);

      return;

    }



    alert("Data konseling berhasil disimpan");


    router.push("/konseling");

    router.refresh();

  }



  if (loading) {

    return (

      <main className="p-8 text-center">

        Memuat data siswa...

      </main>

    );

  }



  return (

    <main className="max-w-4xl mx-auto p-6">
         <div className="bg-white rounded-xl shadow p-6">


        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Tambah Data Konseling
        </h1>



        <div className="space-y-5">



          <div>

            <label className="block font-medium mb-2">
              Tanggal Konseling
            </label>


            <input
              type="date"
              value={tanggal}
              onChange={(e) =>
                setTanggal(e.target.value)
              }
              className="w-full border rounded-lg p-2"
            />

          </div>




          <div>

            <label className="block font-medium mb-2">
              Nama Siswa
            </label>


            <select
              value={siswaId}
              onChange={(e) =>
                pilihSiswa(e.target.value)
              }
              className="w-full border rounded-lg p-2"
            >

              <option value="">
                -- Pilih Siswa --
              </option>


              {daftarSiswa.map((siswa) => (

                <option
                  key={siswa.id}
                  value={siswa.id}
                >

                  {siswa.nama}

                </option>

              ))}


            </select>

          </div>




          <div>

            <label className="block font-medium mb-2">
              Kelas
            </label>


            <input

              type="text"

              value={kelas}

              readOnly

              className="w-full border rounded-lg p-2 bg-gray-100"

            />

          </div>




          <div>

            <label className="block font-medium mb-2">
              Jenis Konseling
            </label>



            <select

              value={jenis}

              onChange={(e) =>
                setJenis(e.target.value)
              }

              className="w-full border rounded-lg p-2"

            >


              <option value="Individu">
                Individu
              </option>


              <option value="Kelompok">
                Kelompok
              </option>


            </select>


          </div>




          <div>

            <label className="block font-medium mb-2">
              Permasalahan
            </label>


            <textarea

              rows={4}

              value={permasalahan}

              onChange={(e) =>
                setPermasalahan(e.target.value)
              }

              className="w-full border rounded-lg p-2"

            />


          </div>
            <div>

            <label className="block font-medium mb-2">
              Hasil Konseling
            </label>


            <textarea

              rows={4}

              value={hasil}

              onChange={(e) =>
                setHasil(e.target.value)
              }

              className="w-full border rounded-lg p-2"

            />


          </div>




          <div>

            <label className="block font-medium mb-2">
              Tindak Lanjut
            </label>


            <textarea

              rows={4}

              value={tindakLanjut}

              onChange={(e) =>
                setTindakLanjut(e.target.value)
              }

              className="w-full border rounded-lg p-2"

            />


          </div>




          <div>

            <label className="block font-medium mb-2">
              Status
            </label>


            <select

              value={status}

              onChange={(e) =>
                setStatus(e.target.value)
              }

              className="w-full border rounded-lg p-2"

            >

              <option value="Proses">
                Proses
              </option>


              <option value="Selesai">
                Selesai
              </option>


            </select>


          </div>
            <div className="flex justify-end gap-3 pt-6">


            <button

              type="button"

              onClick={() =>
                router.push("/konseling")
              }

              className="px-5 py-2 rounded-lg border hover:bg-gray-100"

            >

              Batal

            </button>




            <button

              type="button"

              onClick={simpanData}

              disabled={saving}

              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"

            >

              {saving
                ? "Menyimpan..."
                : "Simpan Data"}

            </button>


          </div>




        </div>


      </div>


    </main>

  );

}
