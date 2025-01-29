import { Button } from "antd";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const EditTermsOfServices = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { privacyPolicy } = location.state;

  const [content, setContent] = useState(privacyPolicy || "");
  const placeholder = "Enter your update privacy policy...";

  return (
    <div className="min-h-[75vh] flex flex-col justify-between gap-6 p-6 bg-white border border-primary rounded-3xl">
      <div className="space-y-6">
        <PageHeading
          backPath={-1}
          title={"Edit Terms of Services"}
          disbaledBackBtn={false}
          className="pb-6 border-b border-b-secondry w-full"
        />

        <div className="h-full">
          {/* <ReactQuill
            placeholder={placeholder}
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
            className="h-[50vh]"
          /> */}
          <textarea
            name="privacyPolicy"
            id="privacyPolicy"
            value={content}
            className="w-full h-full border-none outline-none"
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="px-8 w-full"
        >
          update
        </Button>
      </div>
    </div>
  );
};

export default EditTermsOfServices;
