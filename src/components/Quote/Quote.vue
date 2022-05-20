<template>
  <Space v-if="(lighted.xin || lighted.er)"/>
  <div class="quote-container noselect" @click="handleClick">
    <h1 :class="{lightup: (lighted.xin || lighted.er)}">
      <span :class="{lightup: lighted.shan && !lighted.xin && !lighted.er}">闪</span>亮未来
    </h1>
    <h1 :class="{lightup: (lighted.xin || lighted.er)}">
      <span :class="{lightup: lighted.liao && !lighted.xin && !lighted.er}">瞭</span><span :class="{lightup: lighted.wan && !lighted.xin && !lighted.er}">望</span>宇宙
    </h1>
    <h1 :class="{lightup: (lighted.xin || lighted.er)}">
     只为<span :class="{lightup: lighted.wen && !lighted.xin && !lighted.er}">温</span>暖
    </h1>
    <h1 :class="{lightup: (lighted.xin || lighted.er)}">
     幻<span :class="{lightup: lighted.er && !lighted.xin && !lighted.er}">而</span>光明的<span :class="{lightup: lighted.xin && !lighted.xin && !lighted.er}">星</span>河
    </h1>
    <!-- <button @click="lightText">请不要点我</button> -->
  </div>
  <AudioPlayer :start="(lighted.xin || lighted.er)"/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Space from '@/components/Space/Space.vue'
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer.vue'

interface ILighted {
  liao: boolean,
  wen: boolean,
  xin: boolean,
  shan: boolean,
  wan: boolean,
  er: boolean,
}
const lighted: ILighted = reactive({ liao: false, wen: false, xin: false, shan: false, wan: false, er: false })

function handleClick (e) {
  console.log(e.target.innerText)
  if (e.target.innerText === '瞭') {
    lighted.liao = true
  } else if (e.target.innerText === '温') {
    if (lighted.liao) {
      lighted.wen = true
    }
  } else if (e.target.innerText === '星') {
    if (lighted.liao && lighted.wen) {
      lighted.xin = true
      alert('廖文星成功点亮宇宙！')
    }
  } else {
    lighted.liao = false
    lighted.wen = false
    lighted.xin = false
  }
  if (e.target.innerText === '闪') {
    lighted.shan = true
  } else if (e.target.innerText === '望') {
    if (lighted.shan) {
      lighted.wan = true
    }
  } else if (e.target.innerText === '而') {
    if (lighted.shan && lighted.wan) {
      lighted.er = true
      alert('单婉儿成功点亮宇宙！')
    }
  } else {
    lighted.shan = false
    lighted.wan = false
    lighted.er = false
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
  margin: 10vh auto;
  h1 {
    text-align: center;
    font-size: 5vw;
    font-family: "STKaiti";
    // text-shadow: 5px -5px #444, 6px -6px #555;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
    letter-spacing: 0.4em;
    font-weight: bold;
    z-index: 20;

    span {
      cursor: pointer;
    }
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
