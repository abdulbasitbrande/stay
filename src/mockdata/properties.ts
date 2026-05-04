import { generateProperty } from "@/lib/fakerProperty";

export const properties = Array.from({ length: 20 }, (_, i) =>
  generateProperty(i + 1),
);
