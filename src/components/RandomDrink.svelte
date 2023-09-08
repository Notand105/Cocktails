<script>
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

<section class="px-8 py-20">
    <div class="flex gap-2 align-baseline ">
        <h3 class="pt-2" >Prueba uno estos cockteles al azar o</h3>
        <button class="bg-orange-200 p-2" on:click={getNewRandomDrink}  >Obten uno nuevo</button>
    </div>
    {#await randomDrink}
	    <p class="">Cargando...</p>
    {:then Drink}
        <div class="">
	    <h3>{Drink.drinks[0].strDrink}</h3>
        <h4 class="p-1 bg-red-700 w-fit rounded text-white">{Drink.drinks[0].strAlcoholic}</h4>
        <img src={Drink.drinks[0].strDrinkThumb} alt={Drink.drinks[0].strDrink} width="300px" height="300px" />
        <p>{Drink.drinks[0].strInstructionsEs ? 'Instrucciones: ' + Drink.drinks[0].strInstructionsEs : 'Instructions: ' + Drink.drinks[0].strInstructions }</p> 
        </div>
    {:catch error}
	    <p>An error "{error.message}" happened </p>
    {/await}

</section>