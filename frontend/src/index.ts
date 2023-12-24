import type { Actions } from "./actions";
import { Dispatcher } from "./utils/dispatcher";
import AppView from "./views/app.svelte";

const DISPATCHER = new Dispatcher<Actions>();

const APP_VIEW = new AppView({
    target: document.body,
    props: {
        DISPATCHER,
    },
});

setTimeout(() => {
    DISPATCHER.dispatch({ type: "test", payload: "my man" });
}, 2000);

export default APP_VIEW;
