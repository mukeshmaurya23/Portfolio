import React from "react";

const ProfileBlockContainer = () => {
  return (
    <div className=" ">
      <img
        src={require("../../src/assets/images/bgImage.png")}
        alt="profileBackground"
        className="h-[148px] md:h-[200px] w-full object-cover rounded-md shadow-2xl px-1"
      />
    </div>
  );
};

export default ProfileBlockContainer;
