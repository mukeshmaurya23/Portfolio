import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { moreProjectsData } from "../contant";
const MoreProjectsCard = () => {
  return (
    <div className="flex flex-col w-full">
      {moreProjectsData?.map((data) => {
        return (
          <>
            <div
              className="flex flex-row mb-2 mb-5 cursor-pointer justify-between items-center"
              // style={{
              //   borderBottom: "1px solid green",
              // }}
            >
              <div className="flex  px-4 gap-2">
                <img
                  src={data?.image}
                  alt=""
                  className="object-contain w-[2rem]  rounded-full"
                />
                <div className="px-2 py-1">
                  <h2 className="text-gray-400 font-semibold text-sm">
                    {data?.name}
                  </h2>

                  <p className="text-xs text-gray-500">
                    {data?.techStack?.map((item, index, array) => (
                      <React.Fragment key={item}>
                        {item}
                        {index !== array.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center pr-3 cursor-pointer">
                <IoIosArrowForward className="text-gray-400" />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MoreProjectsCard;
