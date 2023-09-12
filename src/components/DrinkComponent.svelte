<script>
    import AlcoholicFlag from "./AlcoholicFlag.svelte";
    import Ingredients from "./Ingredients.svelte";
    export let Drink

    let openIngredients = true 

    let toggleIngredients = () =>{
        openIngredients = !openIngredients
    }

</script>
<div class="max-w-full w-fit m-auto bg-black text-white  flex flex-col md:flex-row">
        <div class="flex justify-center ">
            <img class="w-full max-w-md" src={Drink.strDrinkThumb} alt={Drink.strDrink} width="400px" height="400px" />
        </div>
    <div class="p-8 flex flex-col gap-4">
        <div class="px-4 flex justify-center flex-col items-center gap-2">
            <h3 class="font-bold text-xl">{Drink.strDrink}</h3>
            {#if Drink.strAlcoholic}
            <AlcoholicFlag alcoholic={Drink.strAlcoholic == 'Alcoholic'} />
            {/if}
        </div>
        {#if Drink.strIngredient1}
            {#if openIngredients}
            <div class="flex flex-col gap-4 justify-center ">
                <Ingredients Drink={Drink} /> 
                {#if Drink.strInstructions}
                    <p class="para pl-2 text-lg font-medium text-slate-200">{Drink.strInstructions}</p>
                    {/if}
                </div>
            {/if}
        {/if}
    </div>
</div>
<style>
    .para{
        max-width: 50ch;
    }
</style>