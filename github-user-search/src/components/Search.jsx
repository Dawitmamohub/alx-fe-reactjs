import { useState } from 'react';
import { fetchUserData, advancedUserSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSingleUser(null);
    setResults([]);

    try {
      const user = await fetchUserData(username);
      setSingleUser(user);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSingleUser(null);
    setResults([]);

    try {
      const data = await advancedUserSearch(username, location, minRepos);
      setResults(data.items || []);
    } catch (err) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">GitHub User Search</h2>

      <form onSubmit={handleBasicSearch} className="mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Basic Search
        </button>
      </form>

      <form onSubmit={handleAdvancedSearch}>
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Advanced Search
        </button>
      </form>

      {loading && <p className="text-gray-700 mt-4">Loading...</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      {singleUser && (
        <div className="mt-4 border p-4 rounded shadow">
          <img src={singleUser.avatar_url} alt={singleUser.login} className="w-16 h-16 rounded-full mb-2" />
          <h3 className="text-lg font-bold">{singleUser.name || singleUser.login}</h3>
          <p>
            <a
              href={singleUser.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Advanced Search Results:</h3>
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="flex items-center space-x-4 border p-3 rounded">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-medium">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    View Profile
                  </a>
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
