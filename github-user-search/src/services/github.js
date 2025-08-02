import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const fetchGitHubUser = async (username) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: token ? `token ${token}` : undefined
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
