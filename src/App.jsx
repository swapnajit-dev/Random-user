import { useEffect, useState } from "react";
import React from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const randomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    randomUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">User Details</h1>
        {user ? (
          <div className="text-center">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
            />
            <p className="text-lg font-semibold text-gray-700">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <button
              onClick={randomUser}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Fetch Another User
            </button>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
