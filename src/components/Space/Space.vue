<template>
  <div class="space-container">
    <div class="star" v-for="i in 500" :key="i"></div>
  </div>
</template>

<script lang="ts" setup>
// import {ref} from 'vue'
</script>

<style lang="scss" scoped>
.space-container {
  overflow: hidden;
  background-color: #191919;
  z-index: 10;
}

$dimensions : 2px;
$number: 500;
$color: white;

.star {
  position: absolute;
  width:$dimensions;
  height: $dimensions;
  opacity: 0;
  border-radius: 50%;

  @for $i from 1 through $number {
    &:nth-child(#{$i}) {

      background-color: $color;

      $x: random(100);
      $y: random(100);
      $min: 20;
      $max: 80;

      @while $min < $x and $x < $max and $min < $y and $y < $max {
        $x: random(100);
        $y: random(100);
      }

      transform: translate($x*1vw, $y*1vh) scale(2);

      /* Duration: random 2s ~ 3s */
      $d: (random(100)*.01+2)*1s;

      /* Delay random entre 0 ~ 3s */
      $delay: (random(300)*.01)*1s;

      /* animation timing function */
      $tfunction: cubic-bezier(0.970, 0.215, 0.980, 0.770);

      animation: move $d $tfunction $delay infinite;

    }
  }
}

@keyframes move {
  0% {
    transform: translate(50vw, 50vh) scale(0.2);
  }

  20% {
    opacity: 0.1;
  }

  30% {
    opacity: 0.2;
  }

  40% {
    opacity: 0.3;
  }

  60% {
    opacity: 0.6;
  }

  80% {
    opacity: 0.8;
  }

  90% {
    opacity: 0.9;
  }

  100% {
    opacity: 0;
  }
}

</style>
