import { prepare as npmPrepare } from "@semantic-release/npm";
import fs from "fs";
import { execSync } from "child_process";

export function prepare(pluginConfig, context) {
    const { nextRelease, logger } = context;

    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const gitHash = execSync("git rev-parse --short HEAD").toString().trim();

    const customVersion = `${nextRelease.version}+${timestamp}.githash.${gitHash}`;

    logger.log(`Overriding version: ${nextRelease.version} → ${customVersion}`);

    const pkgPath = "package.json";
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    pkg.version = customVersion;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

    return npmPrepare(pluginConfig, {
        ...context,
        nextRelease: { ...nextRelease, version: customVersion },
    });
}
