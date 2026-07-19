import BackButton from "@/components/navigation/BackButton";
import PrintButton from "@/components/siswa/PrintButton";
import { getSiswaById } from "@/services/siswaService";

type Props = {
  params: {
    id: string;
  };
};

export default async function CetakSiswa({ params }: Props) {
  const siswa = await getSiswaById(Number(params.id));

  if (!siswa) {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-2xl font-bold text-red-600">
            Data siswa tidak ditemukan
          </h1>

          <div className="mt-5">
            <BackButton />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Biodata Siswa
          </h1>

          <BackButton />
        </div>

        <div className="border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Data Pribadi
          </h2>

          <p><b>NIS :</b> {siswa.nis}</p>
          <p><b>NISN :</b> {siswa.nisn ?? "-"}</p>
          <p><b>Nama :</b> {siswa.nama}</p>
          <p><b>Jenis Kelamin :</b> {siswa.jenis_kelamin ?? "-"}</p>
          <p><b>Kelas :</b> {siswa.kelas ?? "-"}</p>
          <p><b>Jurusan :</b> {siswa.jurusan ?? "-"}</p>
          <p><b>Tempat Lahir :</b> {siswa.tempat_lahir ?? "-"}</p>
          <p><b>Tanggal Lahir :</b> {siswa.tanggal_lahir ?? "-"}</p>
          <p><b>Agama :</b> {siswa.agama ?? "-"}</p>
          <p><b>Alamat :</b> {siswa.alamat ?? "-"}</p>
          <p><b>No HP :</b> {siswa.no_hp ?? "-"}</p>
        </div>

        <div className="border rounded-lg p-6 space-y-3 mt-6">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Data Orang Tua
          </h2>

          <p><b>Nama Ayah :</b> {siswa.nama_ayah ?? "-"}</p>
          <p><b>Pekerjaan Ayah :</b> {siswa.pekerjaan_ayah ?? "-"}</p>
          <p><b>Nama Ibu :</b> {siswa.nama_ibu ?? "-"}</p>
          <p><b>Pekerjaan Ibu :</b> {siswa.pekerjaan_ibu ?? "-"}</p>
        </div>

        <div className="border rounded-lg p-6 mt-6">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Status Siswa
          </h2>

          <p><b>Status :</b> {siswa.status ?? "-"}</p>
        </div>

        <div className="mt-6">
          <PrintButton />
        </div>
      </div>
    </main>
  );
}