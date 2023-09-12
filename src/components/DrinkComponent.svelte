<script>
    import AlcoholicFlag from "./AlcoholicFlag.svelte";
    import Ingredients from "./Ingredients.svelte";
    export let Drink

    let openIngredients = true 

    let toggleIngredients = () =>{
        openIngredients = !openIngredients
    }

</script>
<div>
    <h3>{Drink.strDrink}</h3>
    <AlcoholicFlag alcoholic={Drink.strAlcoholic == 'Alcoholic'} />
    <div class="flex border">
        <img src={Drink.strDrinkThumb} alt={Drink.strDrink} width="300px" height="300px" />
    </div>
    <div class="border">
        <button on:click={toggleIngredients} class="text-right w-full">down</button>
        {#if openIngredients}
            <div>
                <Ingredients Drink={Drink} /> 
                {#if Drink.strInstructions}
                
                <p>{Drink.strInstructions}</p>
                {/if}
            </div>
        {/if}
    </div>
</div>