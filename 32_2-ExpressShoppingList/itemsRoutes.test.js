process.env.NODE_ENV = "test";

const { get } = require("superagent");
const request = require("supertest");

const app = require("./app");
let items = require("./fakeDb");

let list = [
    { 
        name: "pickles",
        price: 2.99
    }, 
    {
        name: "bananas",
        price: 0.19
    }
];

const apiPrefix = "/api/items"

beforeEach(() => {
    for (let item of list) {
        items.push(item);
    };
});

afterEach(() => {
    items.length = 0;
});

describe("GET /items", () => {
    test("Show all items on list", async () => {
        const resp = await request(app).get(`${apiPrefix}/`);
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual({items: list});
    });
    test("Get an item by name", async() => {
        const resp = await request(app).get(`${apiPrefix}/${list[0].name}`);
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual({item: list[0]});
    });
    test("Try to get a non-existent item returns 404", async() => {
        const resp = await request(app).get(`${apiPrefix}/buffalo_chips`);
        expect(resp.statusCode).toBe(404);
    });
});

// describe("POST /items", () => {
//     test("Adding an item to list", async() => {
//         const resp = await request(app).post(`${apiPrefix}`).send({ name: "pudding",
//             price: 1.99 });
//         expect(resp.statusCode).toBe(201);
//         expect(resp.body).toEqual({ 
//             added: {
//                 name: "pudding",
//                 price: 1.99
//             }
//         });
//     });
//     test("Adding an item with invalid data", async () => {
//         const resp = await request(app).post(`${apiPrefix}`).send({ 
//             nom: "frommage_bleu",
//             prix: 10 
//         });
//         expect(resp.statusCode).toBe(400);
//     });
// });

// describe("PATCH /items/:name", () => {
//     test("Updating an item's price", async() => {
//         const resp = await request(app).patch(`${apiPrefix}/${list[0].name}`).send({ price: 0.95});
//         expect(resp.statusCode).toBe(200);
//         expect(resp.body).toEqual({ updated: { 
//             name: list[0].name,
//             price: 0.95 } 
//         });
//     });
//     test("Changing an item's name", async() => {
//         const resp = await request(app).patch(`${apiPrefix}/${list[0].name}`).send({ name: "dill_pickles"});
//         expect(resp.statusCode).toBe(200);
//         expect(resp.body).toEqual({ updated: { 
//             name: "dill_pickles",
//             price: list[0].price } 
//         });
//     });
//     test("Trying to change an invalid item returns 404", async() => {
//         const resp = await request(app).patch(`${apiPrefix}/buffalo_chips`).send({ price: 0.10 });
//         expect(resp.statusCode).toBe(404);
//     });
// });

// describe("DELETE /items/:name", () => {
//     test("Deleting an item from list", async() => { 
//         const resp = await request(app).delete(`${apiPrefix}/${list[0].name}`);
//         expect(resp.statusCode).toBe(200);
//         expect(resp.body).toEqual({ message: 'Deleted' });
//     });
//     test("Attempt to delete a non-existent cat returns 404", async() => {
//         const resp = await request(app).delete(`${apiPrefix}/Piggles`);
//         expect(resp.statusCode).toBe(404);
//     });
// });