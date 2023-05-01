import { RouterInputs, RouterOutputs } from "~/utils/api";

export type Announce = RouterOutputs["announce"]["getAll"][0];
export type AnnounceCreated = RouterOutputs["announce"]["create"];
export type AnnounceCreateInput = RouterInputs["announce"]["create"];
