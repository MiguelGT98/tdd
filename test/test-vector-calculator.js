const assert = require("assert");

describe("Vector Calculator", () => {
  describe("#sum", () => {
    const v1 = { x: 4, y: 3 };
    const v2 = { x: 1, y: 3 };

    it("Should sum vector a and b", () => {
      assert.deepEqual({ x: 5, y: 6 }, VectorCalculator.sum(v1, v2));
    });
  });

  describe("#sub", () => {
    const v1 = { x: 4, y: 3 };
    const v2 = { x: 1, y: 3 };

    it("Should subtract vector a and b", () => {
      assert.deepEqual({ x: 3, y: 0 }, VectorCalculator.sub(v1, v2));
    });
  });

  describe("#scalar", () => {
    const v1 = { x: 4, y: 3 };
    const x = 3.5;

    it("Should scale the given vector by x", () => {
      assert.deepEqual({ x: 14.0, y: 10.5 }, VectorCalculator.scalar(a, x));
    });
  });

  describe("#dot", () => {
    const v1 = { x: 4, y: 3 };
    const v2 = { x: 1, y: 3 };

    it("Should calculate the dot product between v1 and v2", () => {
      assert.equal(13, VectorCalculator.dot(v1, v2));
    });
  });
});
