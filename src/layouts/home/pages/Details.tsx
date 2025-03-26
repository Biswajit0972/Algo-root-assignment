import { useForm } from "react-hook-form";
import Form from "../../../components/Form";
import FormInput from "../../../components/FormInput";
import { useState } from "react";

type dataType = { value: string };
const Details = () => {
  const { handleSubmit, register } = useForm<dataType>();
  const [order, setOrder] = useState("");

  function getValue(data: dataType) {
    console.log(data);
    console.log(order);
  }

  return (
    <div className="relative h-full w-full font-base font-white ">
      <div className="w-full h-12 bg-gray-500 px-5 flex-center">
        <div className="h-full  relative flex-only gap-2">
          <select
            className="text-white "
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="-1">Accending</option>
            <option value="1">Decending</option>
          </select>
          <Form className="w-[12rem] " onSubmit={handleSubmit(getValue)}>
            <FormInput {...register("value")} className="text-white" />
          </Form>
        </div>
      </div>
      <div className="overflow-x-hidden w-full relative h-[calc(100%-48px)] bg-red"></div>
    </div>
  );
};

export default Details;
