<template>
<div class="container">
    <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
    <div class="col-lg-4 contact">
        <div >
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image" fluid src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"></b-img>
            <h4>Alberto Frende</h4>
            <p class="text-muted">Lead Developer</p>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
    <!-- TODO agregar iconos de font awesome con las redes / wpp messagge -->
</div>
</template>

<script>
export default {
    name: 'About',
    data() {
      return {
        
      }
    },
    methods: {
      
    }
}
</script>

<style>
.contact{
    display: flex;
    align-items: center;
    justify-content: center ;
    margin-left: auto;
    margin-right: auto;
}
</style>