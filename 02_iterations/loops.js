const evenNums = [2,4,6,8,10]
// for-of loop
for(const num of evenNums)
{
    console.log(num)
}

const Greeting = "Hello World"
for(const char of Greeting)
{
    if(char == " ")
    {
        continue
    }
    else
    {
        console.log(`Each char of Greeting is ${char}`)
    }
}