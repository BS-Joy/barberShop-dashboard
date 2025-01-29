import { CiCirclePlus } from "react-icons/ci";
import { LuScissors } from "react-icons/lu";
import { IoReaderOutline } from "react-icons/io5";
import PageHeading from "../../../Components/PageHeading";
import { Button, Input } from "antd";
import { useRef, useState } from "react";
import DashboardModal from "../../../Components/DashboardModal";
import CategoryDeleteModal from "./CategoryDeleteModal";

const bannerImage =
  "https://images.unsplash.com/photo-1614438865362-9137f7e3036e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3";

export default function EditCategoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (data) => {
    setIsModalOpen(true);
  };
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="mx-auto h-[750px] overflow-hidden p-6 bg-white rounded-2xl shadow-lg border border-primary relative">
      <PageHeading
        title="Add Category"
        disbaledBackBtn={false}
        backPath={"/categories"}
        className="pb-6 border-b border-b-primary"
      />

      {/* file input */}

      <div className="mt-6">
        {bannerImage ? (
          <div
            className=" rounded-xl h-64 overflow-hidden flex justify-center items-center mt-2 bg-gray-100 cursor-pointer"
            onClick={handleClick}
          >
            <img src={bannerImage} alt="banner image" />
            <input type="file" ref={inputRef} className="hidden" />
          </div>
        ) : (
          <>
            <label className="text-[#000000] font-medium">
              Category Banner
            </label>
            <div
              className="border-dashed border-2 border-secondry rounded-xl h-56 flex justify-center items-center mt-2 bg-gray-100 cursor-pointer"
              onClick={handleClick}
            >
              <CiCirclePlus size={"35px"} className="text-primary" />
            </div>
            <input type="file" ref={inputRef} className="hidden" />
          </>
        )}
      </div>

      {/* banner name */}
      <div className="mt-2">
        <Input
          type="text"
          className="pb-4 pt-6"
          prefix={<LuScissors size={"22px"} className="mr-2 text-primary" />}
          placeholder="Enter new service category name"
          value={"Hair Style"}
        />

        <div className="w-full flex flex-col items-center justify-center absolute bottom-4 left-0">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="px-2 w-[95%] bg-white border border-primary text-primary mt-6"
            onClick={showModal}
          >
            Delete Category
          </Button>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="px-2 w-[95%] bg-primary mt-6"
          >
            Updatae Category
          </Button>
        </div>
      </div>
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        closeIcon={false}
      >
        <CategoryDeleteModal showModal={setIsModalOpen} />
      </DashboardModal>
    </div>
  );
}
