import React from "react";
import { Link } from "react-router-dom";
import { navbarMenu, socialMedia } from "../contant";
import ResumePdf from "../assets/pdf/resume.pdf";
import { useToggle } from "../context/toggle";
import { RxCross2 } from "react-icons/rx";
const Aside = () => {
  const { toggle, toggleMenuHandler } = useToggle();
  return (
    <div className={`w-full md:w-[250px] overflow-hidden fixed  p-0 md:p-5`}>
      <div className=" gap-3 ml-5 hidden md:flex">
        <div className="bg-green w-4 h-4 rounded-full"></div>
        <div className="bg-green w-4 h-4 rounded-full"></div>
      </div>
      {!toggle ? (
        <div className="shadow-2xl bg-inherit hidden md:flex  md:bg-secondary mt-5 w-[230px] rounded-sm  py-7  flex-col">
          {navbarMenu?.map((item) => {
            return (
              <>
                {item.name === "Resume" ? (
                  <a
                    href={ResumePdf}
                    target="_blank"
                    className="flex gap-1 items-center text-white hover:text-gray-300 px-10 transition duration-300 ease-in-out py-3 text-[16px]"
                  >
                    <div className="w-8 h-auto">{item.icon}</div>
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    key={item.id}
                    onClick={() => window.location.replace(item.scrollId)}
                    className="flex gap-1 items-center text-white hover:text-gray-300 px-10 transition duration-300 ease-in-out py-3 text-[16px]"
                  >
                    <div className="w-8 h-auto">{item.icon}</div>
                    {item.name}
                  </Link>
                )}
              </>
            );
          })}

          <p className="text-gray-400 text-md px-4 mt-4">Socials</p>
          <div className="px-10">
            {socialMedia.map((item) => {
              return (
                <Link
                  to={item.linkPath}
                  target="_blank"
                  className="flex gap-3 py-5 items-center  text-white hover:text-gray-300 transition duration-300 ease-in-out  text-[16px]"
                >
                  {item.svg}
                  <div className="w-5 h-auto">{item.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="shadow-2xl h-screen md:hidden bg-secondary overflow-y-hidden w-full rounded-sm  py-7  flex-col">
          <div className="flex justify-end px-5">
            <button className="text-white" onClick={() => toggleMenuHandler()}>
              <RxCross2 className="w-6 h-6" />
            </button>
          </div>
          {navbarMenu?.map((item) => {
            return (
              <>
                {item.name === "Resume" ? (
                  <a
                    href={ResumePdf}
                    target="_blank"
                    className="flex gap-1 items-center text-white hover:text-gray-300 px-10 transition duration-300 ease-in-out py-3 text-[16px]"
                  >
                    <div className="w-8 h-auto">{item.icon}</div>
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    key={item.id}
                    onClick={() =>
                      window.location.replace(item.scrollId) ||
                      toggleMenuHandler()
                    }
                    className="flex gap-1 items-center text-white hover:text-gray-300 px-10 transition duration-300 ease-in-out py-3 text-[16px]"
                  >
                    <div className="w-8 h-auto">{item.icon}</div>
                    {item.name}
                  </Link>
                )}
              </>
            );
          })}

          <p className="text-gray-400 text-md px-4 mt-4">Socials</p>
          <div className="px-10">
            {socialMedia.map((item) => {
              return (
                <Link
                  to={item.linkPath}
                  target="_blank"
                  className="flex gap-3 py-5 items-center  text-white hover:text-gray-300 transition duration-300 ease-in-out  text-[16px]"
                >
                  {item.svg}
                  <div className="w-5 h-auto">{item.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aside;
