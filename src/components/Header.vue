<template>
<div class="head" id="inicio">
  <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark">
    <b-navbar-brand href="#">SunFlower</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="scroll(ref='inicio')">Inicio</b-nav-item>
        <b-nav-item @click="scroll(ref='carrousel')" >Carrousel</b-nav-item>
        <b-nav-item  @click="scroll(ref='servicios')" >Servicios</b-nav-item>
        <b-nav-item @click="scroll(ref='trabajos')" >Trabajos</b-nav-item>
        <b-nav-item @click="scroll(ref='contacto')" >Contacto</b-nav-item>

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
  },
  methods: {
    scroll(ref) {
      // este metodo scrollea hasta el punto de la pag que se toque en el header
      const element = document.getElementById(ref);
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
