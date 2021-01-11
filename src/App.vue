<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/omega_game">Omega_Game</router-link> |
      <router-link to="/omega_game_test1">Omega_Game[test]</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  background: #252525;
  color: #f0f0f0;
  padding: 0;
  margin: 0;
  line-height: 1.25em;
}
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 2px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #03A9F4;

    &.router-link-exact-active {
      color: #01579B;
    }
  }
}
</style>
