<template>
<div class="cards my-5" id="trabajos"> 
<h1 class="section-heading">Trabajos</h1>
<!-- TODO :hacer un FOR con varias cards, para que se cargue de manera dinamica -->
<b-card-group deck>
  <b-card
    :title="job.jobTitle"
    :img-src="job.imgsrc"
    img-alt="Image"
    img-top
    img-height="auto"
    img-width="auto"
    tag="article"
    class="padding-cards"
    v-for="job in jobCards"
    :key="job.id"
  >
    <b-card-text>
      {{job.resume}}
    </b-card-text>

    <b-button @click="openModal(idModal= job.id)" class="custom-button" >Ver más</b-button>
  </b-card>
  <!-- <b-card
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
  </b-card> -->
  
</b-card-group>
<Modal :data="modalData" /> 
</div>
</template>
<script>
import Modal from '@/components/CustomModal'
export default {
    name: 'Cards',
    components: {Modal},
    data() {
      return {          
      }
    },
    computed: {
      modalIsOpen () {
        return this.$store.state.modalOpened
      },
      modalData () {
        return this.$store.state.modalData
      },
      jobCards () {
        return this.$store.state.jobCards
      }
    },
    methods: {
      openModal (idModal) {
        this.$store.dispatch('MODAL_getModalData', idModal)
        this.$store.dispatch('MODAL_openModal', true)
        console.log(this.modalIsOpen)
      }
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
.card-body {
  color: black;
  background-color: #FFF;
  box-shadow: black 2px 10px 10px;
}
.card:hover {
  -webkit-box-shadow: 0 0 15px #999;
  -moz-box-shadow: 0 0 15px #999;
  -ms-box-shadow: 0 0 15px #999;
  box-shadow: 0 0 15px #999;
}

</style>