// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData, fetchUsersByAdvancedSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);
    setUsers([]);
    try {
      const user = await fetchUserData(username);
      setUser(user);
    } catch (err) {
      setError("Looks like we cant find the user"); // fixed message
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);
    setUsers([]);
    try {
      const results = await fetchUsersByAdvancedSearch(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError('Error fetching advanced results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      {/* Basic Search */}
      <form onSubmit={handleBasicSearch} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search by username"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Advanced Search */}
      <form onSubmit={handleAdvancedSearch} className="mb-4">
        <div className="grid grid-cols-1 gap-2">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g. Ethiopia)"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum Repositories"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Advanced Search
        </button>
      </form>

      {/* Results */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {user && (
        <div className="mt-4 p-4 border border-gray-200 rounded text-center">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="mt-2 text-xl font-semibold">{user.name || user.login}</h2>
          <p className="text-gray-600">{user.location}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}

      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Advanced Search Results</h3>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="p-4 border border-gray-200 rounded">
                <div className="flex items-center space-x-4">
                  <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="text-md font-bold">{user.login}</h4>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
