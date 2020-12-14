const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
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
    test("Get total yield with multiple crops", () => {
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

    test("Get total yield with 0 amount", () => {
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
    test("Get costs for a single crop", () => {
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
    test("Get costs for a 0 crops", () => {
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
    test("Get revenue for a single crop", () => {
        const apples = {
            name: "apples",
            salePrice: 2,
        };
        const input = {
            crop: apples,
            numCrops: 5,
        };
        expect(getRevenueForCrop(input)).toBe(10);
    });
    test("Get revenue for a single crop with amount 0", () => {
        const bananas = {
            name: "bananas",
            salePrice: 2,
        };
        const input = {
            crop: bananas,
            numCrops: 0,
        };
        expect(getRevenueForCrop(input)).toBe(0);
    });
});

// 3. Calulate profit for crop
describe("getProfitForCrop", () => {
    test("Get profit for crop", () => {
        const bananas = {
            name: "bananas",
            salePrice: 2,
            cost: 1,
        };
        const input = {
            crop: bananas,
            numCrops: 4,
        };
        expect(getProfitForCrop(input)).toBe(4);
    });
    test("Get profit for crop with amount 0", () => {
        const bananas = {
            name: "bananas",
            salePrice: 2,
            cost: 1,
        };
        const input = {
            crop: bananas,
            numCrops: 0,
        };
        expect(getProfitForCrop(input)).toBe(0);
    });
});

// 4. Calulate total profit for multiple crops
describe("getTotalProfit", () => {
    test("Get profit for multiple crops", () => {
        const bananas = {
            name: "bananas",
            yield: 3,
            cost: 2,
            salePrice: 4,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            salePrice: 4,
            cost: 2,
        };
        const crops = [
            { crop: bananas, numCrops: 5 }, // 10
            { crop: pumpkin, numCrops: 2 }, // 4
        ];
        expect(getTotalProfit({ crops })).toBe(14);
    });
});