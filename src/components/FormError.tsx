import { FC, ReactNode } from "react";

interface errorsProps extends React.AllHTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}
const FormError:FC<errorsProps> = ({className, children,  ...props}) => {
  return (
    <p className={className} {...props}>{children}</p>
  )
}

export default FormError;