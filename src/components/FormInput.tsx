import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { cn } from "../utils/style";


const inputVariants = cva("w-full relative outline-none text-dark-txt font-base", {
  variants: {
    variant: {
      default: "border border-gray-300 rounded-md bg-gray-700 bg-transparent",
      outline: "border border-gray-400 bg-transparent focus:border-blue-500",
      border_b: "border-b-2 border-gray-500 bg-gray-700 rounded-xl",
      border_md: "border-2 border-gray-700 focus:border-blue-500 rounded-md",
    },
    inputSize: { // Renamed from 'size' to 'inputSize' to avoid conflict
      big: "h-12 text-lg px-4",
      medium: "h-10 text-[18px] px-3",
      sm: "h-8 text-sm px-2",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "sm",
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
        
    } // Now there's no type conflict

const FormInput: FC<InputProps> = ({ className, variant, inputSize, ...props }) => {
  return <input className={cn(inputVariants({ variant, inputSize }), className)} {...props} />;
};

export default FormInput;