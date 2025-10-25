import { prepare as npmPrepare } from "@semantic-release/npm";
import { execSync } from "child_process";

export function prepare(pluginConfig, context) {
    const { nextRelease } = context;

    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const gitHash = execSync("git rev-parse --short HEAD").toString().trim();

    const customVersion = `${nextRelease.version}+${timestamp}.githash.${gitHash}`;
    return npmPrepare(pluginConfig, {
        ...context,
        nextRelease: { ...nextRelease, version: customVersion },
    });
}
