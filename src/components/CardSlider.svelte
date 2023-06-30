<script lang="ts">
  import { characters } from "../index";

  let activeIndex = 0;

  function previousSlide() {
    characters.subscribe((chars) => {
      activeIndex = activeIndex > 0 ? activeIndex - 1 : chars.length - 1;
    });
  }

  function nextSlide() {
    characters.subscribe((chars) => {
      activeIndex = activeIndex < chars.length - 1 ? activeIndex + 1 : 0;
    });
  }
</script>

<div
  class="relative bg-white rounded-lg p-6 md:mt-12 md:mx-0 mx-5 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] text-black"
>
  {#each $characters as character, index}
    {#if index === activeIndex}
      <img
        src={character.charImage}
        class="mx-auto md:w-2/3 h-full transition-all duration-300"
        alt={character.name}
      />
      <div class="relative md:mt-16 mt-4">
        <div
          class="md:absolute bg-[rgba(255,255,255,0.75)] md:w-[60%] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] p-4 left-0 bottom-0 text-left rounded-lg"
        >
          <p class="md:text-4xl text-2xl font-aref-ruqaa pb-2">
            {character.name}
          </p>
          <div class="border-t-2 border-dotted pt-6 text-[.6rem] space-y-2">
            <div class="md:grid grid-cols-3">
              <div class=" w-36">
                <span
                  class="bg-red-600 text-red-100 font-medium mr-2 px-1 py-0.5 rounded-sm"
                  >Species</span
                >
              </div>
              <div class=" col-span-2">{character.species}</div>
            </div>
            <div class="md:grid grid-cols-3">
              <div>
                <span
                  class="bg-yellow-600 text-yellow-100 font-medium mr-2 px-1 py-0.5 rounded-sm"
                  >Ability</span
                >
              </div>
              <div class=" col-span-2">{character.ability}</div>
            </div>
            <div class="md:grid grid-cols-3">
              <div>
                <span
                  class="bg-green-600 text-green-100 font-medium mr-2 px-1 py-0.5 rounded-sm"
                  >Titles</span
                >
              </div>
              <div class=" col-span-2">{character.titles}</div>
            </div>
            <div class="md:grid grid-cols-3">
              <div>
                <span
                  class="bg-cyan-600 text-cyan-100 font-medium mr-2 px-1 py-0.5 rounded-sm"
                  >{character.occupation ? "Occupation" : "Threat Level"}</span
                >
              </div>
              <div>
                {character.occupation
                  ? character.occupation
                  : character.threatLevel}
              </div>
            </div>
            <div class="md:grid grid-cols-3">
              <div>
                <span
                  class="bg-blue-600 text-blue-100 font-medium mr-2 px-1 py-0.5 rounded-sm"
                  >{character.friendlinessToHumans
                    ? "Friendliness to Humans"
                    : "Home"}</span
                >
              </div>
              <div class="col-span-2">
                {character.friendlinessToHumans
                  ? character.friendlinessToHumans
                  : character.home}
              </div>
            </div>
            <div class="md:grid grid-cols-3">
              <div>
                {#if character.mainLocation}
                  <span
                    class="bg-purple-600 text-purple-100 font-medium mr-2 px-1 py-0.5 rounded-sm"
                  >
                    Main Location
                  </span>
                {/if}
              </div>
              <div class="col-span-2">
                {#if character.mainLocation}
                  {character.mainLocation}
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/each}

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="absolute md:w-8 md:h-8 w-3 h-3 md:left-8 left-4 md:top-[45%] top-1/4 arrows md:border-l-8 border-l-[5px] md:border-b-8 border-b-[5px] border-[#d14224] border-solid duration-200 prev"
    tabindex="0"
    role="button"
    aria-label="Previous slide"
    on:click={previousSlide}
  />

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="absolute md:w-8 md:h-8 w-3 h-3 md:right-8 right-4 md:top-[45%] top-1/4 arrows md:border-l-8 border-l-[5px] md:border-b-8 border-b-[5px] border-[#d14224] border-solid duration-200 next"
    tabindex="0"
    role="button"
    aria-label="Next slide"
    on:click={nextSlide}
  />
</div>

<style>
  .arrows:hover {
    opacity: 0.6;
  }

  .prev {
    transform: rotate(45deg);
  }

  .next {
    transform: rotate(-135deg);
  }
</style>
