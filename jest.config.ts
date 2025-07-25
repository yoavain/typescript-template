import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    transform: {
        "^.+\\.ts$": ["ts-jest", {
            tsconfig: "tsconfig.json",
            isolatedModules: true
        }]
    },
    testEnvironment: "node",
    testRegex: "test/.*.test.ts$",
    moduleFileExtensions: ["ts", "js", "json", "node"],
    maxWorkers: "50%",
    verbose: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "text",
        "text-summary",
        "json",
        "lcov",
        "clover"
    ],
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"]
};

export default config;
