"use client";

export default function PrintButton() {

  return (
    <button
      onClick={() => window.print()}
      className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-lg"
    >
      🖨 Cetak
    </button>
  );

}