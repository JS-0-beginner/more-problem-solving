/// node count.js \\\


/* 
Jungle Zoo 

10animals/mile in the 1st 10 miles

50animals/mile in the 2nd 10 miles (20miles)

100animals/mile after 20miles and so on..

*/

function animalCounter(miles)

{
    const tenAnimals = 10;
    const fiftyAnimals = 50;
    const hundredAnimals = 100;
    if(miles <=10)
    {
        const count = miles * tenAnimals;
        return count;
    }
    else if(miles <=20)
    {
        //First 10-Miles
        const first10miles = 10 * tenAnimals;

        const afterFirst10miles = miles - 10;

        //Second 10-miles
        const second10miles = afterFirst10miles * fiftyAnimals;

        //Total 20-miles
        const totalanimals = first10miles + second10miles;
        return totalanimals;      


    }
    else
    {
        //First 10-Miles
        const first10miles = 10 * tenAnimals;

        //Second 10-miles
        const second10miles = 10 * fiftyAnimals;

        //Rest of the miles
        const restmiles = miles -20;
        const restEntireMiles = restmiles * hundredAnimals;

        //Total 20+miles
        const totalanimals = first10miles + second10miles + restEntireMiles;
        return totalanimals; 


    }
}

const countedanimals = animalCounter(35);
console.log(countedanimals);