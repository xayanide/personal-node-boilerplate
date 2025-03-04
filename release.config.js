/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    tagFormat: "${version}",
    branches: ["main", "dev"],
    plugins: [
        ["@semantic-release/commit-analyzer"],
        ["@semantic-release/release-notes-generator"],
        // { npmPublish } is disabled by default only if the "private" property
        // in package.json is true.
        ["@semantic-release/npm"],
        ["@semantic-release/github"],
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "package-lock.json"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
    ],
};
