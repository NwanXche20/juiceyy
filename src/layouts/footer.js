import IMAGES from "../images";
import {
  FaPhoneFlip,
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function ContactUs() {
  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-5xl xl:text-6xl font-semibold capitalize">
          contact us
        </h2>
        <p className="text-lg font-medium">Send us a message</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            required
            placeholder="Full name"
            type="text"
            className="bg-contact-white placeholder:text-gray-500 text-sm px-4 py-2 rounded-xl"
          />
        </div>
        <div>
          <input
            required
            placeholder="Your email"
            type="email"
            className="bg-contact-white placeholder:text-gray-500 text-sm px-4 py-2 rounded-xl"
          />
        </div>
        <div>
          <textarea
            required
            placeholder="Your message..."
            rows={2}
            className="bg-contact-white placeholder:text-gray-500 text-sm px-4 py-2 rounded-xl w-64 resize-none"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            name="submit"
            className="capitalize bg-primary text-black text-sm px-8 py-2 rounded-xl cursor-pointer hover:bg-text-color hover:text-white transition-all ease-in-out duration-300"
          />
        </div>
      </form>
    </div>
  );
}

function FooterLink({ children }) {
  return <li className="capitalize md:text-lg xl:text-2xl">{children}</li>;
}

function Sitemap() {
  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-5xl xl:text-6xl font-semibold capitalize">
          sitemap
        </h2>
        <p className="text-lg font-medium">All our pages</p>
      </div>

      <ul className="space-y-3 list-[disc] list-inside">
        <FooterLink>home</FooterLink>
        <FooterLink>about us</FooterLink>
        <FooterLink>services</FooterLink>
        <FooterLink>blog</FooterLink>
        <FooterLink>contact us</FooterLink>
      </ul>
    </div>
  );
}

function LogoTab() {
  return (
    <div className="grid gap-4">
      <div className="h-28 w-28 flex justify-center items-center">
        <img
          src={IMAGES.logo}
          alt=""
          className="max-h-full object-contain cursor-pointer"
        />
      </div>

      <div className="text-lg xl:text-2xl font-medium flex items-center gap-4">
        <div>
          <FaPhoneFlip />
        </div>
        <p>(08) 400 2000</p>
      </div>
      <div className="text-lg xl:text-2xl font-medium flex items-center gap-4">
        <div>
          <FaRegEnvelope />
        </div>
        <p>xyz@gmail.com</p>
      </div>
    </div>
  );
}

function Social({ children }) {
  return (
    <div className="flex justify-center items-center w-12 h-12 rounded-full bg-contact-white hover:bg-primary hover:text-contact-white transition ease-in-out duration-500 cursor-pointer">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <div className="mt-24 lg:mt-28 grid gap-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 items-start">
        <ContactUs />
        <Sitemap />
        <LogoTab />
      </div>

      <div className="flex items-center gap-8 flex-wrap">
        <div className="flex items-center gap-3">
          <Social>
            <FaFacebookF />
          </Social>
          <Social>
            <FaInstagram />
          </Social>
          <Social>
            <FaXTwitter />
          </Social>
          <Social>
            <FaYoutube />
          </Social>
        </div>
        <p>Copyright &#169; 2023 Dscode | All rights reserved</p>
      </div>
    </div>
  );
}
