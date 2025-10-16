import { useUserContext } from "./context";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const user = useUserContext();

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 w-60">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">Sidebar</h2>
      <div className="space-y-1 text-gray-700">
        <div className="font-medium">Name: {user.name}</div>
        <div>Subscription Status: {user.isSubscribed}</div>
      </div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 w-60">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">Profile</h2>
      <div className="text-gray-700 font-medium">User: {user.name}</div>
    </div>
  );
}
