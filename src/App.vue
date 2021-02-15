<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <Carrousel/>
    <Services/>
    <Cards/>
    <PlantOfTheMonth/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carrousel from './components/Carrousel'
import Services from './components/Services'
import Cards from './components/Cards'
import Contact from './components/Contact'
import PlantOfTheMonth from './components/PlantOfTheMonth'

export default {
  name: 'App',
  components: {
    Header,
    Carrousel,
    Services,
    Cards,
    Contact,
    PlantOfTheMonth
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9ecef;
  margin-top: 60px;
  background-color: #1f2123; ;
  font-family: 'Syne', sans-serif;
}
@import './assets/Styles/sunflower.css';
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@615&display=swap');

</style>
