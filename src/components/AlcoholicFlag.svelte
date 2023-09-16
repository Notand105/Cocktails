<script lang="ts">
   export let alcoholic : boolean
   
</script>
{#if alcoholic}
    <h4 class="p-1 bg-red-700 w-fit rounded text-white">Alcoholic</h4>
{:else}
    <h4 class="p-1 bg-emerald-700 w-fit rounded text-white">Non alcoholic</h4>
{/if}