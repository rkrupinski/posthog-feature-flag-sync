import { array, InferType, object, type Schema } from "yup";

export const features = object({
  results: array()
    .required()
    .of(
      object({
        filters: object({
          payloads: object().test({
            test: (value): value is Record<string, string> =>
              Object.prototype.toString.call(value) === "[object Object]" &&
              Object.entries(value).every(([k, v]) => {
                if (typeof k !== "string" || typeof v !== "string")
                  return false;

                try {
                  JSON.parse(v);
                  return true;
                } catch {
                  return false;
                }
              }),
          }) as Schema<Record<string, string>>,
        }).required(),
      })
    ),
});

export type Features = InferType<typeof features>;

export const isFeatures = (candidate: unknown): candidate is Features =>
  features.isValidSync(candidate);
