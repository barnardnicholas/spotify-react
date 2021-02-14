import axios from 'axios';

const config = {
  auth: {
    username: process.env.REACT_APP_CLIENT_ID,
    password: process.env.REACT_APP_CLIENT_SECRET,
  },
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
};

const params = new URLSearchParams();
params.append('grant_type', 'client_credentials');

const getToken = async () => {
  const token = localStorage.getItem('authToken');
  const tokenExpiry = localStorage.getItem('tokenExpiry');
  if (token && tokenExpiry > Date.now()) return token;

  const { data } = await axios.post('https://accounts.spotify.com/api/token', params, config);
  const { access_token, expires_in, token_type } = data;

  const expiry = Date.now() + expires_in * 1000 - 100;
  localStorage.setItem('tokenExpiry', expiry);

  const result = `${token_type} ${access_token}`;
  localStorage.setItem('authToken', result);

  return result;
};

export default getToken;
