import Image from "next/image";
import Dashboard from "@/Components/Dashboard/Dashboard";
import Landing from "@/Components/Landing/Landing";
import Friends from "@/Components/Friends/Friends";

export default function Home() {
    return (
        <div>
            <Landing />
            <Dashboard />
            <Friends />
        </div>
    );
}
