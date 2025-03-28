import { Dispatch, FC, SetStateAction } from "react";
import { myOptions, OPTIONTYPE } from "../types/td";
import Form from "./Form";
import { useForm } from "react-hook-form";

interface optionsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  childrenClassName?: string;
  sortOrder: OPTIONTYPE[];
  sortyType: OPTIONTYPE[];
  setSortContent: Dispatch<SetStateAction<myOptions>>;
}

const Options: FC<optionsProps> = ({
  className,
  sortOrder,
  sortyType,
  childrenClassName,

  setSortContent,
}) => {
  const { register, handleSubmit } = useForm<myOptions>();

  function handelSort(data: myOptions) {
    setSortContent(data);
  }

  return (
    <Form className={className} onChange={handleSubmit(handelSort)}>
      <select {...register("order")} className={childrenClassName}>
        <option value="0">Sort order</option>
        {sortOrder.map((item) => (
          <option key={item.value} value={item.value}>
            {item.lable}
          </option>
        ))}
      </select>
      <select {...register("type")} className={childrenClassName}>
        <option value="">Set type</option>
        {sortyType.map((item) => (
          <option key={item.value} value={item.value}>
            {item.lable}
          </option>
        ))}
      </select>
    </Form>
  );
};

export default Options;
