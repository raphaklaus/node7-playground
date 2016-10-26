const request = require('request-promise');

async function getWebSite() {
    var result = await request('http://www.google.com.br');
    console.log(result);
}

getWebSite();
