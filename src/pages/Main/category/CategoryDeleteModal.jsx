import { Button } from "antd";
import { LuTrash2 } from "react-icons/lu";

export default function CategoryDeleteModal({ showModal }) {
  return (
    <div className="text-center py-11">
      <LuTrash2 className="text-primary text-4xl mx-auto mb-4" />
      <p className="text-gray-700 font-medium mb-16">
        Do you want to delete this category?
      </p>
      <div className="flex justify-center gap-4 px-8">
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="px-2 w-full bg-white border border-primary text-primary h-11"
        >
          Yes
        </Button>
        <Button
          onClick={() => showModal(false)}
          type="primary"
          size="large"
          htmlType="submit"
          className="px-2 w-full bg-primary h-11"
        >
          No
        </Button>
      </div>
    </div>
  );
}
