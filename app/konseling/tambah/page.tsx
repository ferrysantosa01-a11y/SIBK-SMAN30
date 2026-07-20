"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface Siswa {
  id: number;
  nama: string;
  kelas: string | null;
}

export default function TambahKonseling() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [daftarSiswa, setDaftarSiswa] = useState<Siswa[]>([]);

  const [tanggal, setTanggal] = useState(
    new Date().toISOString().split("T")[0]
  );

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

    const data = daftarSiswa.find(
      (item) => item.id === Number(id)
    );

    setKelas(data?.kelas ?? "");
  }

  async function simpanData() {
    if (!tanggal) {
      alert("Tanggal konseling belum dipilih.");
      return;
    }

    if (!siswaId) {
      alert("Silakan pilih siswa.");
      return;
    }

    if (!permasalahan.trim()) {
      alert("Permasalahan wajib diisi.");
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

    alert("Data konseling berhasil disimpan.");

    router.push("/konseling");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="p-8">
        <div className="rounded-xl border bg-white p-6 shadow">
          Memuat data siswa...
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6">

      <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">

        <div className="bg-blue-700 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Input Konseling Siswa
          </h1>
          <p className="text-blue-100 text-sm mt-1">
            Tambahkan data konseling siswa.
          </p>
        </div>

        <div className="p-6 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Tanggal Konseling
              </label>

              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full rounded-lg border px-4 py-2"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Nama Siswa
              </label>

              <select
                value={siswaId}
                onChange={(e) => pilihSiswa(e.target.value)}
                className="w-full rounded-lg border px-4 py-2"
              >

                <option value="">
                  -- Pilih Siswa --
                </option>

                {daftarSiswa.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.nama}
                  </option>
                ))}
                    </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Kelas
              </label>

              <input
                type="text"
                value={kelas}
                readOnly
                className="w-full rounded-lg border bg-gray-100 px-4 py-2"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Jenis Konseling
              </label>

              <div className="flex gap-6 mt-2">

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="jenis"
                    checked={jenis === "Individu"}
                    onChange={() => setJenis("Individu")}
                  />
                  Individu
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="jenis"
                    checked={jenis === "Kelompok"}
                    onChange={() => setJenis("Kelompok")}
                  />
                  Kelompok
                </label>

              </div>

            </div>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Permasalahan
            </label>

            <textarea
              rows={5}
              value={permasalahan}
              onChange={(e) => setPermasalahan(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Tuliskan permasalahan siswa..."
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Hasil Konseling
            </label>

            <textarea
              rows={5}
              value={hasil}
              onChange={(e) => setHasil(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Tuliskan hasil konseling..."
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Tindak Lanjut
            </label>

            <textarea
              rows={5}
              value={tindakLanjut}
              onChange={(e) => setTindakLanjut(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Tuliskan tindak lanjut..."
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-lg border px-4 py-2"
              >

                <option value="Proses">
                  Proses
                </option>

                <option value="Selesai">
                  Selesai
                </option>

              </select>

            </div>
             <div className="flex items-end justify-end gap-3">

              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-lg border border-gray-300 px-6 py-2 font-medium hover:bg-gray-100 transition"
              >
                ← Kembali
              </button>

              <button
                type="button"
                onClick={simpanData}
                disabled={saving}
                className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition"
              >
                {saving ? "Menyimpan..." : "💾 Simpan"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}