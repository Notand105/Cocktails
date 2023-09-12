<script lang="ts">
    import DrinkComponent from "./DrinkComponent.svelte";
    let ings:any = [] 
    
    async function setIngredient(ingredient:string){
        const res = await fetch(` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}` )
        const response = await res.json()
        //just getting the first 10, remove this later to implement pagination
        ings = response.drinks.slice(0,10)
    }

</script>

<section class="text-white bg-black w-full ">
    <h2>Busca por ingredientes</h2>
    <button on:click={()=>setIngredient('Gin')}>Gin</button>
    <button  on:click={()=>setIngredient('Vodka')}>Vodka</button>
    {#each ings as drink }
    <DrinkComponent Drink={drink} />
    {/each}

</section>