import Image from "next/image";
import Link from "next/link";
import Hero from "~/components/hero";

export default function HomePage() {
  return (
    <main className="relative h-screen bg-green-500">
      {/* Header */}
      <div>
        {/* Logo */}
        <div className="absolute top-0 left-1/2 z-[100] -translate-x-1/2">
          <Image src={"/logo.png"} alt="logo" width={200} height={50} />
        </div>

        {/* Header stripes */}
        <div className="relative z-50 mt-5 flex h-17 w-full scale-150 items-center bg-[url(/header_strip.png)] bg-center bg-repeat"></div>
      </div>

      {/* Hero */}
      <Hero />
    </main>
  );
}
