import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const salonData = [
  {
    name: "NYC Saloon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Hard Rock",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Green Apple",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Lautong Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function DashboardSaloonRequests() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="border-b border-b-primary">
        <h3>Saloon Request</h3>
        <h3>See All</h3>

        {salonData.map((salon, index) => (
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img
                src={salon?.image}
                alt={salon.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h4 className="text-[18px]">{salon?.name}</h4>
                <p className="flex items-center text-[12px]">
                  <CiLocationOn />
                  {salon?.location}
                </p>
              </div>
            </div>
            <div>
              <PiDotsThreeOutlineVerticalFill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
