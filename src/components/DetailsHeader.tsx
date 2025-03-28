import { Dispatch, FC, SetStateAction } from "react";
import { FaSort } from "react-icons/fa6";
import { myOptions, OPTIONTYPE } from "../types/td";
import Options from "./Options";
import FormInput from "./FormInput";
const orderType: OPTIONTYPE[] = [
  {
    lable: "Ascending",
    value: 1,
  },
  {
    lable: "Descending ",
    value: -1,
  },
];

const sortBased: OPTIONTYPE[] = [
  {
    lable: "Name",
    value: "name",
  },
  {
    lable: "Age",
    value: "age",
  },
  {
    lable: "isActive",
    value: "isActive",
  },
];

const DetailsHeader: FC<{
  setSortContent: Dispatch<SetStateAction<myOptions>>;
  sortDetails: () => void;
  searchUser: (data: string) => void;
}> = ({ sortDetails, setSortContent, searchUser }) => {
  

  return (
    <div className="w-full h-12 bg-gray-500 px-2">
      <div className="h-full w-full  relative flex-only gap-5">
        <div className="relative h-full w-[60%] sm:w-[20%] py-2 overflow-hidden px-2 flex-between ">
          <Options
            sortOrder={orderType}
            sortyType={sortBased}
            className="h-full w-full flex-only gap-3 text-secondary cursor-pointer"
            childrenClassName="bg-gray-500"
            setSortContent={setSortContent}
          />
          <FaSort
            onClick={sortDetails}
            className="text-secondary cursor-pointer"
          />
        </div>
        <div className="h-full w-[calc(100%-65%)] flex-center">
          <FormInput className="w-full text-secondary" inputSize="medium" onChange={(e) => searchUser(e.target.value)}/>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
