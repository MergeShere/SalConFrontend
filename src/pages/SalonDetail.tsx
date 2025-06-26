import { SalonDetailsCard } from "../components/salon/SalonDetailsCard";

export default function SalonDetail() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
     
      <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
       
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="max-w-[519px] w-full">
          <SalonDetailsCard />
        </div>
      </div>
    </div>
  );
}
