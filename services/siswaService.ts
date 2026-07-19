import { supabase } from "@/lib/supabase";
import { Siswa } from "@/types/siswa";

/**
 * Ambil seluruh data siswa
 */
export async function getSiswa(): Promise<Siswa[]> {
  const { data, error } = await supabase
    .from("siswa")
    .select("*")
    .order("nama", { ascending: true });

  if (error) {
    console.error("getSiswa:", error.message);
    return [];
  }

  return (data ?? []) as Siswa[];
}

/**
 * Ambil satu siswa berdasarkan ID
 */
export async function getSiswaById(id: number): Promise<Siswa | null> {
  const { data, error } = await supabase
    .from("siswa")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("getSiswaById:", error.message);
    return null;
  }

  return data as Siswa;
}

/**
 * Tambah data siswa
 */
export async function createSiswa(
  siswa: Partial<Siswa>
): Promise<boolean> {
  const { error } = await supabase
    .from("siswa")
    .insert([siswa]);

  if (error) {
    console.error("createSiswa:", error.message);
    return false;
  }

  return true;
}

/**
 * Update data siswa
 */
export async function updateSiswa(
  id: number,
  siswa: Partial<Siswa>
): Promise<boolean> {
  const { error } = await supabase
    .from("siswa")
    .update(siswa)
    .eq("id", id);

  if (error) {
    console.error("updateSiswa:", error.message);
    return false;
  }

  return true;
}

/**
 * Hapus data siswa
 */
export async function deleteSiswa(
  id: number
): Promise<boolean> {
  const { error } = await supabase
    .from("siswa")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("deleteSiswa:", error.message);
    return false;
  }

  return true;
}