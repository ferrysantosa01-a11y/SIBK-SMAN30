"use client";

import { supabase } from "@/lib/supabase";

type DeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  async function handleDelete() {
    const konfirmasi = confirm(
      "Apakah Anda yakin ingin menghapus data siswa ini?"
    );

    if (!konfirmasi) return;

    const { error } = await supabase
      .from("siswa")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Gagal menghapus data: " + error.message);
      return;
    }

    alert("Data siswa berhasil dihapus.");

    window.location.reload();
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
    >
      🗑 Hapus
    </button>
  );
}