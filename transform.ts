#!/usr/bin/env ts-node

import { isFeatures } from "./schema";

let input = "";

process.stdin.on("data", (chunk) => {
  input += chunk.toString();
});

process.stdin.on("end", () => {
  if (!input) return;

  const data = JSON.parse(input);

  if (isFeatures(data)) {
    data.results.forEach((result) => {
      Object.entries(result.filters.payloads).forEach(([key, value]) => {
        result.filters.payloads[key] = JSON.parse(value);
      });
    });

    process.stdout.write(JSON.stringify(data));
  }
});
