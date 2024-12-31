import React from "react";
import UserIcon from "../Icon/user.png"
import GridIcon from "../Icon/grid.png"

export default function Header({ search, setSearch }) {
  return (
    <div>
      <div className="">
        <h1 className="">User Account Management</h1>
        <div className="">
          <img src={UserIcon} className="w-auto h-6 mr-2 bg-cover" />
          <img src={GridIcon} className="w-auto h-6 mr-2 bg-cover" />
        </div>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search name"
          className=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}