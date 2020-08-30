<template>
<div class="head">
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">SunFlower</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Inicio</b-nav-item>
        <b-nav-item href="#" >Carrousel</b-nav-item>
        <b-nav-item href="#" >Servicios</b-nav-item>
        <b-nav-item href="#" >Trabajos</b-nav-item>
        <b-nav-item href="#" >Contacto</b-nav-item>

        <b-nav-item-dropdown right>
          
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: -60px;
}

</style>
