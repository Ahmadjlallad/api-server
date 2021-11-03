// NOTE "11:45";
const logger = require("../src/middleware/logger");
describe("logger middleware test", () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  test("should call the console.log function", () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  test("should move to next middleware correctly", () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
