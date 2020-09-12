<template>
<div class="containerContact" id="contacto">
    <b-row>
        <b-col cols="3">
            <h2> Contacto </h2> 
            <b-col>
                <h5 class="footer-align-left"> Instagram <font-awesome-icon icon="user-secret" /> </h5>           
            </b-col>
            <b-col>
                <h5 class="footer-align-left"> Facebook <font-awesome-icon icon="user-secret" /> </h5>
            </b-col>
            <b-col>
                <h5 class="footer-align-left"> Whastsapp <font-awesome-icon icon="user-secret" /> </h5>
            </b-col>
        </b-col>
        <b-col>
            
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
      
    }
}
</script>

<style scoped>

.containerContact{
    background-color: #343a40;
    padding-top: 1%;
    
}

.footer-align-left {
    align-content: flex-start;  
    text-align: center;  
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