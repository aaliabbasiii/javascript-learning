const coding = ["js", "java", "cpp" , "c", "ruby", "python"]
coding.forEach(function (item) {
    console.log(item)
})

// arrow function with forEach
console.log("====== With arrow function")
coding.forEach( (item) => {
    console.log(item)
})

//call back function with forEach
console.log("====== With CallBack function")
function printMe(item)
{
    console.log(item)
}
coding.forEach(printMe)

console.log("============================")
// forEach has also other parameters
coding.forEach((item, index, arr1) => {
    console.log(item, index, arr1)
})

const arr = [
    obj1 = {
        name: "Aali",
        age: 22
    },
    obj2 = {
        name: "Amna",
        age: 10
    },
    obj3 = {
        name: "Azmi",
        age: 3
    }
]

arr.forEach((item, index, completeArray) => {
   console.log(item, index, completeArray)
})

console.log("============================")

arr.forEach((item, index, arr) => {
    if(index == 1)
    {
        for(const key in item)
        {
            console.log(item[key])
        }
    }
})

console.log("============================")

const arr2 = [
    {
        name: "Aali",
        age: 22
    },
    {
        name: "Amna",
        age: 10
    },
    {
        name: "Azmi",
        age: 3
    }
]

const values = arr2.forEach( (item) => {
    console.log(item.name)
    console.log(item.age)
})

console.log(values); //forEach does not return anything

