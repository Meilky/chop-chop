<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    import { changeTrunkDiameter } from "../../actions/trunk.ts";

    import type { Dispatcher } from "../../utils/dispatcher.ts";
    import type { Actions } from "../../actions/index.ts";
    import type { UnitStore } from "../../stores/unit.ts";
    import type { Unit } from "../../models/unit.ts";

    export let dispatcher: Dispatcher<Actions>;
    export let unitStore: UnitStore;

    let diameter: number = 0;
    let unit: Unit = "in";

    function unitChanged(newUnit: Unit) {
        unit = newUnit;
    }

    function diamiterChanged() {
        changeTrunkDiameter(dispatcher, diameter);
    }

    onMount(() => {
        unit = unitStore.get();

        unitStore.on("changed", unitChanged);
    });

    onDestroy(() => {
        unitStore.off("changed", unitChanged);
    });
</script>

<div>
    <label for="diameter">Diameter:</label>
    <input name="diameter" type="number" bind:value={diameter} on:change={diamiterChanged} min="0" />
    {unit}
</div>

<style>
</style>
