<script lang="ts">
    import type { Dispatcher } from "../utils/dispatcher";
    import type { Actions } from "../actions";
    import type { VoidCallback } from "../utils/types";
    import { onDestroy, onMount } from "svelte";

    export let DISPATCHER: Dispatcher<Actions>;

    let msg: string = "World";

    const callback: VoidCallback<[Actions]> = (data) => {
        msg = data.payload;
    };

    onMount(() => {
        DISPATCHER.register(callback);
    });

    onDestroy(() => {
        DISPATCHER.unregister(callback);
    });
</script>

<main>Hello {msg}!</main>

<style>
</style>
