// Given tests
const getYieldForPlant = plant => plant.yield * 1;

const getYieldForCrop = input => input.crop.yield * input.numCrops;

const getTotalYield = ({ crops }) => { // ({}) shorthand to create objects
    const getYieldOfEachCrop = crops.map(crop => getYieldForCrop(crop));
    return getYieldOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// 1. Calulate cost for crop
const getCostsForCrop = input => input.crop.cost * input.numCrops;

// 2. Calulate revenue for crop
const getRevenueForCrop = input => input.crop.price * input.amount;


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop
};