import React from "react";
import { othersCategoryData } from "../contant";
import { IoMdTime } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
const OtherCategoryCard = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-white mb-4 px-5">
        Other Categories
      </h2>

      <div className="flex flex-wrap px-5  text-white gap-[30px]">
        {othersCategoryData?.map((item) => {
          return (
            <div className="flex flex-col justify-around md:cursor-pointer">
              <div key={item.id}>
                <img
                  src={item.image}
                  alt="image"
                  className="w-full md:w-[200px] h-auto md:h-[100px]  object-fill shadow-2xl"
                />
                <div className="w-full h-[6px] bg-green"></div>
              </div>
              <h2 className="font-semibold text-gray-400 text-sm py-2">
                {item?.name}
              </h2>
              <div className="flex justify-between">
                <p className=" text-xs text-gray-500">
                  <FaCode className="inline-block mr-1" />
                  {item?.code}
                </p>
                <p className="text-xs text-gray-500">
                  <IoMdTime className="inline-block mr-1" />
                  {item?.timeStamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OtherCategoryCard;
