import Image from "next/image";
import IMAGES from "../../../public/images";

function FruitCard({ src, down }) {
  return (
    <div
      className={`h-[250px] md:h-[300px] w-full rounded-[50px] shadow-2xl flex justify-center items-center ${
        down && "self-end"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFE2C8 0%, #FFF3C8 0.01%, #FEBA44 85.42%)",
      }}
    >
      <Image
        src={src}
        alt=""
        className="max-h-[80%] max-w-[80%] w-full h-full object-contain"
      />
    </div>
  );
}

export default function Section1() {
  return (
    <div className="flex flex-col-reverse justify-between items-start gap-10 lg:gap-6 lg:flex-row lg:items-center">
      <div className="xl:flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl font-semibold">
          Why we are better than others
        </h1>
        <h4 className="text-lg md:text-2xl">
          Our commitment to excellence in the realm of juices sets us apart from
          the competition.
        </h4>
      </div>

      <div className="flex justify-between items-start gap-4 h-[300px] md:h-[400px]">
        <FruitCard src={IMAGES.pineapple} />
        <FruitCard src={IMAGES.grape} down />
        <FruitCard src={IMAGES.watermelon} />
      </div>
    </div>
  );
}
