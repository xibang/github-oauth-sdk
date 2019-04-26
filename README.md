# @xibang/github-oauth-sdk

[![npm](https://img.shields.io/npm/v/@xibang/github-oauth-sdk.svg)](https://npmjs.org/package/@xibang/github-oauth-sdk) [![npm](https://img.shields.io/npm/dm/@xibang/github-oauth-sdk.svg)](https://npmjs.org/package/@xibang/github-oauth-sdk) [![npm](https://img.shields.io/npm/dt/@xibang/github-oauth-sdk.svg)](https://npmjs.org/package/@xibang/github-oauth-sdk)

## 说明

由于该项目过于简单，暂不发布。请直接查阅源码

## 示例

### 获取登录地址

```js
const SDK = require('@xibang/github-oauth-sdk');

const sdk = SDK({
  client_id: 'xxx',
  client_secret: 'xxx',
  redirect_uri: 'http://xxxx/callback/github'
});

console.log(sdk.authorize_url({
  scope: 'user',
  state: 'testxxx'
}));
```

### 获取 Access Token

```js
const SDK = require('@xibang/github-oauth-sdk');

const sdk = SDK({
  client_id: 'xxx',
  client_secret: 'xxx',
  redirect_uri: 'http://xxxx/callback/github'
});

sdk.access_token({ code: 'xxxxxx' }).then(console.log);
// { access_token: 'xxxxxx',
//   token_type: 'bearer',
//   scope: 'user' }
```

## License

Apache 2.0

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
