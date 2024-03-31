import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [active,setActive] = useState("Home");
  const [toggle,setToggle] = useState(false);
  function handleOnClick(){
    setToggle((prevToggle) =>!(prevToggle));
  }
 

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
  
     <ul className="list-none sm:flex hidden justify-end items-center flex-1">
         {navLinks.map((nav,idx)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${active == nav.title? 'text-white':'text-dimWhite'}  
          ${idx === navLinks.length-1 ? 'mr-0':'mr-10'}` }>
            <a href={`#${nav.id}`} className={`cursor-pointer   `}  onClick={()=>setActive(nav.title)}>{nav.title}</a>
          </li>
         )) }
     </ul>


     <div className="sm:hidden flex flex-1 justify-end items-center ">
       <img src={toggle ? close: menu } onClick={handleOnClick} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer " />

       <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
       <ul className="list-none flex flex-col justify-end items-center flex-1">
         {navLinks.map((nav,idx)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${idx === navLinks.length-1 ? 'mr-0':'mb-4'}` }>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
         )) }
     </ul>
       </div>
     </div>

    </nav>
  );
};

export default Navbar;
