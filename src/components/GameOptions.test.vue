<template>
  <div class="gameOptionsContainer" v-bind:class="{ 'optionsOpened': status }">
    <h1>{{ count }}</h1>
    <button v-on:click="$emit('demo-counter-increment')" >GameOptions.Component[this.props.count( {{ count }} clicks )]</button>
    <button v-on:click="$emit('trigger-visibility-options-container')" >GameOptions.Component[this.props.status( {{ status }} )]</button>
  </div>
</template>

<script>
export default {
  name: "GameOptions",
  props: {
    count: Number,
    status: Boolean
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
