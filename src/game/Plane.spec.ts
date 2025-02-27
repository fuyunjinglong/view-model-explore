import { expect, it, describe } from "vitest";
import { setupPlane } from "./Plane";

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 1,
};

describe("Plane", () => {
  describe("move", () => {
    it("moveDown", () => {
      const plane = setupPlane({}, defaultOptions);
      plane.moveDown();
      expect(plane.y).toBe(1);
    });

    it("moveUp", () => {
      const plane = setupPlane({}, defaultOptions);
      plane.moveUp();
      expect(plane.y).toBe(-1);
    });

    it("moveLeft", () => {
      const plane = setupPlane({}, defaultOptions);
      plane.moveLeft();
      expect(plane.x).toBe(-1);
    });

    it("moveRight", () => {
      const plane = setupPlane({}, defaultOptions);
      plane.moveRight();
      expect(plane.x).toBe(1);
    });
  });
});
