const qs = require('qs');
const axios = require('axios');

exports.authorize_url = params => `https://github.com/login/oauth/authorize?${qs.stringify(params)}`;

exports.access_token = params => axios.post('https://github.com/login/oauth/access_token', params, {
  headers: {
    Accept: 'application/json'
  }
}).then(x => x.data);
