import { Button, Input } from "antd";
import Form from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import AuthBanner from "./AuthBanner";
import { CiMail } from "react-icons/ci";
import InputFieldIconWrapper from "../../Components/InputFieldIconWrapper";
import { FaChevronLeft } from "react-icons/fa6";
import AuthLayoutWrapper from "./AuthLayoutWrapper";
// import { useForgotPasswordMutation } from "../../redux/features/Auth/authApi";
// import Swal from "sweetalert2";

const ForgotPassword = () => {
  const navigate = useNavigate();
  // const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const onFinish = async (values) => {
    navigate(`/auth/verify-email`);
    // try {
    //   const response = await forgotPassword(values);
    //   // console.log(response);
    //   if (response?.data?.statusCode == 200) {
    //     navigate(`/auth/verify-email/${values.email}`);
    //   } else {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Failed!!",
    //       text:
    //         response?.data?.message ||
    //         response?.error?.data?.message ||
    //         "Something went wrong. Please try again later.",
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Failed!!",
    //     text: "Something went wrong. Please try again later.",
    //   });
    // }
  };
  return (
    <AuthLayoutWrapper>
      <div className="w-full py-[64px] lg:px-[44px] space-y-8">
        <div className="flex flex-col items-center lg:items-start">
          <PageHeading
            backPath={"/auth"}
            title={"Forgot Password"}
            disbaledBackBtn={false}
          />
          <p className=" text-hash mt-4 text-center lg:text-start">
            Enter the email address associated with your account. We&apos;ll
            send you an OTP to your email.
          </p>
        </div>
        <Form
          name="normal_login"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Please input valid email!",
              },
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your email" />
            <InputFieldIconWrapper>
              <CiMail size={"16px"} />
            </InputFieldIconWrapper>
          </Form.Item>
          <div className="w-full flex justify-center pt-5">
            <Button
              // disabled={isLoading}
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full px-2 bg-primary text-[18px] font-semibold leading-[21.5px]"
              onClick={onFinish}
            >
              Send OTP
            </Button>
          </div>
        </Form>
      </div>
    </AuthLayoutWrapper>
  );
};

export default ForgotPassword;
