<template>
<div class="containerContact" id="contacto">
    
    <div class="text-center" >
        <h1 class="title">Contacto</h1>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
    <div class="footerDiv">
        <div class="col-lg-4 ">
                <b-img v-bind="mainProps" class="roundedImage" rounded="circle" alt="Circle image" fluid src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"></b-img>
                <h4>Alberto Frende</h4>
                <p class="text-muted">Lead Developer</p>
        </div>
        <div class="col-lg-2 ">
                <font-awesome-icon icon="user-secret" />
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

<style scoped>

.containerContact{
    background-color: #343a40;
    padding-top: 2%;
    
}

.footerDiv {
    margin-top: 2%;
    flex-direction: row;
    display: flex;
}

.title{
    color: white;
}

.roundedImage {
    width: 50%;
    height: 50%;
}
</style>