import { useForm } from "react-hook-form";
import Form from "../../../components/Form";
import { loginSchema, loginType } from "../../../zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/FormInput";
import FormError from "../../../components/FormError";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";

const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  function handelLogin(data: loginType) {
    console.log(data);
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
