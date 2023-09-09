<script>
    import AlcoholicFlag from "./AlcoholicFlag.svelte";

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

<section class="px-8 py-8">
    <div class="flex gap-2 align-baseline ">
        <h3 class="pt-2" >Try a random cocktail or</h3>
        <button class="bg-orange-200 p-2" on:click={getNewRandomDrink}  >get a new one</button>
    </div>
    {#await randomDrink}
	    <p class="">Cargando...</p>
    {:then Drink}
        <div class="">
	    <h3>{Drink.drinks[0].strDrink}</h3>
        <AlcoholicFlag alcoholic={Drink.drinks[0].strAlcoholic == 'Alcoholic'} />
        <img src={Drink.drinks[0].strDrinkThumb} alt={Drink.drinks[0].strDrink} width="300px" height="300px" />
        </div>
    {:catch error}
	    <p>An error "{error.message}" happened </p>
    {/await}

</section>