/// node shopping-object.js \\\

console.log('');
/* 

const products =
[
    {name:'Bag', price:1200,},
    {name:'T-shirts', price:250,},
    {name:'Trimmer', price:650,}
];

let totalprice = 0;

for(const product of products)
{
    totalprice = totalprice + product.price;
}
console.log('Total Price : ',totalprice,'$');

 */

const cart =
[
    {name:'Bag',        price:1200,     quantity: 1},
    {name:'T-shirts',   price:250,      quantity: 4},
    {name:'Trimmer',    price:650,      quantity: 1},
    {name:'Mask',       price:50,       quantity: 3}
];

let totalexpences = 0;
for(const product of cart)
{
    
    console.log(product);

    const totalproduct = product.price*product.quantity;

    totalexpences = totalexpences + totalproduct;
}
console.log('');
console.log('Total-Price :',totalexpences,'$');