/// node duplicate.js \\\

console.log('');

const names = ['Abir', 'Likhon', 'Prottoy', 'Abir', 'Arko', 'Sayad', 'Arafat', 'Sumon', 'Shakil', 'Rabin', 'Shohag', 'Rasel', 'Rizvi', 'Likhon', 'Abir', 'Arafat', 'Shakil', 'Likhon', 'Abir', 'Prottoy', 'Mehedi', 'Shakil'];

function removeDuplicates(names)
{
    const unique = [];
    /* 
    for(let i=0; i<names.length; i++)
    {
        const element = names[i];
        console.log(element);
    }
     */
    for(const element of names)
    {
        console.log(element);
    if(unique.indexOf(element)== -1)
        {
            unique.push(element);
        }
    }
    return unique;
}

var allElements = removeDuplicates(names);
console.log(allElements);