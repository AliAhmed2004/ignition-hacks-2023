import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-900">
            <h1 className="text-white pb-4 mt-8">Welcome to your page, Bob!</h1>
            <div className="flex gap-4 pb-4 font-bold">
                <button className="border-white border-4 p-6 hover:bg-pink-500">
                    Instagram
                </button>
                <button className="border-white border-4 p-6 hover:bg-blue-500">
                    Twitter
                </button>
                <button className="border-white border-4 p-6 hover:bg-cyan-500">
                    LinkedIn
                </button>
            </div>
            <div className="flex gap-4 pb-4 font-bold">
                <button className="border-white border-4 p-6 hover:bg-red-500">
                    Youtube
                </button>
                <button className="border-white border-4 p-6 hover:bg-slate-500">
                    Github
                </button>
                <button className="border-white border-4 p-6 hover:bg-indigo-500">
                    Steam
                </button>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-[400px]">
                <h1 className="font-bold mb-2">About Me:</h1>
                <p className="">
                    Hello guys, my name is Bob! I'm a 2nd year student at
                    Wilfrid Laurier University, studying Computer Science with a
                    minor in finance. I recently went on a trip with my friends
                    to California! We visisted the Metagooglzon headquarters.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-[400px]">
                <h1 className="font-bold mb-2">Current Activity:</h1>
                <p className="">
                    🗺️ frequented locations: California
                    <br />
                    🍲 favorite food: shawarma
                    <br />
                    ⚽ favorite sport: badminton
                    <br />
                    🎨 favorite color: green
                    <br />
                    💼 university / work: WLU <br />
                    🪀 hobbies: hiking, cooking, and woodworking
                    <br />
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
