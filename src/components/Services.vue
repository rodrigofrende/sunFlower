<template>
<div class="container" id="servicios">
    <div class="text-center margin">
        <h1 class="section-heading">Servicios</h1>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
    <br>
    <div class="row text-center">
        <div class="col-md-4">
            <b-icon icon="sun" class="serviceIcon" aria-hidden="true"></b-icon>
            <h4 class="my-3">E-Commerce</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="col-md-4">
            <b-icon icon="bricks" class="serviceIcon" aria-hidden="true"></b-icon>
            <h4 class="my-3">Responsive Design</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="col-md-4">
            <b-icon icon="flower1" class="serviceIcon" aria-hidden="true"></b-icon>
            <h4 class="my-3">Web Security</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Services',
    data() {
      return {
        
      }
    },
    methods: {
      
    }
}
</script>

<style scoped>
.serviceIcon {
    width: 120px;
    height: 120px;
}

.container{
    padding-top: 4% ;
}
</style>