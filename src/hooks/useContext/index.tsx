/* eslint-disable no-empty-pattern */
import { useState } from "react";

import { DashboardContext } from "./context";
import Dashboard from "./Dashboard";

export interface User {
  isSubscribed: string;
  name: string;
}

interface DemoProps {}

export default function UseContextDemo({}: DemoProps) {
  const [user] = useState<User>({
    isSubscribed: "yes",
    name: "Masu",
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8">🌟 useContext Demo</h1>

      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
