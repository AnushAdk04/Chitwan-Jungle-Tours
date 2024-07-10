import Image from "next/image";
import Itinerary from "@/components/Itinerary/Itinerary";
import Plans from "@/components/Plans/Plans";

export default function Home() {
  return (
    <>
    <Itinerary />
    
      

      {/*Move it to Footer folder */}
      <div className="grid sticky bottom-0 left-5 bg-[#401A33] items-center justify-center grid-flow-row w-12 h-52 rounded-2xl ">
        <div>💀</div>
        <div>💀</div>
        <div>💀</div>
        <div>💀</div>
        <div>💀</div>
      </div>
    </>
  );
}
