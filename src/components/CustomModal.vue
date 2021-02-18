<template>
<b-modal 
  id="customModal" 
  :title="data.title"
  header-bg-variant="dark"
  header-text-variant="light"
  body-bg-variant="dark"
  body-text-variant="light"
  footer-bg-variant="dark"
  footer-text-variant="light"
  title-class="modal-title mx-auto"
  v-model="modalIsOpen"
  no-close-on-backdrop
  @hide="closeModal()"
>
  <p class="mb-3" v-if="data.content1"> {{data.content1}} </p>
  <b-img 
    v-if="data.image1" 
    :src="data.image1"
    fluid
  ></b-img>
  <p class="my-4" v-if="data.content2"> {{data.content2}} </p>
  <b-img v-if="data.image2" :src="data.image2" fluid alt="Responsive image"></b-img>
  <template v-slot:modal-footer>
      <div class="w-100">
        <p class="float-left footer-text"><a :href="data.footer" target="_blank">Mirá el trabajo completo acá </a></p>
        <b-button
          variant="secondary"
          size="sm"
          class="custom-button float-right"
          @click="closeModal()"
        >
          Cerrar
        </b-button>
      </div>
    </template>
</b-modal>
</template>

<script>
export default {
    props: {
        data: {
            type: [Object, Array],
            default: () => {}
        }
    },
    computed: {
        modalIsOpen: {
          get () {
            return this.$store.state.modalOpened
          },
          set (val) {
            return this.$store.state.modalOpened = val
          }
        }
    },
    methods: {
        closeModal() {
            this.$store.dispatch('MODAL_openModal', false)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap');
::v-deep .modal-title {
  color: rgb(255, 255, 255) !important;
  text-align: center !important;
  font-size: 1.5rem;
  font-family: 'Lexend Mega', sans-serif;
}
::v-deep .modal-header .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem auto !important;
}
.footer-text {
    margin-top: 0;
    margin-bottom: 0rem !important;
}
</style>