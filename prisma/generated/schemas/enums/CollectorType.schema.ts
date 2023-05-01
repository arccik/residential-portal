import { z } from "zod";

export const CollectorTypeSchema = z.enum(["oneTime", "regular"]);
