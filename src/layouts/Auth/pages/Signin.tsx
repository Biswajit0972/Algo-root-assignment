import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { loginSchema, loginType } from "../../../zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError, Form, FormInput, AuthHeader, Button } from "../../../utils";
import { useAlgoContext } from "../../../hooks/UseAlgo";


const Signin = () => {

  const navigate = useNavigate();
  const { dispatch, state: { isFailed,  isSuccess } } = useAlgoContext()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });


  function handelLogin(data: loginType) {
    dispatch({ type: "Login", payload: data });
    
    if (isFailed.status) {

      if (isFailed.message === "register") {
        toast.error("Please register first");
        navigate("/signup");
        return;
      }

      toast.error(isFailed.message)
      return;
    }

    
    if (isSuccess.status)  {
      toast.success("user login");
      navigate("/dashboard");
    }
   
  }

  return (
    <>
      <AuthHeader text1="Welcome" text2="Back" text3="Sign in to continue" />
      <Form
        className="w-full bg-[#111010]  rounded-xl p-4  flex-col gap-4 mt-12"
        onSubmit={handleSubmit(handelLogin)}
      >
        <div className="flex-col  gap-2 w-full relative">
          <FormInput
            {...register("email", { required: true })}
            placeholder="Enter your email"
            inputSize="medium"
          />
          {errors.email && (
            <FormError className="text-red-500 text-sm">
              {errors.email.message}{" "}
            </FormError>
          )}
        </div>
        <div className="flex-col  gap-2 w-full relative">
          <FormInput
            {...register("password", { required: true })}
            placeholder="Enter your password"
            inputSize="medium"
            type="password"
          />
          {errors.password && (
            <FormError className="text-red-500 text-sm">
              {errors.password?.message}{" "}
            </FormError>
          )}
        </div>
        <Button variant="style" className="w-full ">
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default Signin;
