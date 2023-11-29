import React from "react";
import { aboutInfo } from "../contant";
const About = () => {
  const [showMore, setShowMore] = React.useState(false);
  const onCLickHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="px-4 py-4">
      <h2 className="text-xl font-bold text-white mb-4" id="about">
        About
      </h2>
      <div className="bg-white shadow-lg rounded-md p-4 max-w-[500px]">
        <p className="text-secondary text-[14px]  ">
          {showMore
            ? aboutInfo.description
            : aboutInfo.description.slice(0, 100) + "..."}
        </p>
        <button
          className="text-white text-sm bg-secondary px-3 py-2 rounded-md mt-4"
          onClick={onCLickHandler}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default About;
