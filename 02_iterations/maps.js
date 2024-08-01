const map = new Map() //map does not contains duplicate keys
map.set('IN', "India")
map.set("FR", "France")
map.set('USA', "United States of America")
console.log(map)
map.set('IN', "Bharat") //India will be replaced by Bharat
console.log(map)
map.set('IND', "India")
console.log(map)

for(const [value, key] of map) // first will always be key no matter what name we give to that
{
    console.log(value, "-", key)
}

for(const [key, value] of map) // first will always be key no matter what name we give to that
{
    console.log(key, " :- ", value)
}

// objects 
const object = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for(const [key, value] of object)
{
    console.log(key, " " , value)
}