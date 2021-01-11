<template>
  <div id="omegaGameRoot">
    <h1>Omega Gaming</h1>
    <GameOptions 
      :count="count" 
      v-on:demo-counter-increment="count++"
      v-on:trigger-visibility-options-container="toggleOptionsVisibility()"
      :status="optionsOpened"
      />
    <button v-on:click="count++">Page[ this.data.count( {{ count }} clicks ) ]</button>
    <button v-on:click="toggleOptionsVisibility()">Game.Page[ this.data.optionsOpened( {{optionsOpened}} ) ]</button>
  </div>
</template>

<script>
// @ is an alias to /src
import GameOptions from "@/components/GameOptions.test.vue";

export default {
  name: "omegaGameRoot",
  components: {
    GameOptions
  },
  data: function () {
    return {
      count: 0,
      optionsOpened: false,
    }
  },
  // define methods under the `methods` object
  methods: {
    toggleOptionsVisibility: function () {
      this.optionsOpened = !this.optionsOpened;
    },
    applyOptions: function(data) {
      this.fps = data.fps;
      console.log(this.data);
    }
  }
}
</script>

<style>

</style>