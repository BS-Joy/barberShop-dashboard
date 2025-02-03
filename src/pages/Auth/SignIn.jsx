import { Button, Input, Spin } from "antd";
import Form from "antd/es/form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import InputFieldIconWrapper from "../../Components/InputFieldIconWrapper";
import AuthLayoutWrapper from "./AuthLayoutWrapper";
import { useLoginMutation } from "../../features/user/userSlice";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/LoadingSpinner";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginUser, { isLoading }] = useLoginMutation();

  const onFinish = async (values) => {
    // navigate(location.state ? location.state : "/");
    // try {
    //   const response = await setData(values);
    //   // console.log(response);
    //   if (response?.data?.statusCode == 200) {
    //     if (response?.data?.data?.user?.role === "ADMIN") {
    //       localStorage.setItem("token", response?.data?.data?.token);
    //       dispatch(
    //         setUser({
    //           user: response?.data?.data?.user,
    //           token: response?.data?.data?.token,
    //         })
    //       );
    //       // navigate(from, { replace: true });
    //       navigate(location.state ? location.state : "/");
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Login Failed!!",
    //         text: "You are not a Valid",
    //       });
    //     }
    //   } else {
    //     Swal.fire({
    //       icon: "error",
    //       title:
    //         response?.data?.message ||
    //         response?.error?.data?.message ||
    //         "Login Failed!!",
    //       text: "Something went wrong. Please try again later.",
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Login Failed!!",
    //     text: "Something went wrong. Please try again later.",
    //   });
    // }

    try {
      const res = await loginUser(values).unwrap();
      console.log(res);

      if (res.success) {
        toast.success("Log In Successfull");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  return (
    <AuthLayoutWrapper>
      <div className="w-full py-[44px] lg:px-[44px]">
        <div className="pb-[30px] space-y-2">
          <h1 className="text-[33px] text-center font-semibold ">Welcome!</h1>
          {/* <p className="text-hash text-center lg:text-lg">
              Please enter your email and password to continue.
            </p> */}
        </div>
        <Form
          name="normal_login"
          layout="vertical"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          requiredMark={false}
          className="text-start"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Please input a valid Email!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your full name"
              prefix={<FaRegUser className="mr-2" />}
            />
          </Form.Item>
          <Form.Item
            className=""
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<MdLockOutline size="16px" className="mr-2" />}
            />
          </Form.Item>
          <div className="flex justify-between items-center">
            {/* <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="text-base font-medium">
                  Remember me
                </Checkbox>
              </Form.Item> */}
            <Form.Item>
              <Button
                onClick={() => navigate("/auth/forgot-password")}
                type="link"
                className="text-base font-medium text-primary"
              >
                Forget password?
              </Button>
            </Form.Item>
          </div>
          <div className="w-full flex justify-center ">
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="px-2 w-full bg-primary"
            >
              {isLoading ? (
                <div className="flex gap-2 items-center">
                  <span>Signing in</span>
                  <LoadingSpinner size={5} color="stroke-white" />
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </div>
        </Form>
      </div>
    </AuthLayoutWrapper>
  );
};

export default SignIn;
