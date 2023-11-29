import React from "react";

const ProfileBlockContainer = () => {
  return (
    <div className="mt-5 w-full ">
      <img
        src={require("../../src/assets/images/bgImage.png")}
        alt="profileBackground"
        className="object-cover rounded-2xl w-full h-[200px]"
      />
    </div>
  );
};

export default ProfileBlockContainer;
