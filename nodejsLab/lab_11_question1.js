/**
 * Create a simple Node script that converts 'www.miu.edu' domain name
 *  to the equivalent IP address. (Search and learn 'dns' module, resolve4) - 
 * For this exercise, you need to look up Node.js API by yourself 
 */

let dns = require("dns")
console.log(dns);

dns.lookup("www.miu.edu", (err, address, family) => {
    console.log('IP address: %j family: IPv%s', address, family);
})
