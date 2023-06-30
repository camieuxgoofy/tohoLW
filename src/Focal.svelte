<script lang="ts">
  import CardSlider from "./components/CardSlider.svelte";
  import PlaCard from "./components/PlaCard.svelte";
</script>

<PlaCard />
<main class="max-w-3xl mx-auto">
  <div
    class="block fixed z-[-1] w-full h-screen bg-pattern bg-cover bg-center transition-all delay-150 duration-500 left-0 top-0"
  />

  <CardSlider />
</main>
