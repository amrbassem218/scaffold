import Image from "next/image";

type Props = {};

function Prizes({}: Props) {
  const prizes = [
    {
      image: "/claude.png",
      name: "Claude Pro",
    },
  ];
  return (
    <div className="">
      <div className="border-secondary h-40 w-full rotate-3 border-2">
        {prizes.map((prize) => (
          <div>
            <Image
              src={prize.image}
              alt={`${prize.name}-image`}
              width={300}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prizes;
