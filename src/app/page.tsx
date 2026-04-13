import Image from "next/image";
import Faq from "~/components/faq";
import Hero from "~/components/hero";
import Stages from "~/components/stages";

export default function HomePage() {
  return (
    <main className="bg-background relative pb-5">
      {/* Header */}
      <div>
        {/* Logo */}
        <div className="absolute top-0 left-1/2 z-[100] -translate-x-1/2">
          <Image src={"/logo.png"} alt="logo" width={200} height={50} />
        </div>

        {/* Header stripes */}
        <div className="relative z-50 mt-5 flex h-17 w-full scale-150 items-center bg-[url(/header_strip.png)] bg-center bg-repeat p-0"></div>
      </div>

      {/* Hero */}
      <Hero />
      <Stages />
      <Faq />
      <footer className="text-center">
        <span>
          Made with Love by{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/amrbassem218"
          >
            Amr
          </a>
        </span>
      </footer>
    </main>
  );
}
