<template>
  <div id="app">
    <SearchResults />
  </div>
</template>

<script>
import SearchResults from "./components/SearchResults";
export default {
  name: "App",
  components: {
    SearchResults,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>