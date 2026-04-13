import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative">
      {/* Bacground */}
      <div className="bg-background relative h-180 origin-top-left skew-y-[-5deg]">
        <div className="origin-top-left skew-y-[5deg] p-10 pt-20"></div>
      </div>

      <div className="absolute inset-0 z-10 mx-auto flex max-w-400 px-20 pt-30">
        <section>
          {/* Main section */}
          <div>
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
                <div className="mb-2 flex h-12 items-end gap-2">
                  <Input placeholder="Email@example.com" className="h-full" />
                  <Button className="bg-secondary h-full w-30 cursor-pointer">
                    RSVP
                  </Button>
                </div>

                <button className="cursor-pointer text-center font-semibold underline">
                  Already have an account? Log in
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
