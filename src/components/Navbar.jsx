import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [brgr, setBrgr] = useState("hidden");
  const Fbrgr = () => {
    brgr == "hidden"
      ? setBrgr(
          "w-[50%] block absolute top-[100%] left-0 p-5 bg-[rgb(0,0,0,0.7)] "
        )
      : setBrgr("hidden");
  };
  return (
    <div className="h-[7%] text-white w-sceeen flex justify-center absolute top-0 relative">
      <div className="w-[90%] flex items-center justify-between p-2 absolute relative">
        <ul className={` gap-[40px] ${brgr}   sm:flex`}>
        <li className="rounded p-2 hover:bg-green-700 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#contact">تواصل معنا</a>
          </li>
          <li className="rounded  p-2 hover:bg-green-700 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#ayah">آية من القرآن</a>
          </li>
          <li className="rounded  p-2 hover:bg-green-700 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#adhkar">اذكار الصباح والمساء</a>
          </li>
          <li className="rounded p-2 hover:bg-green-700 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#salat">مواقيت الصلاة</a>
          </li>  
        </ul>
        {brgr == "hidden" ? (
          <div className="sm:hidden cursor-pointer  text-2xl" onClick={Fbrgr}>
            <HiMenuAlt1 />
          </div>
        ) : (
          <div className="sm:hidden cursor-pointer  text-2xl" onClick={Fbrgr}>
            <AiOutlineClose />
          </div>
        )}
        <div className="text-xl font-bold italic tracking-widest">
          بَلِّغْنِي 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
