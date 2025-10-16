import { Profile, Sidebar } from "./Compenent";

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-6">
      <Sidebar />
      <Profile />
    </div>
  );
}
