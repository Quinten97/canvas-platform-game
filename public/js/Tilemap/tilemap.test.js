import { levelSelect } from "./tilemap.js";
import { describe, expect, it } from "@jest/globals";
describe("returns platform data based on argument passed in", () => {
  const levelOneTestData = [
    [0, 4900, 1080, 1000, 1],
    [800, 4200, 300, 100, 1],
    [0, 3500, 250, 100, 1],
    [600, 2800, 250, 100, 1],
    [725, 2700, 120, 100, 2],
  ];
  it("returns level one platforms when 1 is passed in as the argument", () => {
    expect(levelSelect(1)).toEqual(levelOneTestData);
  });
});
