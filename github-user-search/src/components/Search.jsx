import React, { useState } from 'react';
import { advancedUserSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (pageNumber = 1) => {
    setLoading(true);
    setError('');
    try {
      const data = await advancedUserSearch(username, location, minRepos, pageNumber);
      if (pageNumber === 1) {
        setResults(data.items || []);
      } else {
        setResults(prev => [...prev, ...(data.items || [])]);
      }
      setTotalCount(data.total_count || 0);
      setPage(pageNumber);
    } catch (err) {
      setError('Looks like we cant find the user(s)');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(1);
  };

  const loadMore = () => {
    handleSearch(page + 1);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          type="number"
          min="0"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
          placeholder="Min Repos"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="col-span-1 sm:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {results.map(user => (
          <div key={user.id} className="border rounded p-4 shadow text-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {results.length > 0 && results.length < totalCount && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
