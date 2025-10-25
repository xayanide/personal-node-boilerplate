import fs from "fs";
import { execSync } from "child_process";

export function prepare(config, context) {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const gitHash = execSync("git rev-parse --short HEAD").toString().trim();
    const newa = `${context.nextRelease.version}+${timestamp}.githash.${gitHash}`;
    context.nextRelease.version = newa;
    pkg.version = newa;
    fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
    context.logger.log(`Version updated with build metadata: ${pkg.version}`);
}
