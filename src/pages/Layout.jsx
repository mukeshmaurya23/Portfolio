import React from "react";
import Aside from "../components/Aside";
import Main from "../components/Main";
import { useToggle } from "../context/toggle";

const Layout = () => {
  const { toggle } = useToggle();
  return (
    <>
      <Aside />
      {toggle ? (
        <> </>
      ) : (
        <div className="ml-0 md:ml-[250px] w-full  overflow-hidden">
          <Main />
        </div>
      )}
    </>
  );
};

export default Layout;
