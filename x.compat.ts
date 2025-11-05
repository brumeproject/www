import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const data = readFileSync("./out/service.worker.js")
const hash = createHash("sha256").update(data).digest("hex")

writeFileSync(`./out/service_worker.latest.js`, data)
writeFileSync(`./out/service_worker.${hash.slice(0, 6)}.js`, data)