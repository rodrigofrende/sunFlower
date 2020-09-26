<template>
<div class="containerContact border" id="contacto">
    <b-row>
        <b-col cols="3 pt-3 pb-3 mx-3" style="width:'100%';height:'100%'">
            <h2 class="footer-align-left contact-header">  Contacto </h2> 
            <b-col>
                <h5 class="footer-align-left" @click="contactRedirect(route='instagram')"> <font-awesome-icon class="mx-1" :icon="['fab', 'instagram']" />Instagram</h5>           
            </b-col>
            <b-col>
                <h5 class="footer-align-left" @click="contactRedirect(route='facebook')"> <font-awesome-icon class="mx-1" :icon="['fab', 'facebook']" />Facebook</h5>
            </b-col>
            <b-col>
                <h5 class="footer-align-left" @click="contactRedirect(route='whatsapp')"><font-awesome-icon class="mx-1" :icon="['fab', 'whatsapp']" />Whastsapp</h5>
            </b-col>
        </b-col>
        <b-col cols="6">

        </b-col>
        <b-col cols="2" class="full-height pl-1 mb-3 pb-3">
            <div class="hover-logo pt-2">
                <img src="../assets/logo.png" alt="Lapacho" width="100%" height="100%">
            </div>
        </b-col>
    </b-row>
</div>
</template>

<script>

export default {
    name: 'About',
    components: {

    },
    data() {

      return {
        
      }
    },
    methods: {
        contactRedirect(route) {
            switch (route) {
                case 'instagram':
                    console.log("redirect to: "+route)
                    break
                case 'facebook':
                    console.log("redirect to: "+route)
                    break
                case 'whatsapp':
                    console.log("redirect to: "+route)
                    break
                default:
                    console.log("Error de redireccion")
                    break
            }
        }
    }
}
</script>

<style scoped>

.containerContact{
    background-color:#1f2123;
    padding-top: 1%;
}

.hover-logo {
    display: flex;

}

img:hover {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(15000deg) brightness(10000%) contrast(100%);
}

.footer-align-left {
    align-content: flex-start;  
    text-align: left;  
}

.contact-header {
    font-size: 1.5em !important;
    font-weight: bold;
}

h5:hover{
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

.title{
    color: white;
}

.roundedImage {
    width: 50%;
    height: 50%;
}
</style>