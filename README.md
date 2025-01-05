# PostHog Feature Flag Sync

Blog post: https://rkrupinski.com/post/feature-flags-done-right

Getting started:

- Install dependencies (`npm install`)
- Copy the `.env.example` file into `.env` and populate the `POSTHOG_PROJECT_ID` and `POSTHOG_API_KEY` fields with values obtained from [PostHog](https://posthog.com). Ensure that the API key has the necessary permissions to read feature flag configurations for the corresponding project.
- Run the script (`npm start`)
