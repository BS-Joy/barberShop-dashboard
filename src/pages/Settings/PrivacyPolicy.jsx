import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";

const data =
  "Lorem ipsum dolor sit amet consectetur. Et eu amet sed nam duis pellentesque. Amet sed sodales at in. In sed urna venenatis at faucibus morbi vitae magna pellentesque. Nullam etiam velit ut rhoncus erat orci egestas nibh vitae. Nunc pellentesque sollicitudin arcu sed. Pulvinar enim sagittis commodo eget at viverra. Vitae viverra duis senectus dignissim purus fringilla tincidunt pretium aenean. Vitae facilisi lacus urna maecenas malesuada sagittis dictum orci mi. Vestibulum tellus elit vel ut vel odio commodo quisque cursus.";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[82vh] flex flex-col justify-between bg-white p-6 rounded-3xl border border-primary">
      <div className="space-y-4">
        <PageHeading
          backPath={-1}
          title={"Privacy Policy"}
          disbaledBackBtn={false}
          className="pb-6 border-b border-b-secondry w-full"
        />

        <div className="space-y-4 ">{data}</div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          onClick={() =>
            navigate("/settings/privacy-policy/edit", {
              state: {
                privacyPolicy: data,
              },
            })
          }
          type="primary"
          size="large"
          htmlType="submit"
          className="px-2 w-full bg-primary"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
