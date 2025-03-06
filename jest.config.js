/** https://github.com/jestjs/jest/issues/9430 */
/**
Jest uses CommonJS by default but we want ESM.
test.js are files treated as ESM when transform is {} and "type": "module"
test.ts files are treated as ESM when transform is handled by another transformer

jest as a global variable will not be available with ESM, so you gotta use import.meta.jest to access it
until they have proper support with ESM. You can also just import { jest } from "@jest/globals" as well,
but that can trigger a no-shadow error for ESLint, so that rule is disabled for test files.
*/

export default {
    verbose: true,
    detectOpenHandles: true,
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".jsx", ".ts", ".tsx", ".mts"],
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
    /**
    For errors related to:
    Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'.
    */
    moduleNameMapper: {
        "^(\\.{1,2}/.*/llhttp\\.wasm\\.js)$": "$1",
        "(.+)\\.js": "$1",
    },
    coverageDirectory: "./coverage",
};
