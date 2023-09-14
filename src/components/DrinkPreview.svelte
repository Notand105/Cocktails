<script>
  export let Drink;
</script>

<div
  class="max-w-xs rounded"
>
  <div class="">
    <img
      class=""
      src={Drink.strDrinkThumb}
      alt={Drink.strDrink}
      width="320px"
      height="200px"
    />
  </div>
  <div class="">
    <div class="">
      <h3 class="font-bold text-xl text-white text-center ">{Drink.strDrink}</h3>
    </div>
  </div>
</div>
