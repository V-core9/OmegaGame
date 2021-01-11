<template>
  <div class="gameOptionsContainer" v-bind:class="{ optionsOpened: status }">
    <h1>Game Options</h1>
    <div class="singleOptionGroup">
      <p>FPS Set to:</p>
      <InputNumber :varVal="fps" v-on:updated-value="setFPS(fps)" />
    </div>
    <button v-on:click="$emit('apply-options', this.props.fps, this.props.status)" >
      ApplyAllOptions
    </button>
    <button v-on:click="$emit('trigger-visibility-options-container')" >
      GameOptions.Component[this.props.status( {{ status }} )]
    </button>
  </div>
</template>

<script>
import InputNumber from "@/components/GameOptions/InputNumber.vue";

export default {
  name: "GameOptions",
  components: {
    InputNumber
  },
  props: {
    status: Boolean,
    fps: Number
  },
  methods: {
    setFPS(value) {
      this.data.props.fps = value
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.gameOptionsContainer {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.15s ease all;

  &.optionsOpened{
    top: 0;
    transition: 0.25s ease all;
    background: #151515;
  }
}

</style>
