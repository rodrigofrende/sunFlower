<template>
<div class="cards" id="trabajos"> 
<!-- TODO :hacer un FOR con varias cards, para que se cargue de manera dinamica -->
<b-card-group deck>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    class="padding-cards"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  <b-card
    title="Card Title2"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    class="padding-cards"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  <b-card
    title="Card Title2"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    class="padding-cards"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  
</b-card-group>
</div>
</template>

<script>
export default {
    name: 'Cards',
    data() {
      return {
        
      }
    },
    methods: {
      
    }
}
</script>

<style>
.cards{
    margin-left: 5%;
    margin-right: 5%;
}
.padding-cards {
    margin: 20px;
}

</style>