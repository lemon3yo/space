<template>
  <Space v-if="lighted.liao && lighted.wen && lighted.xing"/>
  <div class="quote-container noselect" @click="handleClick">
    <h1 :class="{lightup: (lighted.liao && lighted.wen && lighted.xing)}"> <span>瞭</span>望宇宙 </h1>
    <h1 :class="{lightup: (lighted.liao && lighted.wen && lighted.xing)}"> 只<span>为</span>点闪亮 </h1>
    <h1 :class="{lightup: (lighted.liao && lighted.wen && lighted.xing)}"> 那颗<span>未</span>来<span>星</span> </h1>
    <!-- <button @click="lightText">请不要点我</button> -->
  </div>
  <AudioPlayer :start="lighted.xing"/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Space from '@/components/Space/Space.vue'
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer.vue'

interface ILighted {
  liao: boolean,
  wen: boolean,
  xing: boolean,
}
const lighted: ILighted = reactive({ liao: false, wen: false, xing: false })

function handleClick (e) {
  console.log(e.target.innerText)
  if (e.target.innerText === '瞭') {
    lighted.liao = true
  } else if (e.target.innerText === '为' || e.target.innerText === '未') {
    if (lighted.liao) {
      lighted.wen = true
    }
  } else if (e.target.innerText === '星') {
    if (lighted.liao && lighted.wen) {
      lighted.xing = true
      alert('廖文星成功点亮宇宙！')
    }
  } else {
    lighted.liao = false
    lighted.wen = false
    lighted.xing = false
  }
}
</script>

<style lang="scss" scoped>
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.lightup {
  color: rgb(255, 255, 140);
  animation: lighting ease-in-out 3s infinite;
}
.quote-container {
  margin: 20vh auto;
  h1 {
    text-align: center;
    font-size: 10vw;
    font-family: "STKaiti";
    // text-shadow: 5px -5px #444, 6px -6px #555;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
    letter-spacing: 0.4em;
    font-weight: bold;
    z-index: 20;
  }
  button {
    display: block;
    letter-spacing: 0.5em;
    cursor: pointer;
    color: #eee;
    background-color: #ff2424;
    padding: 4px;
    border-radius: 5px;
    width: 10vw;
    margin: 10vh auto;
  }
}
@keyframes lighting {
  0%,
  100%{
    opacity: 0.05;
  }
  50%{
    opacity: 1;
  }
}
</style>
