import React from "react";

const Landing = () => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col">
      <div className="h-20 w-full bg-slate-900">yo</div>
      <div className="mx-auto w-full">
        <div className="flex gap-0">
          <div className="h-16 w-1/4 bg-blue-600 p-1">
            <button className="flex w-full h-full items-center justify-center bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-800 ">
              <h1 className="text-2xl font-black text-white">Profile</h1>
            </button>
          </div>
          <div className="h-16 w-1/4 bg-blue-600 p-1">
            <button className="flex w-full h-full items-center justify-center bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-800 ">
              <h1 className="text-2xl font-black text-white">Friends</h1>
            </button>
          </div>
          <div className="h-16 w-1/4 bg-blue-600 p-1">
            <button className="flex w-full h-full items-center justify-center bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-800 ">
              <h1 className="text-2xl font-black text-white">Changelogs</h1>
            </button>
          </div>
          <div className="h-16 w-1/4 bg-blue-600 p-1">
            <button className="flex w-full h-full items-center justify-center bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-800 ">
              <h1 className="text-2xl font-black text-white">Support</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
