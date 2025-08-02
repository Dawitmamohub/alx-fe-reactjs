import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {user && (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">{user.name || user.login}</h2>
          {user.bio && <p className="mt-2">{user.bio}</p>}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
