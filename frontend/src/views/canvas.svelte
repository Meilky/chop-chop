<script lang="ts">
    import type { Dispatcher } from "../utils/dispatcher";
    import type { Actions } from "../actions";
    import { onDestroy, onMount } from "svelte";

    export let dispatcher: Dispatcher<Actions>;

    let canvasElement: HTMLCanvasElement;

    type Point = [number, number];

    function drawLine(ctx: CanvasRenderingContext2D, start: Point, end: Point) {
        ctx.beginPath();
        ctx.moveTo(...start); // line will start here
        ctx.lineTo(...end); // line ends here
        ctx.stroke(); // draw it
    }

    function callback(data: Actions): void {
        console.log(data.type, data.payload);
    }

    onMount(() => {
        dispatcher.register(callback);
        // get canvas context
        let ctx = canvasElement.getContext("2d")!;

        // draw first line
        drawLine(ctx, [10, 20], [150, 100]);

        // draw second line
        drawLine(ctx, [10, 40], [150, 120]);
    });

    onDestroy(() => {
        dispatcher.unregister(callback);
    });
</script>

<canvas bind:this={canvasElement} />

<style>
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
