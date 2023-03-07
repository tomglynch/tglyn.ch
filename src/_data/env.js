// src/_data/env.js

const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://www.tglyn.ch';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;


module.exports = function() {
  return { 
    prodUrl: prodUrl,
    environment: environment,
    isProd: isProd,
  }
};

