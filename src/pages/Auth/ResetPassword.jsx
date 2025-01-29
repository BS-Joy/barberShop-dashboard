import { Button, Checkbox, Input } from "antd";
import Form from "antd/es/form/Form";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/reset-pass.png";
// import ComponentContainer from "../../Components/ComponentContainer";
import PageHeading from "../../Components/PageHeading";
import AuthLayoutWrapper from "./AuthLayoutWrapper";
import InputFieldIconWrapper from "../../Components/InputFieldIconWrapper";
import { MdLockOutline } from "react-icons/md";
// import { useChangePasswordMutation } from "../../redux/features/Auth/authApi";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { setUser } from "../../redux/features/Auth/authSlice";

const ResetPassword = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
  // const [mutation, { isLoading }] = useChangePasswordMutation();

  const onFinish = async (values) => {
    navigate("/auth");
    // try {
    //   const response = await mutation({
    //     password: values.newPassword,
    //     // token: token,
    //   });
    //   if (response?.data?.statusCode == 200) {
    //     localStorage.setItem("verify-token", null);
    //     dispatch(
    //       setUser({
    //         user: null,
    //         token: null,
    //       })
    //     );
    //     navigate("/auth");
    //     Swal.fire({
    //       icon: "success",
    //       title: response?.data?.message,
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
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
    //     title: "Failed !!",
    //     text: "Something went wrong.",
    //   });
    // }
  };
  return (
    <AuthLayoutWrapper>
      <div className="w-full py-[44px] lg:px-[44px] space-y-8">
        <div className="flex flex-col items-center lg:items-start">
          <PageHeading
            backPath={-1}
            title={"Set new password"}
            disbaledBackBtn={false}
          />
        </div>
        <Form
          name="normal_login"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input new password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<MdLockOutline size="16px" className="mr-2" />}
            />
          </Form.Item>
          <Form.Item
            name="rePassword"
            rules={[
              {
                required: true,
                message: "Please Re-Enter the password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Re-enter your password"
              prefix={<MdLockOutline size="16px" className="mr-2" />}
            />
          </Form.Item>
          <div className="w-full flex justify-center pt-4 ">
            <Button
              // disabled={isLoading}
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full px-2 "
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </div>
    </AuthLayoutWrapper>
  );
};

export default ResetPassword;
