import { AppPropsType } from "next/dist/shared/lib/utils";

export type NextAuthComponentType = AppPropsType["Component"] & {
  auth?: boolean;
};
