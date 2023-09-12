<script>
    import DrinkComponent from "./DrinkComponent.svelte";

    const getRandomDrink = async() =>{
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const response = await res.json()
        return response
    }
    const getNewRandomDrink = () =>{
        randomDrink = getRandomDrink();
    }
    let randomDrink = getRandomDrink();

</script>

<section class="px-8 py-8 h-screen flex flex-col pt-40 md:pt-20 " id="random">
    <div class="flex gap-2 align-baseline ">
        <button class="bg-orange-200 p-2" on:click={getNewRandomDrink}  >Try a random cocktail</button>
    </div>
    {#await randomDrink}
	    <p class="">Cargando...</p>
    {:then Drink}
        <DrinkComponent Drink={Drink.drinks[0]} />
    {:catch error}
	    <p>An error "{error.message}" happened </p>
    {/await}

</section>