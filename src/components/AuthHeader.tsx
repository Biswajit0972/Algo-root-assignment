

const AuthHeader = ({
  text1,
  text2,
  text3,
}: {
  text1: string;
  text2: string;
  text3: string;
}) => {
  return (
    <div className="w-full relative overflow-hidden">
     
      <div className="w-full relative overflow-hidden max-h-[12rem]  mt-[30%] text-left pl-2  md:mt-[20%] lg:mt-[10%]">
        <h1 className="text-super ">{text1}</h1>
        <h1 className="text-super">{text2}</h1>
        <h3 className="text-max text-gray-600">{text3}</h3>
      </div>
    </div>
  );
};

export default AuthHeader;
