import React from "react";
import { Modal } from "antd";
import { IoMdClose } from "react-icons/io";

const DashboardModal = ({
  isModalOpen,
  setIsModalOpen,
  closeIcon,
  children,
  maxWidth,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      style={{
        maxWidth: maxWidth || "100%",
        paddingBlock: "15px",
        paddingInline: "20px",
      }}
    >
      <div>
        {closeIcon !== false && (
          <button
            onClick={handleCancel}
            type="primary"
            danger
            className="absolute top-2 right-0 text-primary px-2.5 py-2 rounded-none rounded-bl-xl rounded-tr-md"
          >
            <IoMdClose size={23} />
          </button>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default DashboardModal;
