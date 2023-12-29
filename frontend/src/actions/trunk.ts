import type { Dispatcher } from "../utils/dispatcher.ts";
import type { Actions } from "./index.ts";

export function changeTrunkDiameter(dispatch: Dispatcher<Actions>, value: number): void {
    dispatch.dispatch({ type: "change.trunk.diameter", payload: value });
}
