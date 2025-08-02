import React, { useState } from 'react';

const Search = ({ onSearch, loading, error, user }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
      setUsername('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      {user && (
        <div className="mt-6 bg-white rounded shadow p-4 text-center">
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
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
