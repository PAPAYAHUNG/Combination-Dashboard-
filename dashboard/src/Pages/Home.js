import React from "react";
import Mainzone from "../Components/Mainzone";
import Sidebar from "../Components/Sidebar";
import { useStateContext } from "../context/ContextProvider";

function Home() {
  const { activeMenu, setActiveMenu } = useStateContext();
  console.log({ activeMenu });

  return (
    <div className="relative flex dark:bg-main-dark-bg ">
      <div
        className={`fixed bg-slate-500 min-h-full
             ${activeMenu ? " w-72" : "w-0"}`}
      >
        {activeMenu && <Sidebar />}
      </div>
      <div
        className={`absolute bg-red-600 w-full min-h-full
             ${activeMenu ? "ml-72" : "ml-0"}`}
      >
        <Mainzone />
      </div>
    </div>
  );
}

export default Home;