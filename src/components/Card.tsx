type User = {
  name: string;
  age: number;
  email: string;
  city: string;
  isActive: boolean;
};

const Card = ({ user }: { user: User }) => {
  return (
    <div className="w-full h-[5rem] p-1 mb-2  overflow-hidden grid bg-[#1f1a1a]  grid-cols-7 items-center gap-1 rounded-md  lg:grid-cols-9">
      <div className="h-full w-full  flex-center">
        <img
          src={`https://i.pravatar.cc/150?u=${user.email}`}
          alt="Profile"
          className="w-15 h-15 rounded-full border-2 border-blue-500"
        />
      </div>
      <div className="h-full w-full flex-center  col-span-2">
        <h2 className="text-sm font-semibold text-org lg:text-xl">{user.name}</h2>
      </div>
      <div className="h-full w-full flex-center ">
        <p className="text-gray-600 lg:text-lg ">Age: {user.age}</p>
      </div>
      <div className="h-full w-full flex-center col-start-5 col-span-2 overflow-auto">
        <p className="text-gray-600 text-[15px]">{user.city}</p>
      </div>
      <div className="h-full w-full hidden md:hidden  lg:flex lg:items-center lg:justify-center col-start-7 col-span-2">
        <p className="text-gray-500 text-sm ">{user.email}</p>
      </div>
      <div className="h-full w-full flex-center ">
        <div
          className={`px-1 py-1 rounded-full text-sm flex-center font-medium  ${
            user.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.isActive ? "🟢" : "🔴"}
        </div>
      </div>
    </div>
  );
};

export default Card;

// "bg-white shadow-lg rounded-2xl p-5 max-w-sm w-full text-center flex flex-col items-center space-y-3 border border-gray-200"
