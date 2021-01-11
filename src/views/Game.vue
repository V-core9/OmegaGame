<template>
  <div id="omegaGameRoot">
    <h1>Omega Gaming</h1>
    <GameOptions
      :fps="fps"
      v-on:trigger-visibility-options-container="toggleOptionsVisibility()"
      v-on:apply-options="applyOptions(fps, status)"
      :status="optionsOpened"
    />
    <button v-on:click="toggleOptionsVisibility()">
      Gamxe.Page[ this.data.optionsOpened( {{optionsOpened}} ) ]
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import GameOptions from "@/components/GameOptions.vue";

export default {
  name: "omegaGameRoot",
  components: {
    GameOptions
  },
  data: function() {
    return {
      fps: 60,
      optionsOpened: false
    };
  },
  // define methods under the `methods` object
  methods: {
    toggleOptionsVisibility () {
      this.optionsOpened = !this.optionsOpened;
    },
    applyOptions(fps,status) {
      this.toggleOptionsVisibility();
      this.status = status;
      this.data.fps=fps;
    }
  }
}
</script>

<style>

</style>