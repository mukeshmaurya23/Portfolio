import React from "react";

const ProfileBlockContainer = () => {
  return (
    <div className="px-2">
      <img
        src={require("../../src/assets/images/bgImage.png")}
        alt="profileBackground"
        className="h-[148px] md:h-[200px] w-full object-cover rounded-lg shadow-2xl px-1"
      />
    </div>
  );
};

export default ProfileBlockContainer;
