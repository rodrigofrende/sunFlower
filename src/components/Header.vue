<template>
<div class="head shadow " id="inicio">
  <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark">
    <b-navbar-brand @click="scroll(ref='inicio')" id="logoText" href="#">Green Storming <Logo class="my-auto logo-header"/> </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="scroll(ref='carrousel')" >Galeria</b-nav-item>
        <b-nav-item  @click="scroll(ref='servicios')" >Servicios</b-nav-item>
        <b-nav-item @click="scroll(ref='trabajos')" >Trabajos</b-nav-item>
        <b-nav-item @click="scroll(ref='plantasDelMes')" >PdM</b-nav-item>
        <b-nav-item @click="scroll(ref='contacto')" >Contacto</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Logo from '@/components/Logo/Logo'
export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {Logo},
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

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

#logoText {
  font-family: 'Lobster', cursive;
}
.logo-header {
  width: 15%;
  margin-bottom: 10px !important;
}
.head {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: -60px;
}

</style>
