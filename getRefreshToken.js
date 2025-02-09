import fetch from 'node-fetch';

const client_id = process.env.SPOTIFY_CLIENT_ID || '';
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || '';
const redirect_uri = 'http://localhost:3000';
const code = process.env.SPOTIFY_AUTH_CODE || ''; // Replace with your code

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    }),
  });

  const data = await response.json();
  console.log(data);
}

getToken().catch(console.error);
