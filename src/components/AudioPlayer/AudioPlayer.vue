<template>
  <!-- <audio controls @play="props.start">
    <source :src="require('@/assets/audio/we.mp3')" type="audio/mpeg">
    <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio> -->
  <div class="audio-container">
    <AudioPlayer :option="{
      src: mp3,
      title: 'WE',
      coverImage: pk
    }" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue'
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import mp3 from '@/assets/audio/we.mp3'
import pk from '@/assets/pk.png'

interface IProps {
  start: boolean
}
const props = defineProps<IProps>()

watch(props.start, (now) => {
  if (now) {
    AudioPlayer.play()
  }
  if (!now) {
    AudioPlayer.pause()
  }
})

</script>

<style lang="scss" scoped>
audio {
  display: block;
  width: 80vw;
  margin: 0 auto;

  &::-webkit-media-controls-panel {
    background-color: transparent;
  }

}
// .audio-container {
//   width: 20vw;
//   background-color: #fff;
// }
</style>
