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

<section class="md:px-8 py-8 min-h-screen flex flex-col pt-40 md:pt-20 pb-20 bg-white" id="random">
    <h2 class="text-center text-3xl font-bold">Test your luck ! </h2>
    <div class="flex gap-2 my-4 justify-center ">
        <button class="bg-black text-orange-500 font-bold border px-4 py-2 hover:bg-slate-900 transition-all" on:click={getNewRandomDrink}  >Get a random cocktail</button>
    </div>
    {#await randomDrink}
	    <p class="mx-auto">Loading...</p>
    {:then Drink}
        <DrinkComponent Drink={Drink.drinks[0]} />
    {:catch error}
	    <p>An error "{error.message}" happened </p>
    {/await}

</section>

