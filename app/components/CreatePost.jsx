import React from "react";
import { HiPhotograph } from "react-icons/hi";
import { LuCalendarRange } from "react-icons/lu";
import { SiLibreofficewriter } from "react-icons/si";

const CreatePost = () => {
  return (
    <div className="h-[130px] w-[500px] flex flex-col px-3 py-3 rounded-md bg-white">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-slate-400 p-5"></div>
        <input
          type="text"
          placeholder="Start a post,try writing with AI"
          className="py-2 px-3 w-[500px] border border-black rounded-full"
        />
      </div>
      <div className="mt-5 flex gap-8 justify-center items-center">
        <button className="flex justify-center items-center gap-1 p-3 hover:bg-gray-200">
          <p className="text-blue-500">
            <HiPhotograph size={25} />
          </p>
          Media
        </button>
        <button className="flex justify-center items-center gap-1 p-3 hover:bg-gray-200">
          <p className="text-yellow-600">
            <LuCalendarRange size={25} />
          </p>
          Event
        </button>
        <button className="flex justify-center items-center gap-1 p-3 hover:bg-gray-200">
          <p className="text-orange-600">
            <SiLibreofficewriter size={25} />
          </p>
          Write Article
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
