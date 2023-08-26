import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white pb-4">Welcome to your page, John!</h1>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quisquam vitae facere perspiciatis? Obcaecati
                    necessitatibus voluptate ad quaerat ullam, vel recusandae
                    unde ipsam dolorem quia assumenda, numquam sapiente commodi.
                    Repellat, a soluta deleniti corrupti voluptas perspiciatis,
                    fuga ea laborum nam porro magni ipsa sequi adipisci maiores
                    labore perferendis hic natus!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-[400px]">
                <h1 className="font-bold mb-2">Current Activity:</h1>
                <p className="">
                    🗺️ frequented locations: <br />
                    🍲 favorite food: <br />
                    ⚽ favorite sport: <br />
                    🎨 favorite color: <br />
                    hobbies: <br />
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
