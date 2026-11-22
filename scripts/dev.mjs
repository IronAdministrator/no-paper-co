// Starts the site (Vite+) and Storybook together. Extra arguments go to the site;
// --host is translated for Storybook, which needs a value (`--host 0.0.0.0`).
import { spawn } from "node:child_process";

const args = process.argv.slice(2);
const hostIndex = args.findIndex((a) => a === "--host" || a.startsWith("--host="));
let storybookHost = [];
if (hostIndex !== -1) {
  const arg = args[hostIndex];
  const next = args[hostIndex + 1];
  const value = arg.includes("=")
    ? arg.split("=")[1]
    : next && !next.startsWith("-")
      ? next
      : "0.0.0.0";
  storybookHost = ["--host", value];
}

const jobs = [
  { name: "app", cmd: "vp", args: ["dev", ...args] },
  {
    name: "storybook",
    cmd: "storybook",
    args: ["dev", "-p", "6006", "--no-open", ...storybookHost],
  },
];

const children = jobs.map(({ name, cmd, args: jobArgs }) => {
  const child = spawn(cmd, jobArgs, {
    stdio: ["inherit", "pipe", "pipe"],
    shell: process.platform === "win32",
  });
  const prefix = (stream, out) =>
    stream.on("data", (chunk) => {
      for (const line of chunk.toString().split(/\r?\n/))
        if (line) out.write(`[${name}] ${line}\n`);
    });
  prefix(child.stdout, process.stdout);
  prefix(child.stderr, process.stderr);
  child.on("exit", (code) => {
    if (code) {
      console.error(`[${name}] exited with code ${code}`);
      stopAll(code);
    }
  });
  return child;
});

function stopAll(code = 0) {
  for (const child of children) if (child.exitCode === null) child.kill("SIGTERM");
  process.exit(code);
}

process.on("SIGINT", () => stopAll());
process.on("SIGTERM", () => stopAll());
