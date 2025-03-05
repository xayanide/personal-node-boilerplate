/** From https://github.com/kulshekhar/ts-jest/blob/main/examples/js-with-ts/jest-esm.config.mjs */
import { createJsWithTsEsmPreset } from "ts-jest";

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    displayName: "js-with-ts",
    testMatch: ["**/test/**/*.test.{js,cjs,mjs,ts}"],
    ...createJsWithTsEsmPreset({
        tsconfig: "./tsconfig.json",
    }),
    coverageDirectory: "./coverage",
    coveragePathIgnorePatterns: ["node_modules"],
};
