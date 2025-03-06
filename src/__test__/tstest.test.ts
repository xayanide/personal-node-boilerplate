describe("Given a TypeScript ESM test environment", function () {
    describe("When encountering global variables jest and import.meta", function () {
        test("Then jest and import.meta properties are available", function () {
            expect(typeof jest === "undefined").toBeTruthy();
            expect(typeof import.meta.jest === "object").toBeTruthy();
            expect(typeof import.meta.url === "string").toBeTruthy();
        });
    });
});
