import { bowling } from "../src/bowling";

// When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss
describe("test bowling function", () => {
  it("should return 300 for bowling('X X X X X X X X X X X X')", () => {
    // X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
    expect(bowling("X X X X X X X X X X X X")).toBe(300);
  });
  it("should return 90 for bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')", () => {
    // 9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
    expect(bowling("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });
  it("should return 150 for bowling('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5')", () => {
    // 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150
    expect(bowling("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
  });
});
