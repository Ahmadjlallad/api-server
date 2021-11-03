"use strict";

const { app } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(app);
const { db } = require("../src/models/index");

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});
describe("Web server", () => {
  test("Should respond with 404 status on an invalid method", async () => {
    const response = await mockRequest.get("/foo");
    expect(response.status).toBe(404);
  });

  it("should add food and clothes", async () => {
    const food = await mockRequest.post("/food").send({
      name: "1212",
      calories: "1",
      original_place: "3",
    });
    const clothes = await mockRequest.post("/clothes").send({
      type_name: "jinz",
      color: "jinz",
      size: "jinz",
      brand: "jinz",
    });

    expect(food.status).toBe(201);
    expect(clothes.status).toBe(201);
  });

  it("should read from the database and return all of the records clothes and food", async () => {
    const food = await mockRequest.get("/food");
    const clothes = await mockRequest.get("/clothes");
    expect(food.status).toBe(200);
    expect(clothes.status).toBe(200);
  });

  // test if can read one person
  it("should return a record wither form clothes or food ", async () => {
    const food = await mockRequest.get("/food/1");
    const clothes = await mockRequest.get("/clothes/1");
    expect(food.status).toBe(200);
    expect(clothes.status).toBe(200);
  });

  // test if can update a person
  it("should update a record", async () => {
    const food = await mockRequest.put("/food/1").send({
      type_name: "jinz",
      color: "jinz",
      size: "jinz",
      brand: "jinz",
    });
    const clothes = await mockRequest.put("/clothes/1").send({
      type_name: "jinz",
      color: "black",
      size: "36",
      brand: "LCwakiki",
    });
    expect(food.status).toBe(201);
    expect(clothes.status).toBe(201);
  });
  // test if can delete a person
  it("should delete a record", async () => {
    const food = await mockRequest.delete("/food/1");
    const clothes = await mockRequest.delete("/clothes/1");
    expect(food.status).toBe(204);
    expect(clothes.status).toBe(204);
  });
});
