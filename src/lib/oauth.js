const qs = require('qs');
const axios = require('axios');

const OAUTH_URL = 'https://github.com/login/oauth';

exports.authorize_url = params => `${OAUTH_URL}/authorize?${qs.stringify(params)}`;

exports.access_token = params => axios.post(`${OAUTH_URL}/access_token`, params, {
  headers: {
    Accept: 'application/json'
  }
}).then(x => x.data);
