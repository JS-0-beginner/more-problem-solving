/// node pc-object.js \\\

/// Lets buy a cheap phone \\\

const smartphones =
[
    {name:'Galaxy S5', price:45000, camera:'16px', storage:'64gb'},
    {name:'Redmi 11', price:26000, camera:'12px', storage:'32gb'},
    {name:'Pixel 5', price:32000, camera:'20px', storage:'64gb'},
    {name:'Moto G3', price:18000, camera:'10px', storage:'8gb'},
    {name:'Walton PM3', price:8000, camera:'8px', storage:'4gb'},
];

let cheapest = smartphones[0];
for(const devices of smartphones)
{
    if(devices.price < cheapest.price)
    {
        cheapest=devices;
    }
}
console.log(cheapest);