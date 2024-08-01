// objects 
const object = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Runy',
    swift : 'swift by apple'
}
// for-in loop is used for objects
for(const key in object)
{
    console.log(key) 
}
console.log("")
for(const key in object)
{
    console.log(key, ":-", object[key])
}