import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";
import { cn } from "../utils/style";

const customButton = cva(
    `relative px-5 py-2 rounded-md hover:border-none focus:ring focus:ring-offset-1 text-[17px]  font-base`,
    {
        variants: {
            variant: {
                "default": "bg-transparent border border-white text-lg text-white hover:bg-slate-700 cursor-pointer",
                "danger": "bg-red-500 text-white hover:bg-red-600 cursor-pointer",
                "style": "bg-org text-base cursor-pointer hover:bg-yellow-400 font-[500] "
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

interface  buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof customButton> {

}

const Button:FC<buttonProps> = ({className, variant, children, ...props}) => {
  return (
    <button className={cn(customButton({variant, className}))} {...props}>
        {children}
    </button>
  )
}

export default Button