"use client";

import { useState } from "react";

export interface SiswaFormData {
  nis: string;
  nisn: string;
  nama: string;
  jenis_kelamin: string;
  kelas: string;
  jurusan: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: string;
  alamat: string;
  no_hp: string;
  nama_ayah: string;
  nama_ibu: string;
  pekerjaan_ayah: string;
  pekerjaan_ibu: string;
  status: string;
}

interface Props {
  initialData?: Partial<SiswaFormData>;
  submitText: string;
  onSubmit: (data: SiswaFormData) => void | Promise<void>;
}

export default function SiswaForm({
  initialData = {},
  submitText,
  onSubmit,
}: Props) {
  const [form, setForm] = useState<SiswaFormData>({
    nis: initialData.nis ?? "",
    nisn: initialData.nisn ?? "",
    nama: initialData.nama ?? "",
    jenis_kelamin: initialData.jenis_kelamin ?? "",
    kelas: initialData.kelas ?? "",
    jurusan: initialData.jurusan ?? "",
    tempat_lahir: initialData.tempat_lahir ?? "",
    tanggal_lahir: initialData.tanggal_lahir ?? "",
    agama: initialData.agama ?? "",
    alamat: initialData.alamat ?? "",
    no_hp: initialData.no_hp ?? "",
    nama_ayah: initialData.nama_ayah ?? "",
    nama_ibu: initialData.nama_ibu ?? "",
    pekerjaan_ayah: initialData.pekerjaan_ayah ?? "",
    pekerjaan_ibu: initialData.pekerjaan_ibu ?? "",
    status: initialData.status ?? "Aktif",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={submit} className="space-y-5">

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="nis"
          placeholder="NIS"
          value={form.nis}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          name="nisn"
          placeholder="NISN"
          value={form.nisn}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <input
        name="nama"
        placeholder="Nama Lengkap"
        value={form.nama}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full"
        required
      />

      <div className="grid md:grid-cols-2 gap-4">

        <select
          name="jenis_kelamin"
          value={form.jenis_kelamin}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <input
          name="kelas"
          placeholder="Kelas"
          value={form.kelas}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="jurusan"
          placeholder="Jurusan"
          value={form.jurusan}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="agama"
          placeholder="Agama"
          value={form.agama}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="tempat_lahir"
          placeholder="Tempat Lahir"
          value={form.tempat_lahir}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          name="tanggal_lahir"
          value={form.tanggal_lahir}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <textarea
        name="alamat"
        placeholder="Alamat"
        value={form.alamat}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full"
        rows={3}
      />

      <input
        name="no_hp"
        placeholder="Nomor HP"
        value={form.no_hp}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full"
      />

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="nama_ayah"
          placeholder="Nama Ayah"
          value={form.nama_ayah}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="pekerjaan_ayah"
          placeholder="Pekerjaan Ayah"
          value={form.pekerjaan_ayah}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="nama_ibu"
          placeholder="Nama Ibu"
          value={form.nama_ibu}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="pekerjaan_ibu"
          placeholder="Pekerjaan Ibu"
          value={form.pekerjaan_ibu}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full"
      >
        <option value="Aktif">Aktif</option>
        <option value="Lulus">Lulus</option>
        <option value="Pindah">Pindah</option>
        <option value="Keluar">Keluar</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold"
      >
        {submitText}
      </button>

    </form>
  );
}