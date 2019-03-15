const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(withImages(withCSS({ target: 'serverless' })));
