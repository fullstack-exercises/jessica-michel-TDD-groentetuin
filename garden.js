// Given tests
// 6. add given environment factors
const getYieldForPlant = (plant, environmentFactors) => {
    if (!environmentFactors) return plant.yield;

    const getAllEnvironmentFactors = Object.values(environmentFactors).toString();
    console.log(getAllEnvironmentFactors);
    // Get different environment factors
    switch (environmentFactors.sun) {
        case 'low':
            plant.yield = plant.yield * (100 + plant.factors.sun.low) / 100;
            break;
        case 'medium':
            plant.yield = plant.yield * (100 + plant.factors.sun.medium) / 100;
            break;
        case 'high':
            plant.yield = plant.yield * (100 + plant.factors.sun.medium) / 100;
            break;
        default:
            plant.yield = plant.yield * (100 + plant.factors.sun.medium) / 100;
    }

    switch (environmentFactors.wind) {
        case 'low':
            plant.yield = plant.yield * (100 + plant.factors.wind.low) / 100;
            break;
        case 'medium':
            plant.yield = plant.yield * (100 + plant.factors.wind.medium) / 100;
            break;
        case 'high':
            plant.yield = plant.yield * (100 + plant.factors.wind.high) / 100;
            break;
        default:
            plant.yield = plant.yield * (100 + plant.factors.wind.medium) / 100;
    }

    return plant.yield;
}

// temporary code, option with Object.keys factors

// const getAllEnvironmentFactors = Object.values(environmentFactors).toString();

// console.log(Object.values(environmentFactors)[0]);
// console.log(Object.keys(plant.factors)[0]);
// for (i = 0; i < 3; i++) {
//     const getCurrentFactor = Object.keys(plant.factors)[i];
//     switch (Object.values(environmentFactors)[i]) {
//         case 'low':
//             plant.yield = plant.yield * (100 + getCurrentFactor.low) / 100;
//         case 'middle':
//             plant.yield = plant.yield * (100 + getCurrentFactor.medium) / 100; // todo: change to plant.factors....
//             break;
//         case 'high':
//             plant.yield = plant.yield * (100 + getCurrentFactor.medium) / 100; // todo: change to plant.factors....
//             break;
//         default:
//             plant.yield = plant.yield * (100) / 100; // todo: change to plant.factors....
//     }
// }

// temporary code, option with Object.keys factors

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