import Image from "next/image";
import IMAGES from "../../../public/images";

export default function Hero() {
  return (
    <div className="flex justify-between items-center gap-6 ">
      <div className="w-full grid gap-6">
        <h1 className="text-6xl md:text-7xl font-semibold">
          Revitalize Your Routine, Fresh, Fruity, Fantastic!
        </h1>
        <h4 className="text-lg md:text-2xl">
          "Savor the Symphony of Flavors, with Nature's Sweetness &
          deliciousness. Get the best variety of juices here!”
        </h4>

        <div className="flex justify-start items-center gap-4 lg:mt-8 font-secondary-sans font-semibold">
          <button className="border border-text-color rounded-lg text-center px-4 py-2 bg-text-color text-white text-sm">
            view menu
          </button>
          <button className="border border-text-color rounded-lg text-center px-4 py-2 text-text-color text-sm">
            discount
          </button>
        </div>
      </div>
      <div className="hidden lg:block h-[500px] object-contain w-[70%]">
        <Image src={IMAGES.heroImage} className="max-h-full" />
      </div>
    </div>
  );
}
