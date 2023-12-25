<script lang="ts">
    import Canvas from "./canvas.svelte";
    import Preferences from "./preferences.svelte";
    import Trunk from "./trunk.svelte";

    import type { Dispatcher } from "../utils/dispatcher";
    import type { Actions } from "../actions";
    import type { UnitStore } from "../stores/unit";

    export let dispatcher: Dispatcher<Actions>;
    export let unitStore: UnitStore;
</script>

<div id="app">
    <Canvas {dispatcher} />
    <Trunk {dispatcher} {unitStore} />
    <Preferences {dispatcher} />
</div>

<style>
    #app {
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-columns: auto 20vw 20vw;
    }
</style>
