
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FormError, Form, FormInput, AuthHeader, Button } from "../../../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "../../../zod";

import { useAlgoContext } from "../../../hooks/UseAlgo";
import { useForm } from "react-hook-form";


const Signup = () => {
  
   const navigate = useNavigate();
   const {dispatch,  state:{ isFailed}} = useAlgoContext()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });
  

  function handelSignUp(data: signUpType) {
    dispatch({ type: "Signup", payload: data });
    if (isFailed.status) {
      toast.error("User already exsit ! please login");
      navigate("/");
      return;
    }
    toast.success("user created!");
    navigate("/");
  }

  return (
    <div className="w-full  relative flex-col gap-10">
      <AuthHeader
        text1="Create an"
        text2="Account"
        text3="Sign up to continue"
      />
      <Form
        className="w-full bg-[#111010]  rounded-xl p-4  flex-col gap-4 relative"
        onSubmit={handleSubmit(handelSignUp)}
      >
        <div className="flex-col  gap-2 w-full relative">
          <FormInput
            {...register("name", { required: true })}
            placeholder="Enter your name"
            inputSize="medium"
          />
          {errors.name && (
            <FormError className="text-red-500 text-sm">
              {errors.name?.message}{" "}
            </FormError>
          )}
        </div>

        <div className="flex-col  gap-2 w-full relative">
          <FormInput
            {...register("email", { required: true })}
            placeholder="Enter your email"
            inputSize="medium"
          />
          {errors.email && (
            <FormError className="text-red-500 text-sm">
              {errors.email?.message}{" "}
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
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
