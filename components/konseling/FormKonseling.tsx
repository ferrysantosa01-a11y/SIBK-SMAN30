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
        Memuat data siswa...
      </main>
    );
  }
  