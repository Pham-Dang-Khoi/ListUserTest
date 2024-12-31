import React, { useState } from 'react';
import BaIcon from "../Icon/ba.png";
import devIcon from "../Icon/developer.png";
import MaIcon from "../Icon/manager.png";
import TeIcon from "../Icon/tester.png";

export default function Sidebar({ setRole }) {
  // const [activeRole, setActiveRole] = useState("dev");

  const handleRoleClick = (role) => {
    // setActiveRole(role);
    setRole(role);
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="">
        <div className="">
          <p className="">NgLearn</p>
        </div>
        <div>
          <ul>
            <li
              className="flex cursor-pointer"
              onClick={() => handleRoleClick("dev")}
            >
              <img src={devIcon} className="h-6 bg-cover" />
              <p className="">Developer</p>
            </li>
            <li
              className="flex cursor-pointer"
              onClick={() => handleRoleClick("test")}
            >
              <img src={TeIcon} className="h-6 bg-cover" />
              <p className="">Tester</p>
            </li>
            <li
              className="flex cursor-pointer"
              onClick={() => handleRoleClick("ba")}
            >
              <img src={BaIcon} className="h-6 bg-cover" />
              <p className="">Business Analysis</p>
            </li>
            <li
              className="flex cursor-pointer"
              onClick={() => handleRoleClick("manager")}
            >
              <img src={MaIcon} className="h-6 bg-cover" />
              <p className="">Manager</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}