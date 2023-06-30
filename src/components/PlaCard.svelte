<script lang="ts">
  import Rhombus from "../assets/parallaxes/i_rhombus.svg";
  import Ttl from "../assets/background/t_ttl_character.png";
  import TtlSm from "../assets/background/t_ttl_character_sm.png";
</script>

<img src={TtlSm} class="md:hidden" alt="charcters">
<div
  class="hidden md:block bg-white h-10 md:h-20 relative w-full md:w-full border-[#ae7a1d] border shadow-[0px_1px_20px_0px_rgba(0,0,0,0.5)] mb-4 mt-10 ttl transition-all delay-150 duration-500"
>
  <div
    class="bg-banner bg-cover h-full flex justify-center items-center space-x-6 md:space-x-12"
  >
    <img src={Rhombus} class="w-4 md:w-8" alt="rhombus" draggable="false" />
    <img src={Ttl} class="h-5 md:h-8" alt="characters" draggable="false" />
    <img src={Rhombus} class="w-4 md:w-8" alt="rhombus" draggable="false" />
  </div>
</div>

<style>
  .ttl::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 8px 12px;
    border-color: transparent transparent #ae7a1d transparent;
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(100% + 4px);
    margin: auto;
  }

  .ttl::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 12px 0 12px;
    border-color: #ae7a1d transparent transparent transparent;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 4px);
    margin: auto;
  }
</style>
