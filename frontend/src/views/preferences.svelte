<script lang="ts">
    import UnitView from "./preferences/unit.svelte";

    import type { Dispatcher } from "../utils/dispatcher.ts";
    import type { Actions } from "../actions/index.ts";

    export let dispatcher: Dispatcher<Actions>;
</script>

<div id="preferences">
    <h1>Preferences:</h1>

    <UnitView {dispatcher} />
</div>

<style>
    #preferences {
        width: auto;
        height: auto;
        border-left: 2px solid var(--light);
        padding-left: 1vw;
        padding-right: 1vw;
    }
</style>
