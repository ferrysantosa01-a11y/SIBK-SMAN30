"use client";

import Image from "next/image";

export default function Header() {
  const today = new Date();

  const tanggal = today.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-blue-700 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Judul */}

        <div className="flex items-center gap-4">

          <Image
            src="/logo/logo-sman30.png"
            alt="Logo SMAN 30"
            width={55}
            height={55}
          />

          <Image
            src="/logo/logo-bk-sman30.png"
            alt="Logo BK"
            width={55}
            height={55}
          />

          <div>

            <h1 className="text-2xl font-bold">
              SIBK
            </h1>

            <p className="text-sm">
              Sistem Informasi Bimbingan Konseling
            </p>

            <p className="text-xs opacity-90">
              SMAN 30 Kabupaten Tangerang
            </p>

          </div>

        </div>

        {/* Informasi User */}

        <div className="text-right">

          <p className="font-semibold">
            Administrator BK
          </p>

          <p className="text-sm">
            {tanggal}
          </p>

        </div>

      </div>

    </header>
  );
}