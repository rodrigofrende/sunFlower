<template>
<div class="cards my-1" id="trabajos"> 
<h1 class="section-heading">Trabajos</h1>
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

    <b-button v-b-modal.modal-1 >Ver más</b-button>
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

    <b-button href="#" >Ver más</b-button>
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

    <b-button class="custom-button" href="#" >Ver más</b-button>
  </b-card>
  
</b-card-group>
<b-modal 
  id="modal-1" 
  title="Work Title"
  header-bg-variant="dark"
  header-text-variant="light"
  body-bg-variant="dark"
  body-text-variant="light"
  footer-bg-variant="dark"
  footer-text-variant="light"
>
  <p class="my-4">Work on modal!</p>
  <p class="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni blanditiis veritatis in adipisci, quas explicabo ex ipsa corporis repellendus obcaecati perferendis suscipit laudantium porro commodi harum quo. Laudantium, perferendis quibusdam!</p>
  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
  <template v-slot:modal-footer>
      <div class="w-100">
        <p class="float-left">Modal Footer Content</p>
        <b-button
          variant="secondary"
          size="sm"
          class="float-right"
          @click="show=false"
        >
          Close
        </b-button>
      </div>
    </template>
</b-modal>
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

<style scoped>
.cards{
    margin: 5% 5%;
}
.padding-cards {
    margin: 20px;
}
.custom-button {
  color: red !important;
}
.card-body {
  color: black;
  background-color: #FFF;
  box-shadow: black 2px 10px 10px;
}

</style>