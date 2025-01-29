import { useNavigate } from "react-router-dom";

export default function CategoryCard() {
  const navigate = useNavigate();
  return (
    <div
      className="relative max-w-[351px] h-32 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => navigate("edit-category")}
    >
      <img
        className="w-full h-full object-cover"
        src="https://images.pexels.com/photos/3992872/pexels-photo-3992872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hair Style"
      />
      <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">Hair Style</span>
      </div>
    </div>
  );
}
