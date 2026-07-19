"use client";

export default function DeleteButton() {

  function handleDelete() {
    alert("Data siswa berhasil dihapus");
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