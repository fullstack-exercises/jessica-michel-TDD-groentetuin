const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop
} = require("./garden");

// Make available test pass 
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// 1. Calulate cost for crop
describe("getCostsForCrop", () => {
    test("Calculate costs for a single crop", () => {
        const corn = {
            name: "corn",
            cost: 1,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
    test("Calculate costs for a 0 crops", () => {
        const corn = {
            name: "corn",
            cost: 1,
        };
        const input = {
            crop: corn,
            numCrops: 0,
        };
        expect(getCostsForCrop(input)).toBe(0);
    });
});

// 2. Calulate revenue for crop
describe("getRevenueForCrop", () => {
    test("Calculate revenue for a single crop", () => {
        const apples = {
            name: "apples",
            price: 2,
        };
        const input = {
            crop: apples,
            amount: 5,
        };
        expect(getRevenueForCrop(input)).toBe(10);
    });
    test("Calculate revenue for a single crop with amount 0", () => {
        const bananas = {
            name: "bananas",
            price: 2,
        };
        const input = {
            crop: bananas,
            amount: 0,
        };
        expect(getRevenueForCrop(input)).toBe(0);
    });
});