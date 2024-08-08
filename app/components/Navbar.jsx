import React from "react";
// import { CiAirportSign1, CiSearch } from "react-icons/ci";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { PiUsersFourLight } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full p-2 flex justify-around items-center">
      <div className="flex justify-start items-center gap-1">
        <button className="text-blue-600">
          <Link href="/Home">
            <RiLinkedinBoxFill size={45} />
          </Link>
        </button>
        <input
          type="text"
          className="py-2 bg-slate-100 rounded-md px-6"
          placeholder="Search"
        />
        {/* <button className='hidden lg:absolute left-[325px]'><CiSearch size={20}/></button> */}
      </div>
      <div className="hidden md:flex gap-6 items-center text-slate-600">
        <ul className="flex items-center gap-6">
          <li className="flex flex-col justify-center items-center cursor-pointer hover:text-black">
            <IoMdHome size={25} />
            <Link href="/Home">Home</Link>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer hover:text-black">
            <PiUsersFourLight size={25} /> Network
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer hover:text-black">
            <IoBriefcaseOutline size={25} />
            Jobs
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer hover:text-black">
            <BiSolidMessageRoundedDetail size={25} />
            Messaging
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer hover:text-black">
            <IoNotifications size={25} />
            Notification
          </li>
        </ul>
        <button className="rounded-xl px-4 py-1 border border-blue-500">
          Signin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
