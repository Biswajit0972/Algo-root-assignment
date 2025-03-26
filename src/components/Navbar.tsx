import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="h-full w-full bg- flex-between px-5 bg-side md:px-12">
      <div className="h-full overflow-hidden flex-center">
        <h1 className="font-base text-max text-secondary">Algoroot.</h1>
      </div>
      <div className="flex-only h-full overflow-hidden gap-6 text-max py-1">
        <div className="h-full flex-center bg-blue w-13 text-secondary rounded-full cursor-pointer">
          <h1>U</h1>
        </div>
        <div className="  h-full flex items-center justify-center md:hidden text-3xl text-secondary cursor-pointer ">
          <CiMenuBurger />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
