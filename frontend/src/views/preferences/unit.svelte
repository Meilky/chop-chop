<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { changePreferredUnit } from "../../actions/preferences.ts";

    import type { Dispatcher } from "../../utils/dispatcher.ts";
    import type { Actions } from "../../actions/index.ts";
    import type { Unit } from "../../models/unit.ts";
    import type { UnitStore } from "../../stores/unit.ts";

    export let dispatcher: Dispatcher<Actions>;
    export let unitStore: UnitStore;

    let unit: Unit = "in";

    function unitChanged(newUnit: Unit) {
        unit = newUnit;
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
    <label for="unit">Unit :</label>
    <select name="unit" bind:value={unit} on:change={() => changePreferredUnit(dispatcher, unit)}>
        <option value="in">in</option>
        <option value="cm">cm</option>
    </select>
</div>

<style>
</style>
