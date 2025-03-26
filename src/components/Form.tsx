import { FC } from "react"

interface formProps extends React.FormHTMLAttributes<HTMLFormElement> {}
const Form:FC<formProps> = ({className,   children, ...props}) => {
  return (
    <form className={className} {...props}>
        {children}
    </form>
  )
}

export default Form