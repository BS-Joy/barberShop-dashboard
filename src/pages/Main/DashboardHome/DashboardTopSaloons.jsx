import { HiOutlineClipboardCheck } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

export const TopSaloons = [
  {
    name: "NYC Saloon",
    location: "Dubai City",
    totalCustomars: "4.5k",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Glamour Cuts",
    location: "London",
    totalCustomars: "6.2k",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Chic Styles",
    location: "Paris",
    totalCustomars: "5.8k",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Trendy Trims",
    location: "New York",
    totalCustomars: "7.1k",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Scissors & Style",
    location: "Tokyo",
    totalCustomars: "3.9k",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Mane Attraction",
    location: "Sydney",
    totalCustomars: "5.3k",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Curl Up & Dye",
    location: "Berlin",
    totalCustomars: "4.7k",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Shear Perfection",
    location: "Mumbai",
    totalCustomars: "6.5k",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "The Cutting Edge",
    location: "Los Angeles",
    totalCustomars: "5.9k",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Locks & Loaded",
    location: "Toronto",
    totalCustomars: "4.2k",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function DashboardTopSaloons() {
  return (
    <div className="bg-white border border-primary p-4 rounded-2xl min-h-[500px] w-[35%]">
      {/* card header */}
      <div className="border-b border-b-primary mb-4 flex justify-between pb-4 ">
        <h3 className="text-primary text-[18px]">Top Saloons</h3>
        <h3 className="text-[#191919] text-[18px] font-semibold">See All</h3>
      </div>

      <div className="max-h-[400px] h-full overflow-y-auto salon-request-body">
        {TopSaloons.map((salon, index) => (
          <div className="flex items-center gap-3 bg-playground rounded-xl p-3 w-full max-w-md mb-2">
            {/* Profile Image */}
            <div className="shrink-0">
              <img
                src={salon?.image || "/placeholder.svg"}
                alt={salon?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{salon?.name}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CiLocationOn className="w-3 h-3" />
                  <span>{salon?.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineClipboardCheck className="w-3 h-3" />
                  <span>{salon?.totalCustomars}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm">
              <TiStarFullOutline className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-700">({salon?.rating})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
