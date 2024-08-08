import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="h-[400px] w-[300px] flex flex-col rounded-md bg-white shadow-md">
      <div className="rounded-t-md h-[110px] w-full bg-gray-500 mb-7"></div>
      <div className="rounded-full w-9">
        <Image src="" alt="" />
      </div>
      <div className='p-2'>
        <h1 className='text-center font-bold text-lg'>Niruth Ananth</h1>
        <p className="text-slate-500 text-sm text-center">niruthananth03@gmail.com</p>
        <hr className="text-gray-600 w-[250px] mx-auto mt-3 mb-3" />
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Post Impressions</p>
          <p className="text-blue-600">88</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-500">Post Impressions</p>
          <p className="text-blue-600">88</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
