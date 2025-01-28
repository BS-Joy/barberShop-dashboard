import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import PageHeading from "../../../Components/PageHeading";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl border border-primary p-6 w-full h-[750px]">
      <PageHeading
        title={"Categories"}
        disbaledBackBtn={true}
        className="pb-6 border-b border-b-primary"
      />
      <div className="grid grid-cols-4 gap-6 my-6">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div
        className="border-dashed border-2 w-64 h-32 border-secondry rounded-xl flex justify-center items-center mt-2 bg-gray-100 cursor-pointer"
        onClick={() => navigate("add-category")}
      >
        <CiCirclePlus size={"35px"} className="text-primary" /> Add Category
      </div>
    </div>
  );
}
