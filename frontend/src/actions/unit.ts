import type { Unit } from "../models/unit.ts";
import type { Dispatcher } from "../utils/dispatcher.ts";
import type { Action } from "./types.ts";

export type UnitChangeAction = Action<"unit.change", Unit>;

export function changeUnit(dispatch: Dispatcher<UnitChangeAction>, unit: Unit): void {
    dispatch.dispatch({ type: "unit.change", payload: unit });
}

export type UnitActions = UnitChangeAction;
