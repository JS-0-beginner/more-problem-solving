/// node add-multiply.js \\\

/* 
Needed wood for furniture

chairwood   = 3cft/chair
tablewood   = 10cft/table
bedwood     = 50cft/bed

*/

console.log('');

function neededWood(chairQuantity, tableQuantity, bedQuantity)
{
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // for chair
    const chairWoodQuantity = chairQuantity * perChairWood;
    // for table
    const tableWoodQuantity = tableQuantity * perTableWood;
    // for bed
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;

}

const totalWood = neededWood(4,6,4);
console.log('Needed Wood :',totalWood,'cft');