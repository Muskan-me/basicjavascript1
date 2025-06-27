let items=[];
function fruits(name)
{
    let newItem=items.find(i=>i.Name===name);
    newItem?newItem.count++ : items.push({name,count:1});
    
}
fruits("apple");
fruits("mango");
fruits("orange");

console.log(items);
