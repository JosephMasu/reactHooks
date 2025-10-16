import { Profile, Sidebar } from './Compenent';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}