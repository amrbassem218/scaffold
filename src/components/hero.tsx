import Image from "next/image";
import Rsvp from "./rsvp";
import Marquee from "react-fast-marquee";
import ComingSoon from "./comingSoon";
type Props = object;

function Hero({}: Props) {
  let logoList = [
    {
      name: "aws",
      src: "aws.png",
      width: 60,
      height: 40,
    },
    {
      name: "chatgpt",
      src: "chatgpt.png",
      width: 46,
      height: 47,
    },
    {
      name: "claude",
      src: "claude.png",
      width: 269,
      height: 81,
    },
    {
      name: "gemini",
      src: "gemini.png",
      width: 126,
      height: 43,
    },
    { name: "spotify", src: "spotify.png", width: 60, height: 40 },
    { name: "netflix", src: "netflix.png", width: 257, height: 113 },
    { name: "hulu", src: "hulu.png", width: 147, height: 118 },
  ];
  return (
    <div className="relative">
      {/* Bacground */}
      <div className="bg-background relative h-180 origin-top-left skew-y-[-3deg]">
        <div className="origin-top-left skew-y-[3deg] p-10 pt-20"></div>
      </div>

      {/* Here is how it works */}
      <div className="absolute bottom-17 w-full skew-y-[-3deg]">
        <Marquee>
          <div className="flex items-center justify-center">
            {[
              ...logoList,
              ...logoList,
              ...logoList,
              ...logoList,
              ...logoList,
              ...logoList,
            ].map((logo) => (
              <Image
                src={`/logos/${logo.src}`}
                alt={`${logo.name} logo`}
                className=""
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </Marquee>
        <h2 className="text-primary absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-3 text-5xl">
          Here is how it works!
        </h2>
      </div>

      {/* Main hero */}
      <div className="absolute inset-0 z-10 mx-auto flex max-w-400 px-20 pt-30">
        <section>
          {/* Main section */}
          <div className="flex justify-between gap-60">
            {/* Left part */}
            <div className="space-y-4">
              {/* Catch Phrase */}
              <div className="text-primary space-y-1">
                <span className="text-sm">Welcome to Scaffold,</span>
                <h2 className="text-5xl">
                  Build any Service <br /> Get 1yr Subscription for it
                </h2>
              </div>

              {/* RSVP */}
              <div className="flex w-full flex-col justify-center">
                <span className="text-text/90 text-sm">
                  For ages 13 to 18. Starts Jul 31st, 2026
                </span>
                <Rsvp />
                <ComingSoon>
                  <span>
                    <button className="cursor-pointer text-center font-semibold underline">
                      Already have an account? Log in
                    </button>
                  </span>
                </ComingSoon>
              </div>
            </div>

            {/* Right part */}
            <div>
              <div className="border-secondary h-45 w-80">
                <span className="text-xs">supposed to be a trailer</span>
                <iframe
                  width="448"
                  height="252"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Xp6XrTWgye9bbmiU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
