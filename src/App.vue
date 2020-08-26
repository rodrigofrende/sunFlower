<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <Carrousel/>
    <Services/>
    <Cards/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carrousel from './components/Carrousel'
import Services from './components/Services'
import Cards from './components/Cards'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Header,
    Carrousel,
    Services,
    Cards,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
