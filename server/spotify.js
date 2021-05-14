const axios = require('axios');
const { SPOTIFY_TOKEN } = require('../config.js');

// const searchUrl = `https://api.spotify.com/v1/search?q=Stairway+To+Heaven&type=track&limit=1&access_token=${SPOTIFY_TOKEN}`

const getSpotifyLink = () => {
  return axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: `Bearer ${SPOTIFY_TOKEN}`
    },
    params: {
      q: "Stairway%20To%20Heaven",
      type: 'track',
      market: 'US',
      limit: 1
    }
  });
};

console.log(SPOTIFY_TOKEN);
getSpotifyLink()
  .then((result) => {
    console.log('result:', result.data.tracks.items[0].external_urls.spotify);
  })
  .catch((err) => {
    console.log('error:', err);
  })

  module.exports.getSpotifyLink = getSpotifyLink;