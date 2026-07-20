"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Konseling {
  id: number;
  tanggal: string;
  jenis: string;
  permasalahan: string;
  hasil: string | null;
  tindak_lanjut: string | null;
  status: string;

  siswa: {
    nama: string;
    kelas: string;
  };
}

export default function KonselingPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Konseling[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data, error } = await supabase
      .from("konseling")
      .select(`
        id,
        tanggal,
        jenis,
        permasalahan,
        hasil,
        tindak_lanjut,
        status,
        siswa (
          nama,
          kelas
        )
      `)
      .order("tanggal", { ascending: false });

    if (error) {
      console.log(error);
      alert(error.message);
      setLoading(false);
      return;
    }

    setData((data as any) ?? []);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="p-8">
        Memuat data konseling...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-xl shadow-lg p-6">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h1 className="text-3xl font-bold text-blue-700">
              Konseling Individu
            </h1>

            <p className="text-gray-500">
              Data Konseling Siswa
            </p>

          </div>

          <Link
            href="/konseling/tambah"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            + Tambah Konseling
          </Link>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full border">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="border p-3">No</th>

                <th className="border p-3">Tanggal</th>

                <th className="border p-3">Nama</th>

                <th className="border p-3">Kelas</th>

                <th className="border p-3">Jenis</th>

                <th className="border p-3">Permasalahan</th>

                <th className="border p-3">Status</th>

              </tr>

            </thead>

            <tbody>

              {data.length == 0 && (

                <tr>

                  <td
                    colSpan={7}
                    className="border p-6 text-center text-gray-500"
                  >
                    Belum ada data konseling
                  </td>

                </tr>

              )}

              {data.map((item, index) => (

                <tr key={item.id}>

                  <td className="border p-3 text-center">
                    {index + 1}
                  </td>

                  <td className="border p-3">
                    {item.tanggal}
                  </td>

                  <td className="border p-3">
                    {item.siswa?.nama}
                  </td>

                  <td className="border p-3">
                    {item.siswa?.kelas}
                  </td>

                  <td className="border p-3">
                    {item.jenis}
                  </td>

                  <td className="border p-3">
                    {item.permasalahan}
                  </td>

                  <td className="border p-3 text-center">
                    {item.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
