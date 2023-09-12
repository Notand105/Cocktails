<script lang="ts">
    import DrinkComponent from "./DrinkComponent.svelte";
    let cocktailsPerPage = 10
    let ings:any = [] 
    let paginatedIngs:any = []
    let paginationIndex:number = 0
    
    async function setIngredient(ingredient:string){
        const res = await fetch(` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}` )
        const response = await res.json()
        //just getting the first 10, remove this later to implement pagination
        ings = response.drinks
        paginatedIngs = ings.slice(paginationIndex,cocktailsPerPage)
        console.log({paginatedIngs, ings})
    }

    function paginationNext(){
        paginationIndex += 9
        cocktailsPerPage += 9
        paginatedIngs = ings.slice(paginationIndex, cocktailsPerPage)

        console.log({paginatedIngs, ings})
    }

    function paginationBack(){
        paginationIndex -= 9
        cocktailsPerPage -= 9
        paginatedIngs = ings.slice(paginationIndex, cocktailsPerPage)
        console.log({paginatedIngs, ings})
    }

</script>

<section class="text-white bg-black w-full px-8 ">
    <h2>Busca por ingredientes</h2>
    <button on:click={()=>setIngredient('Gin')}>Gin</button>
    <button  on:click={()=>setIngredient('Vodka')}>Vodka</button>
    <div class="flex flex-wrap gap-2 mx-auto">
        {#each paginatedIngs as drink }
        <DrinkComponent Drink={drink} />
        {/each}
    </div>
    <div>
        <button on:click={paginationBack} disabled={paginatedIngs - 9 >= 0}>last</button>
        <button on:click={paginationNext} disabled={paginatedIngs + 9 <= ings.length}>next</button>
    </div>
</section>