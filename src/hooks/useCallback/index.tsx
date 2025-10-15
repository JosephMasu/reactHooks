/* UseCallbackDemo.tsx */
import { useCallback, useState } from 'react';
import { shuffle } from './utils';
import Search from './Search';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export default function UseCallbackDemo() {
  const [users, setUsers] = useState(allUsers);
  console.log(users[0]); 

  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter((user) =>
      user.includes(text),
    );
    setUsers(filteredUsers);
  }, [users]); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20">
        <h1 className="text-2xl font-semibold text-white text-center mb-6 tracking-wide">
          🔍 User Search Demo
        </h1>

        <div className="flex items-center justify-between mb-6 gap-2">
          <button
            onClick={() => setUsers(shuffle(allUsers))}
            className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Shuffle 🔁
          </button>
          <Search onChange={handleSearch} />
        </div>

        <ul className="divide-y divide-white/20">
          {users.length > 0 ? (
            users.map((user) => (
              <li
                key={user}
                className="text-white text-lg py-2 capitalize hover:text-yellow-300 transition-colors"
              >
                {user}
              </li>
            ))
          ) : (
            <li className="text-gray-200 italic text-center py-4">
              No users found 😢
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
