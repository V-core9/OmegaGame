<template>
  <div class="wrapper">
    <input type="range" min="0" max="100" step="1" v-model="varVal" />
    <input type="number" v-model="varVal" />
    <span v-text="total"></span>
  </div>
</template>

<script>
export default {
  name: "numberInput",
  props: {
    varVal: Number
  },
  computed: {
    total: function() {
      this.$emit("apply-options", this.varVal);
      return this.varVal * 10;
    }
  }
};
</script>
<style></style>
