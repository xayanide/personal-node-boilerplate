describe("Given a TypeScript ESM test environment", function () {
    describe("When encountering global variables jest and import.meta", function () {
        test("Then import.meta.jest and import.meta.url are available", function () {
            expect(typeof jest === "undefined").toBeTruthy();
            const importMeta = import.meta;
            expect(typeof importMeta.jest === "object").toBeTruthy();
            expect(typeof importMeta.url === "string").toBeTruthy();
        });
    });
});
