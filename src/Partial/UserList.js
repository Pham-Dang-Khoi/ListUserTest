import React, { useEffect, useState } from "react";
import { fetchUserList } from "../Module/getListUser";
import UserCard from "./UserCard";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function UserList() {
  const [lstUser, setLstUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [role, setRole] = useState("dev");
  const [gender, setGender] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const users = await fetchUserList(role);
      setLstUser(users);
    };
    loadUsers();
  }, [role]);

  useEffect(() => {
    let users = lstUser;

    if (gender !== "all") {
      users = users.filter((user) => user.gender === gender);
    }

    if (search) {
      users = users.filter((user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredUsers(users);
  }, [lstUser, gender, search]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar setRole={setRole} />
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col p-4 w-full col-span-10">
        <Header search={search} setSearch={setSearch} />
        <div className="">
          <h1 className="">User List</h1>
          <div className="">
            <p className="">Gender:</p>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className=""
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredUsers.map((user, index) => (
            <UserCard
              key={index}
              picture={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              gender={user.gender}
              email={user.email}
              country={user.location.country}
              phoneNumber={user.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}