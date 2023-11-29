import React from "react";
import { aboutInfo, experienceData } from "../contant";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Experience = () => {
  return (
    <div className="py-4 px-4 ">
      <h2 className="text-xl font-bold text-white mb-4">Experience</h2>
      <div className="px-2 md:px-8 py-4">
        <ol class="relative z-10 text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
          {experienceData?.map((item) => {
            return (
              <li class="mb-10 ms-6" key={item.id}>
                <span class="absolute flex items-center justify-center w-8 h-8 bg-green rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    class="w-3.5 h-3.5 text-black dark:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 class="font-medium leading-tight">{item?.companyName}</h3>
                <p class="text-sm mt-2">
                  <i class="font-bold">{item?.designation}</i> |{" "}
                  {item?.duration}
                </p>

                <ol className="list-inside list-disc">
                  {item.description.map((data) => (
                    <li className="flex items-start  py-3 w-full">
                      {" "}
                      <span className="mr-2">•</span>
                      <p className="text-sm w-full">{data?.text}</p>
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <h3 class="font-medium leading-tight py-2" id="about">
              About
            </h3>
            <ol className="list-inside list-disc">
              <li className="flex items-start  py-3">
                {" "}
                <span className="mr-2">•</span>
                <p className="text-sm">{aboutInfo?.description}</p>
              </li>
              <li className="flex items-start  py-3 cursor-pointer">
                {" "}
                <span className="mr-2">•</span>
                <p className="text-sm font-bold">
                  <MdOutlineMailOutline className="inline-block mr-2" />
                  {aboutInfo?.email}
                </p>
              </li>
              <li className="flex items-start  py-3 cursor-pointer">
                {" "}
                <span className="mr-2">•</span>
                <p className="text-sm font-bold">
                  <FaPhoneAlt className="inline-block mr-2" />
                  {aboutInfo?.phone}
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
