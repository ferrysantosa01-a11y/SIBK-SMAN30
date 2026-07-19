export interface Siswa {
  id: number;
  nis: string;
  nisn: string | null;
  nama: string;
  jenis_kelamin: string | null;
  kelas: string | null;
  jurusan: string | null;
  tempat_lahir: string | null;
  tanggal_lahir: string | null;
  agama: string | null;
  alamat: string | null;
  no_hp: string | null;
  nama_ayah: string | null;
  nama_ibu: string | null;
  pekerjaan_ayah: string | null;
  pekerjaan_ibu: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}