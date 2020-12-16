// Given tests
// 6. add given environment factors
const getYieldForPlant = (plant, environmentFactors) => {
    if (!environmentFactors) return plant.yield;

    // Get different environment factors
    for (let [key, value] of Object.entries(environmentFactors)) {
        {
            let factorReference = plant.factors[key];
            let factorValue = factorReference[value];
            console.log('factors' + factorReference + factorValue); // output: factors[ibject Object]-50
            plant.yield = plant.yield * (100 + factorValue) / 100;
        }
    }
    return plant.yield;
}

const getYieldForCrop = input => input.crop.yield * input.numCrops;

const getTotalYield = ({ crops }) => { // ({}) shorthand to create objects
    const getYieldOfEachCrop = crops.map(crop => getYieldForCrop(crop));
    return getYieldOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// 1. Calulate cost for crop
const getCostsForCrop = input => input.crop.cost * input.numCrops;

// 2. Calulate revenue for crop
const getRevenueForCrop = input => input.crop.salePrice * input.numCrops;

// 3. Calculate profit for crop
const getProfitForCrop = input => getRevenueForCrop(input) - getCostsForCrop(input);

// 4. Calculate total profit for multiple crops
const getTotalProfit = ({ crops }) => {
    const getProfitOfEachCrop = crops.map(crop => getProfitForCrop(crop));
    return getProfitOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// 5. BONUS Edit already written functions above to calculate enviroments too


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};