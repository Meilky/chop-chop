<script lang="ts">
    import type { Dispatcher } from "../../utils/dispatcher.ts";
    import type { Actions } from "../../actions/index.ts";

    export let dispatcher: Dispatcher<Actions>;
</script>

<div>
    <label for="unit">Unit :</label>
    <select name="unit">
        <option value="in">in</option>
        <option value="cm">cm</option>
    </select>
</div>

<style>
</style>
