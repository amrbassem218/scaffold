import Image from "next/image";
import Marquee from "react-fast-marquee";

type Props = {};

function Prizes({}: Props) {
  const prizes = [
    {
      name: "Aws $10 credits",
      src: "aws.svg",
      equivalent_hrs: 3,
    },
    {
      name: "Chatgpt pro ($20 credits)",
      src: "chatgpt.png",
      equivalent_hrs: 5,
    },
    {
      name: "Claude Pro ($17 credits)",
      src: "claude.png",
      equivalent_hrs: 4,
    },
    {
      name: "Gemini Pro ($13 credits)",
      src: "gemini.png",
      equivalent_hrs: 3,
    },
    {
      name: "cloudflare $10 credits",
      src: "cloudflare.png",
      equivalent_hrs: 3,
    },
    {
      name: "spotify premium (~$12 credits)",
      src: "spotify.png",

      equivalent_hrs: 3,
    },
    {
      name: "netflix standard (~$20 credits)",
      src: "netflix.png",

      equivalent_hrs: 5,
    },
    {
      name: "hulu add-free ($19 credits)",
      src: "hulu.png",
      equivalent_hrs: 5,
    },
  ];
  return (
    <div className="mb-16 space-y-6">
      <h2 className="text-primary text-center text-4xl font-semibold">
        Prizes
      </h2>
      <div className="-rotate-3">
        <Marquee>
          <div className="flex w-full items-center gap-2">
            {[
              ...prizes,
              ...prizes,
              ...prizes,
              ...prizes,
              ...prizes,
              ...prizes,
            ].map((prize) => (
              <div className="border-secondary flex h-40 w-60 flex-col items-center gap-2 rounded-md border-2 bg-[url(/checkered_1.png)] bg-center p-2">
                <div className="bg-background border-primary flex h-16 w-full rounded-md border-2 p-2">
                  <div className="relative flex-1">
                    <Image
                      src={`/prizes/${prize.src}`}
                      alt={`${prize.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-center text-lg font-semibold">
                  {prize.name}
                </span>
                <span className="text-text/60">
                  ~{prize.equivalent_hrs} hours
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Prizes;
