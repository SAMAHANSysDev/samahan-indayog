const Wordpress = require('wpapi');

const wp = new Wordpress({
  endpoint: 'https://samahan-api.addu.edu.ph/wp-json',
})

wp.samahanTv = wp.registerRoute('wp/v2', '/samahan_tv_fiesta/(?P<id>\\d+)' );

module.exports = wp;