declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTHOG_PROJECT_ID: string;
      POSTHOG_API_KEY: string;
      OUTPUT_DIR: string;
      FILENAME: string;
    }
  }
}

export {};
