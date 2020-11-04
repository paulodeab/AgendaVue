<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <router-link to="/" class="navbar-item"> Home </router-link>
        <router-link to="cadastro" class="navbar-item"> Cadastrar </router-link>
        <router-link to="consulta" class="navbar-item"> Consulta </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
  .navbar{

    background-color: darkgray;
  }

</style>
