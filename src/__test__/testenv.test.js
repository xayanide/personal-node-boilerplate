describe("Given a JavaScript ESM test environment", function () {
    describe("When using global variables jest and import.meta", function () {
        test("Then 'jest' as a global variable is undefined", function () {
            expect(typeof jest === "undefined").toBeTruthy();
        });
        test("Then import.meta.jest and import.meta.url are available", function () {
            const importMeta = import.meta;
            expect(typeof importMeta.jest === "object").toBeTruthy();
            expect(typeof importMeta.url === "string").toBeTruthy();
        });
    });
});
