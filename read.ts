#!/usr/bin/env ts-node

import "dotenv/config";

const { POSTHOG_PROJECT_ID, POSTHOG_API_KEY } = process.env;

if (!POSTHOG_PROJECT_ID || !POSTHOG_API_KEY) {
  console.log("Missing POSTHOG_PROJECT_ID or POSTHOG_API_KEY");
  process.exit(1);
}

fetch(
  `https://us.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/feature_flags?limit=999`,
  { headers: { Authorization: `Bearer ${POSTHOG_API_KEY}` } }
)
  .then((res) => {
    if (!res.ok) return;

    return res.json();
  })
  .then((data) => {
    if (data) process.stdout.write(JSON.stringify(data));
  });
