<script lang="ts">
    import { onMount } from "svelte";
    export let Drink : any
    let ing:string[] = [] 
    let measures:string[] = []
    let loaded:boolean = false

    onMount(()=>{
        Drink.strIngredient1 ? ing.push(Drink.strIngredient1) : null
        Drink.strIngredient2 ? ing.push(Drink.strIngredient2) : null
        Drink.strIngredient3 ? ing.push(Drink.strIngredient3) : null
        Drink.strIngredient4 ? ing.push(Drink.strIngredient4) : null
        Drink.strIngredient5 ? ing.push(Drink.strIngredient5) : null
        Drink.strIngredient6 ? ing.push(Drink.strIngredient6) : null
        Drink.strIngredient7 ? ing.push(Drink.strIngredient7) : null
        Drink.strIngredient8 ? ing.push(Drink.strIngredient8) : null
        Drink.strIngredient9 ? ing.push(Drink.strIngredient9) : null
        Drink.strIngredient10 ? ing.push(Drink.strIngredient10) : null
        Drink.strIngredient11 ? ing.push(Drink.strIngredient11) : null
        Drink.strIngredient12 ? ing.push(Drink.strIngredient12) : null
        Drink.strIngredient13 ? ing.push(Drink.strIngredient13) : null
        Drink.strIngredient14 ? ing.push(Drink.strIngredient14) : null
        Drink.strIngredient15 ? ing.push(Drink.strIngredient15) : null
        Drink.strMeasure1 ? measures.push(Drink.strMeasure1) : null
        Drink.strMeasure2 ? measures.push(Drink.strMeasure2) : null
        Drink.strMeasure3 ? measures.push(Drink.strMeasure3) : null
        Drink.strMeasure4 ? measures.push(Drink.strMeasure4) : null
        Drink.strMeasure5 ? measures.push(Drink.strMeasure5) : null
        Drink.strMeasure6 ? measures.push(Drink.strMeasure6) : null
        Drink.strMeasure7 ? measures.push(Drink.strMeasure7) : null
        Drink.strMeasure8 ? measures.push(Drink.strMeasure8) : null
        Drink.strMeasure9 ? measures.push(Drink.strMeasure9) : null
        Drink.strMeasure10 ? measures.push(Drink.strMeasure10) : null
        Drink.strMeasure11 ? measures.push(Drink.strMeasure11) : null
        Drink.strMeasure12 ? measures.push(Drink.strMeasure12) : null
        Drink.strMeasure13 ? measures.push(Drink.strMeasure13) : null
        Drink.strMeasure14 ? measures.push(Drink.strMeasure14) : null
        Drink.strMeasure15 ? measures.push(Drink.strMeasure15) : null
        loaded = true 
    })

</script>
<div>
    {#if loaded }
    {#each ing as ingredient, i}
        <p class="text-orange-600 font-semibold text-lg px-2">{ingredient}</p>
        <p class="text-slate-200 font-medium px-4">{measures[i]}</p>
    {/each}
    {/if}
</div>


