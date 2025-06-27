//Task 1........................


/*let fruits=["apple", "mango", "orange"]
let fruits2=["banana"]
let add=fruits.concat(fruits2);
console.log(add);*/

//Task 2..................

/*let items=[];
function fruits(name)
{
    let newItem=items.find(i=>i.Name===name);
    newItem?newItem.count++ : items.push({name,count:1});
    
}
fruits("apple");
fruits("mango");
fruits("orange");

console.log(items);*/

//Task 3..................
let items=[];
function fruits(name,count)
{
    let newItem=items.find(i=>i.Name===name);
    newItem?newItem.count+=count:items.push({name,count});
    
}
fruits("apple",5);
fruits("mango",7);
fruits("orange",3);

console.log(items);
