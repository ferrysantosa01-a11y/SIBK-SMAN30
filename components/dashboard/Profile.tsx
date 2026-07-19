import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex items-center gap-3">

      <Image
        src="/profile/ferry.png"
        alt="Foto Ferry Santosa"
        width={55}
        height={55}
        className="rounded-full border-2 border-white"
      />

      <div>
        <h3 className="text-white font-bold">
          Ferry Santosa
        </h3>

        <p className="text-blue-100 text-sm">
          Administrator SIBK
        </p>
      </div>

    </div>
  );
}