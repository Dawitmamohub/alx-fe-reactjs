import axios from 'axios';

export const advancedUserSearch = async (username, location, minRepos, page = 1, perPage = 30) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
  );
  return response.data;
};
