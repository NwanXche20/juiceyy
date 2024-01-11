import Image from "next/image";
import IMAGES from "../../public/images";
import { FaAlignRight, FaX } from "react-icons/fa6";
import { useState } from "react";

function LinkItem({ props, children }) {
  return (
    <li className="text-lg font-medium capitalize cursor-pointer" {...props}>
      {children}
    </li>
  );
}

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="py-4 mb-4 md:mb-8 flex justify-between items-center gap-6 text-black font-secondary-sans font-semibold relative lg:hidden">
        <div className="h-16 w-20 flex justify-center items-center">
          <Image
            src={IMAGES.logo}
            alt=""
            className="max-h-full object-contain cursor-pointer"
          />
        </div>

        <button
          className="text-3xl text-text-color outline-0"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? <FaX /> : <FaAlignRight />}
        </button>
      </nav>
      <div
        className={`${
          showNav ? "visible h-auto relative " : "hidden h-0 absolute"
        } space-y-6 md:space-y-6 bg-contact-white w-full -mt-6 mb-10 rounded-[20px] text-center text-black drop-shadow-nav p-6 transition-all ease-in-out duration-700`}
      >
        <ul className="space-y-4 md:space-y-6">
          <LinkItem>Home</LinkItem>
          <LinkItem>features</LinkItem>
          <LinkItem>menu</LinkItem>
          <LinkItem>pricing</LinkItem>
          <LinkItem>contact</LinkItem>
        </ul>

        <div className="border border-text-color rounded-lg text-center px-4 py-2 font-medium cursor-pointer">
          Sign up
        </div>
      </div>

      <nav className="hidden py-4 mb-8 lg:flex justify-between items-center gap-6 text-black font-secondary-sans font-semibold">
        <div className="h-20 w-28 flex justify-center items-center">
          <Image
            src={IMAGES.logo}
            alt=""
            className="max-h-full object-contain cursor-pointer"
          />
        </div>
        <ul className="flex justify-between items-center gap-6">
          <LinkItem>Home</LinkItem>
          <LinkItem>features</LinkItem>
          <LinkItem>menu</LinkItem>
          <LinkItem>pricing</LinkItem>
          <LinkItem>contact</LinkItem>
        </ul>
        <div className="border border-text-color rounded-lg text-center px-4 py-2 font-medium cursor-pointer">
          Sign up
        </div>
      </nav>
    </>
  );
}
