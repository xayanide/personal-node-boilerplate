import { execSync } from "node:child_process";
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    tagFormat: "${version}",
    branches: ["main", "dev"],
    plugins: [
        ["@semantic-release/commit-analyzer"],
        ["@semantic-release/release-notes-generator"],
        [
            // custom plugin that mutates version
            {
                verifyRelease: function (pluginConfig, context) {
                    const { nextRelease } = context;
                    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                    const gitHash = execSync("git rev-parse --short HEAD").toString().trim();
                    const customVersion = `${nextRelease.version}+${timestamp}.githash.${gitHash}`;
                    context.nextRelease.version = customVersion;

                    // also reflect it in the release notes (optional)
                    context.nextRelease.notes = `**Build:** ${customVersion}\n\n${context.nextRelease.notes}`;
                },
            },
        ],
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
