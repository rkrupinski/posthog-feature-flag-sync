#!/usr/bin/env ts-node

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import "dotenv/config";

const { OUTPUT_DIR, FILENAME } = process.env;

if (!OUTPUT_DIR || !FILENAME) {
  console.log("Missing OUTPUT_DIR or FILENAME");
  process.exit(1);
}

let input = "";

process.stdin.on("data", (chunk) => {
  input += chunk.toString();
});

process.stdin.on("end", () => {
  if (!input) {
    console.error("Failed");
    return;
  }

  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  writeFileSync(
    join(OUTPUT_DIR, FILENAME),
    `export const features = ${input} as const;`
  );

  console.log("Success");
});
