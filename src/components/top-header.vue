<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/teste">Teste</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      console.log(this.searchText);
      this.$store.dispatch("search", { text: this.searchText });
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>
