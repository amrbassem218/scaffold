import Image from "next/image";

type Props = {};

function Stages({}: Props) {
  return (
    <div className="relative">
      {/* Background */}
      <div className="bg-primary relative h-150 origin-top-left skew-y-[-3deg]">
        <div className="origin-top-left -skew-y-[-3deg] p-10 pt-20"></div>
      </div>

      <div className="absolute inset-0 z-10 mx-auto mt-10 flex w-full max-w-400 justify-between rounded-md">
        {/* Build Card */}
        <div className="relative h-133 w-112 bg-[url(/checkered_1.png)] bg-cover p-5">
          <Image
            src={"/build.png"}
            alt="build a project"
            width={400}
            height={250}
          />
          <div className="bg-primary absolute bottom-20 -left-10 flex h-20 w-130 items-center rounded-md border p-0">
            <span className="text-background absolute top-1/2 left-1/2 z-[100] w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl text-nowrap">
              Build an amazing Project!
            </span>
            <Image
              src={"/light.png"}
              alt="light"
              width={350}
              height={90}
              className="mx-auto h-full"
            />
          </div>
          <span className="absolute bottom-5 mx-7 text-center">
            Make a website, mobile app, game, hardware or anything, as long as
            it’s service.
          </span>
        </div>

        {/* ship Card */}
        <div className="relative bottom-15 mb-10 h-133 w-112 bg-[url(/checkered_1.png)] bg-cover p-5">
          <Image
            src={"/ship.png"}
            alt="build a project"
            width={400}
            height={250}
          />
          <div className="bg-secondary absolute bottom-20 -left-10 flex h-20 w-130 items-center rounded-md border p-0">
            <span className="text-background absolute top-1/2 left-1/2 z-[100] w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl text-nowrap">
              Ship the project!
            </span>
            <Image
              src={"/light.png"}
              alt="light"
              width={350}
              height={90}
              className="mx-auto h-full"
            />
          </div>
          <span className="absolute bottom-5 mx-7 text-center">
            Share your project with the rest of the hackers so they can vote
          </span>
        </div>

        {/* Get Stuff Card */}
        <div className="relative h-133 w-112 bg-[url(/checkered_1.png)] bg-cover p-5">
          <Image
            src={"/get_stuff.jpg"}
            alt="build a project"
            width={400}
            height={250}
          />
          <div className="bg-bg-dark absolute bottom-20 -left-10 flex h-20 w-130 items-center rounded-md border p-0">
            <span className="text-background absolute top-1/2 left-1/2 z-[100] w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl text-nowrap">
              Get free Subscriptions!
            </span>
            <Image
              src={"/light.png"}
              alt="light"
              width={350}
              height={90}
              className="mx-auto h-full"
            />
          </div>
          <span className="absolute bottom-5 mx-7 text-center">
            Exchange your Tickets for Claude, Netflix, Spotify and more
            subscriptions
          </span>
        </div>
      </div>
    </div>
  );
}

export default Stages;
