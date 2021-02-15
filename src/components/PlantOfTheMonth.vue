<template>
 <b-container class="my-3">
     <b-row class="container-title">
        <h1>Plantas del Mes</h1>
     </b-row>
    <b-row class="container-body">
        <b-col cols="6">
            <div class="month-title-container">
                <span class="month-title">{{currentMonth}}</span>
            </div>
            <div class="table-container">
                <b-table 
                    class="custom-table" 
                    selectable 
                    @row-clicked="selectImage" 
                    striped 
                    hover 
                    :items="items"
                    :fields="fields">
                </b-table>
            </div>
        </b-col>
        <b-col cols="6" class="d-flex my-auto justify-content-center">
            <div class="image-container" v-if="itemImage">
                <b-img class="my-auto" thumbnail center :src="itemImage" fluid-grow alt="Responsive image"></b-img>
            </div>
            <div class="" v-else>
                <span class="my-auto"> Elegí una planta para ver su imagen. </span>
            </div>
        </b-col>
    </b-row>
 </b-container>
</template>

<script>
var moment = require('moment');
export default {
    data() {
      return {
        fields: ['nombre', 'nombreCientifico'],
        items: [
          { id: 1, nombre: 'Malvon', nombreCientifico: 'Pelargonium x hortorum L.H.', image:'https://i.ibb.co/3dhm7gH/malvon.jpg' },
          { id: 2, nombre: 'Rosa', nombreCientifico: 'Rosa sp', image:'https://i.ibb.co/f1XCKcs/rosa.jpg' },
          { id: 3, nombre: 'Tulipan', nombreCientifico: 'Tulipa spp' , image:'https://i.ibb.co/XpRkcz4/tulipan.jpg' },
          { id: 4, nombre: 'Jazmin', nombreCientifico: 'Jasminum', image:'https://i.ibb.co/n0MqWvq/jazmin.jpg' }
        ]
      }
    },
    computed: {
        itemImage () {
            return this.$store.state.itemImage
        },
        currentMonth () {
            var month = new Date
            moment.locale('es');
            month = moment(month).format('MMMM');
            return  month
        }
    },
    methods: {
        selectImage(item) {
            console.log(item);
            this.$store.dispatch('POM_setImage', item.image)
        }
    }
}
</script>

<style scoped>
.container-body {
    border: 2px solid #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0;
    margin-left: 0;
}
.container-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0;
    margin-left: 0;
}
.image-container {
    text-align: center;
    display: block;
}
.month-title-container {
    border-bottom: 1px solid #FFF;
}
.month-title {
    font-size: 2rem;
    text-transform: capitalize;
}
.table-container {

}
</style>