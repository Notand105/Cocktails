<script lang="ts">
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import DrinkPreview from "./DrinkPreview.svelte";
  let items: any[] = [];
  let currentPage: number = 1;
  let pageSize: number = 9;
  let ingredients: string[] = ['Vodka', 'Gin', 'Rum', 'Tequila','Brandy','Coffee', 'Beer','Cognac', 'Pisco']

  $: paginatedItems = paginate({ items, pageSize, currentPage });

  setIngredient("Vodka");

  async function setIngredient(ingredient: string) {
    const res = await fetch(
      ` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const response = await res.json();
    items = response.drinks;
  }
</script>

<section class="text-white bg-black w-full px-8 flex py-20 flex-col  ">
  <aside class="flex flex-col w-full ">
    <h2 class="text-center text-2xl font-bold">Find by ingredients</h2>
    <div class="flex gap-2 py-10 flex-wrap justify-center">
        {#each ingredients as ing }
        <button class="border border-orange-600 text-white p-2 rounded-lg hover:bg-orange-600 transition-all hover:shadow-sm hover:shadow-orange-500" on:click={() => setIngredient(ing)}>{ing}</button>
        {/each}
    </div>
  </aside>
  
  {#await items}
  <p>loading...</p>
  {:then Drink}
  <div>
      <div class="flex flex-wrap gap-4 mx-auto justify-center items-center pb-10">
        {#each paginatedItems as drink}
          <DrinkPreview Drink={drink} />
        {/each}
      </div>
      <div class="pt-10 w-fit mx-auto">
        <LightPaginationNav
          totalItems={items.length}
          {pageSize}
          {currentPage}
          limit={1}
          showStepOptions={true}
          on:setPage={(e) => (currentPage = e.detail.page)}
        />
    </div>
  </div>
  {:catch error}
    <p>An error "{error.message}" happened</p>
    {/await}
</section>
