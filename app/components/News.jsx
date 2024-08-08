import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

function News() {
  return (
    <div className="h-[350px] w-[400px] p-2 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h1>Linkedin News</h1>
        <button className="p-1 hover:bg-gray-300 rounded-full">
          <IoInformationCircleOutline size={30} />
        </button>
      </div>
      <h3 className="text-slate-500 py-2">Top Stories</h3>
      {data.map((d)=>(
        <div key={d.id} className='mb-5'>
            <h2 className='font-bold text-md'>{d.title}</h2>
            <p className='text-sm text-slate-600'>{d.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default News;

const data = [
  {
    id: 1,
    title: "OpenAi lays off 140 people",
    desc:"5 days ago . 7215 readers"
  },
  {
    id: 2,
    title: "ShareChat lays off 40 people",
    desc:"2 days ago . 5915 readers"
  },
  {
    id: 3,
    title: "Infosys makes employees work 90hrs a week",
    desc:"8 days ago . 3245 readers"
  },
  {
    id: 4,
    title: "Dell to launch new laptop next year",
    desc:"6 days ago . 1815 readers"
  },
];
