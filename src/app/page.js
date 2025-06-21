import Chartbox from "@/components/atom/Chartbox";
import Timeline from "@/components/atom/Timeline";
import Navbar from "@/components/molecules/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Chartbox or Table (65% on md and up) */}
          <div className="w-full md:w-[65%] p-5">
            <Chartbox />
          </div>

          {/* Right: Timeline (35% on md and up) */}
          <div className="w-full md:w-[35%] p-5">
            <Timeline />
          </div>
        </div>


      </div>
    </>
  );
}
