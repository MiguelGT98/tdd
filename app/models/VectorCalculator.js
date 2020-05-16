class VectorCalculator {
  constructor() {}

  static sum(v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
  }

  static sub(v1, v2) {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
  }

  static scalar(v1, x) {
    return { x: v1.x * x, y: v1.y * x };
  }

  static dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }
}

module.exports = VectorCalculator;
