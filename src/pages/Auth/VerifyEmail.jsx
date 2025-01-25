import { Button, Checkbox, Input } from "antd";
import Form from "antd/es/form/Form";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../assets/images/verify.png";
import PageHeading from "../../Components/PageHeading";
import OTPInput from "react-otp-input";
import Swal from "sweetalert2";
import AuthLayoutWrapper from "./AuthLayoutWrapper";
// import { useVerifyEmailMutation } from "../../redux/features/Auth/authApi";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [otp, setOtp] = useState("");
  // const [mutation, { isLoading }] = useVerifyEmailMutation();
  const onFinish = async (values) => {
    if (isNaN(otp) || otp.length < 4) {
      return Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please enter 4 digits OTP number!!.",
      });
    }
    navigate(`/auth/reset-password`);
    // try {
    //   const response = await mutation({
    //     email: id,
    //     code: Number(otp),
    //   });
    //   // console.log(response);
    //   if (response?.data?.statusCode == 200) {
    //     localStorage.setItem("verify-token", response?.data?.data);
    //     navigate(`/auth/reset-password`);
    //   } else {
    //     Swal.fire({
    //       icon: "error",
    //       title: "failed!",
    //       text:
    //         response?.data?.message ||
    //         response?.error?.data?.message ||
    //         "Something went wrong. Please try again later.",
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     // title: "Login Failed , Try Again...",
    //     text: "Something went wrong. Please try again later.",
    //   });
    // }
  };
  return (
    <AuthLayoutWrapper>
      <div className="w-full py-[64px] lg:px-[44px] space-y-5">
        <div className="flex flex-col items-center lg:items-start">
          <PageHeading
            backPath={"/auth/forgot-password"}
            title={"Verify OTP"}
            disbaledBackBtn={false}
          />
          <p className="text-hash mt-5 text-center lg:text-left">
            We'll send a verification code to your email. Check your inbox and
            enter the code here.
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
          <div className="py-3 text-2xl font-semibold flex justify-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height: "100px",
                width: "85px",
                margin: "20px",
                // background: "#ECE8F1",
                border: "1px solid #333333",
                // marginRight: "auto",
                outline: "none",
                borderRadius: "4px",
                color: "black",
              }}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked">
              <Button
                onClick={() => navigate("/auth/forgot-password")}
                type="link"
                className="text-base font-medium text-primary"
              >
                Didn’t receive code??
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={() => navigate("/auth/forgot-password")}
                type="link"
                className="text-base font-medium text-primary"
              >
                Resend
              </Button>
            </Form.Item>
          </div>
          <div className="w-full flex justify-center pt-5">
            <Button
              // disabled={isLoading}
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full px-2 "
            >
              Verify Email
            </Button>
          </div>
        </Form>
      </div>
    </AuthLayoutWrapper>
  );
};

export default VerifyEmail;
