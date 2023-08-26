"use client";

import Image from "next/image";
import Friends from "@/Components/Friends/Friends";
import Dashboard from "@/Components/Dashboard/Dashboard";
import Landing from "@/Components/Landing/Landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <Dashboard />
      <Friends />
    </div>
  );
}
