const getYieldForPlant = plant => plant.yield * 1;

const getYieldForCrop = input => input.crop.yield * input.numCrops;
const getTotalYield = ({ crops }) => { // ({}) shorthand to create objects
    const getYieldOfEachCrop = crops.map(crop => getYieldForCrop(crop));
    return getYieldOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const getCostsForCrop = input => input.crop.cost * input.numCrops;


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
};