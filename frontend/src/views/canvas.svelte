<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    import type { Dispatcher } from "../utils/dispatcher";
    import type { Actions } from "../actions";

    export let dispatcher: Dispatcher<Actions>;

    let canvasElement: HTMLCanvasElement;

    onMount(() => {
        const ctx = canvasElement.getContext("2d")!;

        ctx.moveTo(0, 0);
        ctx.lineTo(1000, 1000);
        ctx.stroke();
    });

    onDestroy(() => {});
</script>

<canvas id="canvas" bind:this={canvasElement} width="1000" height="1000" />

<style>
    #canvas {
        width: 100%;
        height: 100%;
    }
</style>
