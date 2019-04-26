const assert = require('assert');
const { authorize_url, access_token } = require('./helpers');

module.exports = ({ client_id, redirect_uri, client_secret } = {}) => {
  if (!client_id || !redirect_uri) {
    assert.fail('The params client_id & redirect_uri is required.');
  }

  return {
    authorize_url: params => authorize_url({ client_id, redirect_uri, scope: 'user', ...params }),
    access_token: params => access_token({ client_id, redirect_uri, client_secret, ...params })
  };
};
