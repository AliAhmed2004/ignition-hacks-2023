import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-blue-600 pb-4">Welcome to your page, John!</h1>
            <div className="flex gap-4">
                <button className="border-white border-4 p-6">yo</button>
                <button className="border-white border-4 p-6">hello</button>
            </div>
        </div>
    );
};

export default Dashboard;
