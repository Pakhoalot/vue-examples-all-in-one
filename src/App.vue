<template>
  <div id="app">
    <div id="nav">
       | <router-link to="/">Home</router-link> |
      <router-link to="/markdown-editor">Markdown Editor</router-link> |
      <router-link to="/github-commits">GitHub Commits</router-link> |
      <router-link to="/grid-view">Grid View</router-link> |
      <router-link to="/tree-view">Tree View</router-link> |
      <router-link to="/graph-view">Graph View</router-link> |
      <router-link to="/modal-view">Modal View</router-link> |
      <router-link to="/elasic-header">Elasic Header</router-link> |
      <router-link to="/wrapper-view">Wrapper View</router-link> |
      <router-link to="/validation-view">Validation View</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
