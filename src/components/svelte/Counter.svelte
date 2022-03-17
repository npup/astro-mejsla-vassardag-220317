<script>
    export let initialValue = 0;
    let value = initialValue;
</script>

<div>
    Svelte counter: [ {value} ]<br />
    <button on:click={() => --value}>-</button>
    <button on:click={() => ++value}>+</button>
</div>
