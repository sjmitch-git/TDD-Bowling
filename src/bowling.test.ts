import { bowling } from "../src/bowling";

// When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss
describe("test bowling function", () => {
  it("should return 300 for a perfect game", () => {
    expect(bowling("X X X X X X X X X XXX")).toBe(300);
  });
  it("should return 90 for bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')", () => {
    expect(bowling("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });
  it("should return 150 for a spare every frame with a 5", () => {
    expect(bowling("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
  });
});
