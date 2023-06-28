<script lang="ts">
  import Rhombus from "../public/img/parallaxes/i_rhombus.svg";
  import ttl from "../public/img/background/t_ttl_character.png";
</script>

<main
  class="h-screen w-screen bg-no-repeat bg-cover bg-pattern flex items-center justify-center"
>
  <div
    class="bg-white h-14 absolute top-10 left-0 right-0 border-[#ae7a1d] border shadow-[0px_1px_20px_0px_rgba(0,0,0,0.5)]"
  >
    <div
      class="bg-banner bg-cover w-full h-full flex justify-center items-center space-x-12"
    >
      <img src={Rhombus} class="w-8" alt="" />
      <img src={ttl} class="h-8" alt="" />
      <img src={Rhombus} class="w-8" alt="" />
    </div>
  </div>
  <div class="">
    <div class="flex justify-center">test</div>
    <h1>asdasd</h1>

    <div class="card">test</div>

    <p>
      Check out <a
        href="https://github.com/sveltejs/kit#readme"
        target="_blank"
        rel="noreferrer">SvelteKit</a
      >, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
      Click on the Vite and Svelte logos to learn more
    </p>
  </div>
</main>

<style>
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
