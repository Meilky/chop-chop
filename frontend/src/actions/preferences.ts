import type { Unit } from "../models/unit.ts";
import type { Dispatcher } from "../utils/dispatcher.ts";
import type { Actions } from "./index.ts";

export function changePreferredUnit(dispatch: Dispatcher<Actions>, unit: Unit): void {
    dispatch.dispatch({ type: "change.preferences.unit", payload: unit });
}
