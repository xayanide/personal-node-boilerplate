import { greet } from "../nameJs.js";

describe("greet()", () => {
    test("should return a greeting message for a valid name", () => {
        expect(greet("John")).toBe("Hello, John!");
    });

    test("should throw an error if the name is an empty string", () => {
        expect(() => {
            return greet("");
        }).toThrow("Invalid name provided");
    });

    test("should throw an error if the name is not a string", () => {
        expect(() => {
            return greet(123);
        }).toThrow("Invalid name provided");
        expect(() => {
            return greet({});
        }).toThrow("Invalid name provided");
        expect(() => {
            return greet([]);
        }).toThrow("Invalid name provided");
    });

    test("should throw an error if the name is only whitespace", () => {
        expect(() => {
            return greet("   ");
        }).toThrow("Invalid name provided");
    });
});
