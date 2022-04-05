let numbers =(array) =>{
  console.log(`Array given: \n [${array}]`)
array.sort((a,b) =>
  {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}
)

 console.log(`Array ordered in an ascending order:\n [${array}] \n`)
}
numbers([12,2,1,25,20,76,4,23,5])
numbers([-6, 10, 5, -7,-4])
numbers([0.5, 4.7, 3.3])


