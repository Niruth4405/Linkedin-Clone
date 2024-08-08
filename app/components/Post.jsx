import React from "react";
import { FaAws } from "react-icons/fa";
import { AiFillLike, AiOutlineComment, AiOutlineSend } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";

const Post = () => {
  return (
    <div className=" mt-2 w-[500px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b">
        <div className='flex justify-center items-center'>
          <FaAws className="w-8 h-8 text-blue-500" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold ">Amazon Web Services (AWS)</h2>
            <p className="text-sm text-gray-600">
              9,462,579 followers · Promoted
            </p>
          </div>
        </div>
        <button className="text-blue-400 p-2 hover:bg-blue-100">Follow</button>
      </div>
      <div className="p-4">
        <p className="text-gray-700">
          Join the innovators using SAP on AWS. 🚀 Discover three key strategies
          to boost revenue, productivity, and customer satisfaction.
        </p>
        <div className="mt-4 bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg text-white text-center">
          <h3 className="text-xl font-bold">
            Unlock your innovation potential with AWS for SAP
          </h3>
          <button className="mt-4 bg-white text-blue-500 font-semibold px-4 py-2 rounded-full">
            Download
          </button>
        </div>
        <p className="text-center text-gray-500 mt-2">
          Get the latest AWS resources for free
        </p>
      </div>
      <div className="p-4 flex items-center justify-center border-t">
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <AiFillLike className="w-5 h-5 mr-1" /> Like
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <AiOutlineComment className="w-5 h-5 mr-1" /> Comment
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <RiShareForwardLine className="w-5 h-5 mr-1" /> Repost
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <AiOutlineSend className="w-5 h-5 mr-1" /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
