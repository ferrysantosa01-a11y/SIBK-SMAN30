export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            SIBK
          </h1>
          <p className="text-sm">
            Sistem Informasi Bimbingan Konseling
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            SMAN 30 Kabupaten Tangerang
          </p>
          <p className="text-sm">
            Administrator
          </p>
        </div>
      </div>
    </header>
  );
}