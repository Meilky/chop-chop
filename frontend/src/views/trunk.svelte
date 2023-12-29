<script lang="ts">
    import Cut from "./trunk/cut.svelte";

    import type { Dispatcher } from "../utils/dispatcher.ts";
    import type { Actions } from "../actions/index.ts";
    import type { UnitStore } from "../stores/unit.ts";

    export let dispatcher: Dispatcher<Actions>;
    export let unitStore: UnitStore;
</script>

<div id="trunk">
    <h1>Trunk:</h1>
    <Cut {unitStore} {dispatcher} />
</div>

<style>
    #trunk {
        width: auto;
        height: auto;
        border-left: 2px solid var(--light);
        padding-left: 1vw;
        padding-right: 1vw;
    }
</style>
