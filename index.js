const request = require('request-promise');

var numbers = [1,2,3];

async function getWebSite() {
    var result = await request('http://www.google.com.br');
    console.log(result);
}

getWebSite();

console.log(numbers.includes(1));
