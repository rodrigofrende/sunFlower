<template>
  <b-container fluid class="containerContact border" id="contacto">
    <b-row class="d-flex">
      <b-col cols="4" class="my-auto">    
            <h2 class="footer-align-left contact-header">Contacto</h2>
            <b-col cols="4">
            <h5
                class="footer-align-left"
                @click="contactRedirect((route = 'instagram'))"
            >
                <font-awesome-icon
                class="mx-1"
                :icon="['fab', 'instagram']"
                />Instagram
            </h5>
            </b-col>
            <b-col cols="4">
            <h5
                class="footer-align-left"
                @click="contactRedirect((route = 'facebook'))"
            >
                <font-awesome-icon
                class="mx-1"
                :icon="['fab', 'facebook']"
                />Facebook
            </h5>
            </b-col>
            <b-col cols="4" class="d-flex">
            <h5
                class="footer-align-left"
                @click="contactRedirect((route = 'whatsapp'))"
            >
                <font-awesome-icon
                class="mx-1"
                :icon="['fab', 'whatsapp']"
                />Whastsapp
            </h5>
            </b-col>
      </b-col>
      <b-col cols="4">

      </b-col>
      <b-col cols="4" class="full-height pl-1 mb-3 pb-3">
        <div class="hover-logo pt-2">
          <Logo class="ml-auto"/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Logo from '@/components/Logo/Logo'
export default {
  name: "About",
  components: {Logo},
  data() {
    return {};
  },
  methods: {
    contactRedirect(route) {
      const instagramURL = "https://www.instagram.com/p/CFiYhKTBMpa/"
      const facebookURL = 'https://www.facebook.com/albertojose.frende'
      const wppURL = 'https://wa.me/+5491159881832?text=Hola!, vi tus servicios en la pagina y me gustaria contactarte'
      var win = ''
      switch (route) {
        case "instagram":
          win = window.open(instagramURL, '_blank');
          win.focus();
          console.log("redirect to: " + route);
          break;
        case "facebook":
          win = window.open(facebookURL, '_blank');
          win.focus();
          console.log("redirect to: " + route);
          break;
        case "whatsapp":
          win = window.open(wppURL, '_blank');
          win.focus();
          console.log("redirect to: " + route);
          break;
        default:
          console.log("Error de redireccion");
          break;
      }
    },
  },
};
</script>

<style scoped>
.containerContact {
  background-color: #1f2123;
  margin-top: 7%;
}

.hover-logo {
  display: flex;
}

img:hover {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(15000deg)
    brightness(10000%) contrast(100%);
}

.footer-align-left {
  align-content: flex-start;
  text-align: left;
}

.contact-header {
  font-size: 1.5em !important;
  font-weight: bold;
}

h5:hover {
  text-decoration: underline !important;
  text-decoration-color: white !important;
  opacity: 0.9;
  cursor: pointer;
}

h5 {
  font-size: 1rem;
}

.footerDiv {
  margin-top: 2%;
  flex-direction: row;
  display: flex;
}

.title {
  color: white;
}

.roundedImage {
  width: 50%;
  height: 50%;
}
</style>