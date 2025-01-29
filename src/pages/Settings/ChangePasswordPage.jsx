import { Button, Checkbox, Input } from "antd";
import Form from "antd/es/form/Form";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import ComponentContainer from "../../Components/ComponentContainer";
import { MdLockOutline } from "react-icons/md";
import PageHeading from "../../Components/PageHeading";
import InputFieldIconWrapper from "../../Components/InputFieldIconWrapper";
// import { useChangePasswordMutation } from "../../redux/features/Auth/authApi";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { setUser } from "../../redux/features/Auth/authSlice";

const ChangePasswordPage = () => {
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
    <div className="w-full py-[44px] lg:px-[44px] space-y-8 bg-white rounded-3xl border h-[740px] border-secondry relative">
      <div className="flex flex-col items-center lg:items-start">
        <PageHeading
          backPath={-1}
          title={"Change password"}
          disbaledBackBtn={false}
          className="pb-6 border-b border-b-secondry w-full"
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
        {/* current password */}
        <Form.Item
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "Please input current password!",
            },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Enter your current password"
            prefix={<MdLockOutline size="16px" className="mr-2" />}
          />
        </Form.Item>

        {/* new password */}
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
            placeholder="Enter your new password"
            prefix={<MdLockOutline size="16px" className="mr-2" />}
          />
        </Form.Item>

        {/* confirm new password */}
        <Form.Item
          name="rePassword"
          rules={[
            {
              required: true,
              message: "Please re-Enter the new password!",
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
            placeholder="Confirm your new password"
            prefix={<MdLockOutline size="16px" className="mr-2" />}
          />
        </Form.Item>

        <NavLink to="/forgot-password" className="text-lg font-medium">
          Forgot Password?
        </NavLink>
        <div className="w-[95%] flex justify-center pt-4 absolute bottom-6">
          <Button
            // disabled={isLoading}
            type="primary"
            size="large"
            htmlType="submit"
            className="w-full px-2 "
          >
            Confirm Password
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordPage;
