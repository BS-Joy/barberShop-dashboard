import { CiCirclePlus } from "react-icons/ci";
import { LuScissors } from "react-icons/lu";
import { IoReaderOutline } from "react-icons/io5";
import PageHeading from "../../../Components/PageHeading";
import { Button, Input } from "antd";
import { useRef } from "react";

export default function AddBannerPage() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };
  return (
    <div className="mx-auto h-[750px] overflow-hidden p-6 bg-white rounded-2xl shadow-lg border border-primary relative">
      <PageHeading
        title="Add Banner"
        disbaledBackBtn={false}
        backPath={"/banner"}
        className="pb-6 border-b border-b-primary"
      />

      {/* file input */}

      <div className="mt-6">
        <label className="text-[#000000] font-medium">Banner Photo</label>
        <div
          className="border-dashed border-2 border-secondry rounded-xl h-56 flex justify-center items-center mt-2 bg-gray-100 cursor-pointer"
          onClick={handleClick}
        >
          <CiCirclePlus size={"35px"} className="text-primary" />
        </div>
        <input type="file" ref={inputRef} className="hidden" />
      </div>

      {/* banner name */}
      <div className="mt-2">
        <Input
          type="text"
          className="pb-4 pt-6"
          prefix={<IoReaderOutline className="mr-2 text-primary" />}
          placeholder="Enter banner name"
        />

        <div className="w-full flex justify-center absolute bottom-4 left-0">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="px-2 w-[95%] bg-primary mt-6"
          >
            Add Banner
          </Button>
        </div>
      </div>
    </div>
  );
}
