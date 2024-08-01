const map = new Map() //map does not contains duplicate keys
map.set('IN', "India")
map.set("FR", "France")
map.set('USA', "United States of America")
console.log(map)
map.set('IN', "Bharat") //India will be replaced by Bharat
console.log(map)
map.set('IND', "India")
console.log(map)