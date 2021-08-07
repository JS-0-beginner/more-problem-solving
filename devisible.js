//// node pc-devisible.js \\\

for(let i =0; i<=50; i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log('Loosers');
    }
    else if (i%3==0)
    {
        console.log('Three-Idiots');
    }
    else if (i%5==0)
    {
        console.log('Power-Rangers');
    }
    else
    {
        console.log(i);
    }
}