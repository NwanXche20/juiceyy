import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import "@/styles/globals.css";
import { Jost, Quicksand } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-jost",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${jost.variable} ${quicksand.variable} font-sans`}>
      <div className="w-[90%] md:w-[85%] max-w-screen-xl mx-auto">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
