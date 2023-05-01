import { z } from "zod";

export const KeyOutForPeriodsSchema = z.enum(["hours", "days", "weeks"]);
