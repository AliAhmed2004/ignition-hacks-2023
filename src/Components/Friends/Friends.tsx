import { useState } from "react";
import logo from "./logo.png";
import Image from "next/image";

const App = () => {
  const [open, setOpen] = useState(true);

  const Friends = [
    { id: 1, name: "Friend 1", profileSrc: "friend1_profile" },
    { id: 2, name: "Friend 2", profileSrc: "friend2_profile" },
    { id: 3, name: "Friend 3", profileSrc: "friend3_profile" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src={logo}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="logo"
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="logo"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Friends List
          </h1>
        </div>
        <ul className="pt-6">
          {Friends.map((friend) => (
            <li
              key={friend.id}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
            >
              <Image src={logo} className="w-8 h-8 rounded-full" alt="logo" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {friend.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
    </div>
  );
};

export default App;
