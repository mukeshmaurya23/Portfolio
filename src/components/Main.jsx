import React from "react";
import Button from "./Button";
import ProfileBlockContainer from "./ProfileBlockContainer";
import SkillsCard from "./SkillsCard";
import ProjectsCard from "./ProjectsCard";
import About from "./About";
import Experience from "./Experience";
import OtherCategoryCard from "./OtherCategoryCard";
const Main = () => {
  return (
    <>
      <div className="ml-0 md:ml-[290px] lg:ml-[0%] w-full  overflow-hidden">
        <Button />
        <div className="mt-[1%] px-0 md:px-5 mb-5">
          <ProfileBlockContainer />
          <ProjectsCard />
          <SkillsCard />
          {/* <About /> */}
          <Experience />
          <OtherCategoryCard />
        </div>
      </div>
    </>
  );
};

export default Main;
