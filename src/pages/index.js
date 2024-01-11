import { Hero, Section1, Section2 } from "@/views/home";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-24 lg:gap-28">
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  );
}
