import { Dispatcher } from "../utils/dispatcher.ts";
import { EventEmitter } from "../utils/event-emitter.ts";

import type { UnitActions } from "../actions/unit.ts";
import type { Unit } from "../models/unit.ts";

interface Events {
	changed: [Unit];
}

export class UnitStore extends EventEmitter<Events> {
	private _unit: Unit = "in";

	constructor(dispatch: Dispatcher<UnitActions>) {
		super();

		dispatch.register((data: UnitActions) => this._handleEvents(data));
	}

	public get(): Unit {
		return this._unit;
	}

	private _handleEvents(data: UnitActions): void {
		switch (data.type) {
			case "unit.change":
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
