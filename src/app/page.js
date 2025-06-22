import Chartbox from "@/components/atom/Chartbox";
import Timeline from "@/components/atom/Timeline";
import Navbar from "@/components/molecules/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-4  md:pr-5">
          <div className="w-full lg:w-[65%] p-5">
            <Chartbox />
          </div>

          <div className="w-full lg:w-[35%] p-5">
            <Timeline />
          </div>
        </div>


      </div>
    </>
  );
}
