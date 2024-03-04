<script lang="ts">
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import DrinkPreview from "./DrinkPreview.svelte";
  import DrinkModal from "./DrinkModal.svelte";
  import Modal from "./Modal.svelte";
  let items: any[] = [];
  let currentPage: number = 1;
  let pageSize: number = 9;
  let ingredients: string[] = [
    "Vodka",
    "Gin",
    "Rum",
    "Tequila",
    "Brandy",
    "Coffee",
    "Beer",
    "Cognac",
    "Pisco",
  ];
  let showModal: boolean = false;
  let modalIngredient: any;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  setIngredient("Vodka");

  async function setIngredient(ingredient: string) {
    const res = await fetch(
      ` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const response = await res.json();
    items = response.drinks;
  }
  const openModal = async (ingredientID: string) => {
    modalIngredient = {};
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
        ingredientID,
    );
    const response = await res.json();
    modalIngredient = response.drinks[0];

    showModal = true;
  };
</script>

<section class="text-white bg w-full px-8 flex py-20 flex-col">
  <aside class="flex flex-col w-full">
    <h2 class="text-center text-2xl font-bold">Find by ingredients</h2>
    <div class="flex gap-2 py-10 flex-wrap justify-center">
      {#each ingredients as ing}
        <button
          class="border border-orange-600 text-white p-2 rounded-lg hover:bg-orange-600 transition-all hover:shadow-sm hover:shadow-orange-500"
          on:click={() => setIngredient(ing)}>{ing}</button
        >
      {/each}
    </div>
  </aside>
  <Modal bind:showModal>
    {#await modalIngredient}
      <p>Loading...</p>
    {:then ingredient}
      <DrinkModal Drink={ingredient} />
    {/await}
  </Modal>
  {#await items}
    <p>loading...</p>
  {:then Drink}
    <div>
      <div
        class="flex flex-wrap gap-4 mx-auto justify-center items-center pb-10"
      >
        {#each paginatedItems as drink}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            on:click={() => openModal(drink.idDrink)}
            on:keydown={() => {}}
            class="cursor-pointer"
          >
            <DrinkPreview Drink={drink} />
          </div>
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

<style>
  .bg {
    background-color: #121212;
  }
</style>
