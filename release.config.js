import * as nodeChildProcess from "node:child_process";
const COLONS_HYPHENS = /[:-]/g;
const DOTS = /\./;

function onRelease(a) {
    console.log(a);
    const timestamp = new Date().toISOString().replace(COLONS_HYPHENS, "").replace(DOTS, "Z");
    const hash = nodeChildProcess.execSync("git rev-parse --short HEAD").toString().trim();
    return `${a.version}+${timestamp}.githash.${hash}`;
}
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    tagFormat: onRelease,
    branches: ["main", "dev"],
    plugins: [
        ["@semantic-release/commit-analyzer"],
        ["@semantic-release/release-notes-generator"],
        // { npmPublish } is disabled by default only if the "private" property
        // in package.json is true.
        ["@semantic-release/npm", { npmPublish: false }],
        ["@semantic-release/github"],
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "package-lock.json"],
                /** Don't use [skip ci] because branch-syncer workflow would no longer work. */
                message: "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
            },
        ],
    ],
};
