import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
      setUsername('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
