import { Dispatcher } from "../utils/dispatcher.ts";
import { EventEmitter } from "../utils/event-emitter.ts";

import type { Unit } from "../models/unit.ts";
import type { Actions } from "../actions/index.ts";

interface Events {
    changed: [Unit];
}

export class UnitStore extends EventEmitter<Events> {
    private _unit: Unit = "in";

    constructor(dispatch: Dispatcher<Actions>) {
        super();

        dispatch.register((data: Actions) => this._handleEvents(data));
    }

    public get(): Unit {
        return this._unit;
    }

    private _handleEvents(data: Actions): void {
        switch (data.type) {
            case "change.preferences.unit":
                this._onChange(data.payload);
                break;
        }
    }

    private _onChange(unit: Unit): void {
        if (this._unit === unit) return;

        this._unit = unit;

        this.emit("changed", unit);
    }
}
