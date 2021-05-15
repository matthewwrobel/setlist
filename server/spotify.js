const axios = require('axios');
const { SPOTIFY_TOKEN } = require('../config.js');

const getSpotifyLink = (song, artist) => {

  return axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: `Bearer ${SPOTIFY_TOKEN}`
    },
    params: {
      q: `track:${song} artist:${artist}`,
      type: 'track',
      market: 'US',
      limit: 1
    }
  });
};

module.exports.getSpotifyLink = getSpotifyLink;