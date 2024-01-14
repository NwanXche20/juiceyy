import IMAGES from "../../images";
import { FaRegHeart, FaArrowRight } from "react-icons/fa6";

function FruitCard({ src, title, desc, price }) {
  return (
    <div
      className={`h-[400px] lg:h-[450px] w-full rounded-[40px] lg:rounded-[50px] shadow-xl flex flex-col justify-between gap-3 pt-8 pb-10 lg:pb-14 px-6 relative hover:scale-105 transition-all ease-in-out duration-300`}
      style={{
        backgroundImage:
          "linear-gradient(180.52deg, rgba(255, 243, 200, 0.62) 0.41%, #FFA51E 99.48%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      }}
    >
      <div className="absolute top-0 right-0 w-[70px] lg:w-[86px] h-12 lg:h-16 rounded-tr-[30px] rounded-bl-[30px] lg:rounded-tr-[40px] lg:rounded-bl-[40px] bg-primary z-10 flex justify-center items-center text-white text-lg lg:text-2xl">
        <FaRegHeart />
      </div>

      <div className="flex justify-center items-center h-[60%]">
        <img src={src} alt="" className="w-full h-full object-contain" />
      </div>

      <div>
        <h4 className="text-2xl lg:text-3xl font-bold">{title}</h4>
        <p className="font-medium">{desc}</p>
      </div>

      <p className="text-lg lg:text-xl font-bold">
        <span className="text-red-500">$</span>
        {price}
      </p>
    </div>
  );
}

export default function Section2() {
  return (
    <div className="grid gap-10">
      <div className="max-w-[500px]">
        <h1 className="text-5xl md:text-6xl font-semibold">
          Explore best menu selections
        </h1>
      </div>

      <div className="flex justify-between items-center gap-6 flex-wrap md:flex-nowrap">
        <FruitCard
          title="Mango Bliss Burst"
          desc="Description of the item"
          price="10.00"
          src={IMAGES.mango}
        />
        <FruitCard
          title="Pure Kiwi Joy"
          desc="Description of the item"
          price="8.00"
          src={IMAGES.kiwi}
        />
        <FruitCard
          title="Berry Burst Bliss"
          desc="Description of the item"
          price="11.00"
          src={IMAGES.raspberry}
        />
      </div>

      <div className="flex justify-end">
        <div className="flex justify-between items-center gap-3 w-fit">
          <p className="text-lg lg:text-xl capitalize">view all</p>
          <div className="lg:text-2xl">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
