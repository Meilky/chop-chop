import type { Unit } from "../models/unit.ts";
import type { Action } from "./types.ts";

export type ChangeTrunkDiameterAction = Action<"change.trunk.diameter", number>;
export type ChangePreferencesUnitAction = Action<"change.preferences.unit", Unit>;

export type Actions = ChangeTrunkDiameterAction | ChangePreferencesUnitAction;
