import { FC } from "react";
import { OPTIONTYPE } from "../types/td";

interface OptionProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    optionsProp: OPTIONTYPE[];
}

const Options: FC<OptionProps> = ({ className = "", optionsProp = [], ...rest }) => {
    return (
        <select className={className} {...rest}>
            {optionsProp.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.lable}
                </option>
            ))}
        </select>
    );
};

export default Options;
