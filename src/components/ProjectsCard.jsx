import React from "react";
import { projectsData } from "../contant";
import MoreProjectsCard from "./MoreProjectsCard";

const ProjectsCard = () => {
  return (
    <div className=" py-4 md:py-16 px-4">
      <h2 className="text-xl font-bold text-white mb-4" id="projects">
        Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5 ">
        {projectsData?.map((item) => {
          return (
            <>
              <a target="_blank" href="https://github.com/mukeshmaurya23">
                <div class="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                  <img
                    src={item.image}
                    className="object-contain md:object-cover h-auto md:h-[133px] w-full "
                  />
                  <div class="flex flex-col px-4 py-2 h-24">
                    <div class="flex font-bold">{item.name}</div>

                    <div class="flex  text-xs ">
                      {item?.techStack?.map((item, index, array) => (
                        <React.Fragment key={item}>
                          {item}
                          {index !== array.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </>
          );
        })}
        <div className="text-white bg-secondary mt-0 mb-0 lg:-mt-[5rem] lg:-mb-[5rem] rounded-md shadow-2xl ">
          <h2 className="text-xl px-3 py-3 text-gray-400 font-semibold mb-0 md:mb-4">
            More Projects
          </h2>
          <MoreProjectsCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
