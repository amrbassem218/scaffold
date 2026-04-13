import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Rsvp from "./rsvp";

type Props = object;

function Hero({}: Props) {
  return (
    <div className="relative">
      {/* Bacground */}
      <div className="bg-background relative h-180 origin-top-left skew-y-[-3deg]">
        <div className="origin-top-left skew-y-[3deg] p-10 pt-20"></div>
      </div>

      <div>
        <Image
          src={"/subscription line 2.svg"}
          alt="subscription line.png"
          className="absolute -bottom-10 rotate-1"
          width={2500}
          height={11}
        />
        <h2 className="text-primary absolute bottom-22 left-1/2 -translate-x-1/2 -rotate-3 text-5xl">
          Here is how it works!
        </h2>
      </div>
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
                <button className="cursor-pointer text-center font-semibold underline">
                  Already have an account? Log in
                </button>
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
