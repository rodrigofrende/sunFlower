<template>
  <div id="carrousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      fluid
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
        
        <template v-slot:img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            src="../assets/Carrousel/carru1.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            src="../assets/Carrousel/carru2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            src="../assets/Carrousel/carru4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            src="../assets/Carrousel/carru6.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carrousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>