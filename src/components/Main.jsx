import React from "react";
import Button from "./Button";
import ProfileBlockContainer from "./ProfileBlockContainer";
import SkillsCard from "./SkillsCard";
import ProjectsCard from "./ProjectsCard";
import About from "./About";
import Experience from "./Experience";
const Main = () => {
  return (
    <>
      <div className="ml-0 md:ml-[250px] w-full">
        <Button />
        <div className="mt-[8%]">
          <ProfileBlockContainer />
          <ProjectsCard />
          <SkillsCard />
          {/* <About /> */}
          <Experience />
        </div>
      </div>
    </>
  );
};

export default Main;
