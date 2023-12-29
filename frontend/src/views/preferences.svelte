<script lang="ts">
    import UnitView from "./preferences/unit.svelte";

    import type { Dispatcher } from "../utils/dispatcher.ts";
    import type { Actions } from "../actions/index.ts";
    import type { UnitStore } from "../stores/unit.ts";

    export let dispatcher: Dispatcher<Actions>;
    export let unitStore: UnitStore;
</script>

<div id="preferences">
    <h1>Preferences:</h1>

    <UnitView {dispatcher} {unitStore} />
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
