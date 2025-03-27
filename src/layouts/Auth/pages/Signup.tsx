import Form from "../../../components/Form";
import AuthHeader from "../../../components/AuthHeader";
import FormInput from "../../../components/FormInput";
import FormError from "../../../components/FormError";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "../../../zod";
import Button from "../../../components/Button";
import { useAlgoContext } from "../../../context/AuthContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


const Signup = () => {
   const {isSuccess:{status, message},isFailed:{status:failed, message: remark},dispatch} = useAlgoContext();
   
   const navigate = useNavigate();


   useEffect(() => {
    if (status) {
      toast.success(message);
    }

    if (failed) {
      toast.error(remark);
    }
    
    navigate("/");
   }, [status, message, failed, remark, navigate]);
   
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });
  

  function handelSignUp(data: signUpType) {
    dispatch({ type: "Signup", payload: data });
    // console.log(data);
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
