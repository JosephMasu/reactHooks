import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export interface User {
  isSubscribed: string;
  name: string;
}

interface DemoProps {}

export default function UseContextDemo({}: DemoProps) {
  const [user] = useState<User>({
    isSubscribed:  'yes',
    name: 'Masu',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}