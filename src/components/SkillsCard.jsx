import React from "react";
import { skillsData } from "../contant";
import { randomColorData } from "../contant";
const SkillsCard = () => {
  const color = skillsData.frontEnd.map((item, index) => {
    return randomColorData(index);
  });

  console.log(color, "color");
  return (
    <div className="py-8 px-4">
      <h2 className="text-xl font-bold text-white mb-4">Technical Skills</h2>
      <div className="flex flex-wrap justify-around gap-11">
        <div className="mt-3 flex flex-col w-full md:w-1/5 bg-secondary">
          <h2 className="text-white text-md  mb-2 px-3 py-2">FrontEnd</h2>
          <div className="flex flex-wrap">
            {skillsData.frontEnd.map((item, index) => {
              return (
                <>
                  <div className="  p-5 py-3">
                    <button
                      style={{
                        border: `1px solid ${randomColorData(index)}`,
                      }}
                      className={` text-white px-3 py-2 rounded-md text-xs   `}
                    >
                      {item.name}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="mt-3 flex flex-col w-full md:w-1/5 bg-secondary px-3 py-3  ">
          <h2 className="text-white text-md  mb-2 px-3 py-2">Backend</h2>
          {skillsData.Backend.map((item, index) => {
            return (
              <>
                <div className=" p-5 py-3">
                  <button
                    style={{
                      border: `1px solid ${randomColorData(index)}`,
                    }}
                    className={` text-white px-3 py-2 rounded-md text-xs`}
                  >
                    {item.name}
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-3 flex flex-col w-full md:w-1/5 px-3 py-2 bg-secondary ">
          <h2 className="text-white text-md  mb-2 px-3 py-2">Database</h2>
          {skillsData.Database.map((item, index) => {
            return (
              <>
                <div className=" p-5 py-3">
                  <button
                    style={{
                      border: `1px solid ${randomColorData(index)}`,
                    }}
                    className={` text-white px-3 py-2 rounded-md text-xs  `}
                  >
                    {item.name}
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-3 flex flex-col w-full md:w-1/5 bg-secondary px-3 py-2">
          <h2 className="text-white text-md  mb-2 px-3 py-2">DevOps</h2>
          {skillsData.devOps.map((item, index) => {
            return (
              <div className="flex">
                <div className="  p-5 py-3">
                  <button
                    style={{
                      border: `1px solid ${randomColorData(index)}`,
                    }}
                    className={` text-white px-3 py-2 rounded-md text-xs  `}
                  >
                    {item.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
