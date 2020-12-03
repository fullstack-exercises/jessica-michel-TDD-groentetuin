// const getYieldForPlant = (plant) => plant.yield * 1; // works

const getYieldForPlant = (plant) => {
    const yieldForPlant = plant.yield * 1; // Cannot read property 'yield' of undefined, but works with above??
    return yieldForPlant;
}
getYieldForPlant();

const getYieldForCrop = (crop) => {
    const output = crop.yield * crop.input.numCrops;
    console.log(crop.yield); // Cannot read property 'yield' of undefined
    console.log('test');
    return output;
}
getYieldForCrop();

module.exports = {
    getYieldForPlant,
    getYieldForCrop
};