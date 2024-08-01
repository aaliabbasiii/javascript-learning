const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // return books of history genre
  const res = books.filter( (b) => b.genre === 'History')
  console.log(res);

// return books published after 2000
const r = books.filter( (b) => { return b.publish > 2000 })
console.log(r);
console.log("==================================");

//return books with non-fiction genre and published in or before 1992
const e = books.filter( (b) => b.genre === 'Non-Fiction' && b.publish <= 1992)
console.log(e);

console.log("======================================================================");
console.log("======================================================================");

const nums = [1,2,3,4,5,6,7,8,9,10]
const re = nums.map( (n) => n+10)
console.log((re));

// Chaining -> use more than one method  at a time 
// multiple all even nums with 10
const result = nums.filter( (n) => n%2 == 0).map( (num) => num * 10)
console.log(result);

console.log("======================================================================");

// reduce() method
const result1 = nums.reduce( (a, num) => {
    console.log(`accumulator: ${a}, and num: ${num}`);
    return a+num
}, 0)
console.log(result1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalAmount = shoppingCart.reduce( (totalPrice, item) => {
    return item.price + totalPrice
}, 0)
console.log(totalAmount);