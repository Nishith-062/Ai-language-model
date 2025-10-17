import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegChessQueen } from "react-icons/fa6";
import Quests from "../components/Quests";
import { FaBookBookmark } from "react-icons/fa6";

const Exercise = () => {
  return (
    <div className="flex justify-between p-5 gap-10">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-10 items-center w-full">
          <div className="flex justify-between px-5 items-center border border-base-300 rounded-lg shadow-md w-[50%]">
            <div className="">
              <h1 className="text-3xl font-bold text-center mt-5">Unit 1</h1>
              <p className="text-center text-gray-600 mb-6">
                Learn the basics of Spanish
              </p>
            </div>
            <button className="btn border-b-8 border-green-600 bg-green-500 text-white">
              <FaBookBookmark className="text-amber-50" />
              continue
            </button>
          </div>
          <div className="grid grid-cols-3 grid-rows-5">
            <button className="btn grid-cols-subgrid col-start-2 btn-circle border-b-8 border-green-800  bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>
            <button className="btn btn-circle grid-cols-subgrid col-start-1 grid-rows-subgrid row-start-2 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>
            <button className="btn btn-circle grid-cols-subgrid col-start-2 grid-rows-subgrid row-start-3 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>
            <button className="btn btn-circle grid-cols-subgrid col-start-1 grid-rows-subgrid row-start-4 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>

            <button className="btn btn-circle grid-cols-subgrid col-start-2 grid-rows-subgrid row-start-5 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegChessQueen className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>

                <div className="flex flex-col gap-10 items-center w-full">
          <div className="flex justify-between px-5 items-center border border-base-300 rounded-lg shadow-md w-[50%]">
            <div className="">
              <h1 className="text-3xl font-bold text-center mt-5">Unit 1</h1>
              <p className="text-center text-gray-600 mb-6">
                Learn the basics of Spanish
              </p>
            </div>
            <button className="btn border-b-8 border-green-600 bg-green-500 text-white">
              <FaBookBookmark className="text-amber-50" />
              continue
            </button>
          </div>
          <div className="grid grid-cols-3 grid-rows-5">
            <button className="btn grid-cols-subgrid col-start-2 btn-circle border-b-8 border-green-800  bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>
            <button className="btn btn-circle grid-cols-subgrid col-start-1 grid-rows-subgrid row-start-2 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>
            <button className="btn btn-circle grid-cols-subgrid col-start-2 grid-rows-subgrid row-start-3 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>
            <button className="btn btn-circle grid-cols-subgrid col-start-1 grid-rows-subgrid row-start-4 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegStar className="w-8 h-8 text-white" />
            </button>

            <button className="btn btn-circle grid-cols-subgrid col-start-2 grid-rows-subgrid row-start-5 border-b-8 border-green-800 bg-green-500 p-0 w-18 h-18 flex items-center justify-center">
              <FaRegChessQueen className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* quest */}
      <Quests />
    </div>
  );
};

export default Exercise;
