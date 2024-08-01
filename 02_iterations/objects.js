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
console.log("")
const array = [2,3,4,5,76,7]
for(const val in array)
{
    console.log(val)
}
console.log()
for(const val in array)
{
    console.log(array[val])
}