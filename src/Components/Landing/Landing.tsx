import React from "react";
import logo from "./VAB-TRANSPARENT-LOGO.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col px-36">
      <Image className="object-scale-down h-64 w-64" src={logo} alt="" />
      <div className="font-mono mx-auto w-full">
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
      <div className="w-full h-20"></div>
      <div className="gap-10 font-mono w-full h-[500px] flex flex-col items-center">
        <p>Welcome to V.A.B.</p>
        <p>
          We are a "social media" that aims for more of the personal side rather
          than social
        </p>
        <p>Share about yourself and show the world who you are!</p>
        <p>
          If others want they can find more about you by redirtecting themselves
          to other socials linked on your personal profile
        </p>
        <p>
          Connect with friends too, so others can see who you are mutuals with
        </p>
        <p>
          We are still in early development, however future updates we hope to
          add a way to update your current activities!
        </p>
        <p>
          Enter in where you currently are, what your doing, or even some music
          you recently listened too
        </p>
      </div>
    </div>
  );
};

export default Landing;
