<template>
  <div id="carrousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="580"
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
            src="../assets/Carrousel/carru3.jpg"
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
            src="../assets/Carrousel/carru5.jpg"
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

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
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
      onSlideStart(slide) {
        this.sliding = true
        console.log(slide)
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide)
      }
    }
  }
</script>