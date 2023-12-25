import AppView from "./views/app.svelte";

import { UnitStore } from "./stores/unit.ts";
import { Dispatcher } from "./utils/dispatcher.ts";

import type { Actions } from "./actions/index.ts";
import { changeUnit } from "./actions/unit.ts";

const DISPATCHER = new Dispatcher<Actions>();

const APP_VIEW = new AppView({
    target: document.body,
    props: {
        dispatcher: DISPATCHER,
        unitStore: new UnitStore(DISPATCHER),
    },
});

setTimeout(() => {
    changeUnit(DISPATCHER, "cm");
}, 2000);

export default APP_VIEW;
