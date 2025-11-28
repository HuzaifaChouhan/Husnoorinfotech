import Leftside from "./leftside";
import Rightside from "./rightside";


export default function HeroSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 md:px-12 py-16 gap-10">
      {/* LEFT SIDE — TEXT + BUTTON */}
      <Leftside/>
      {/* RIGHT SIDE — RESPONSIVE CAROUSEL */}
      <Rightside />
    </div>
  );
}
