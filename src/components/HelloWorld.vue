<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String,
})

const count = ref(0)

const imageUrl = "/img/NM025871 冰冻帘子 冬天 2023-12-17.JPG";

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <p>
    <img src="/img/NM025871 冰冻帘子 冬天 2023-12-17.JPG" alt="" srcset="">
  </p>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
img {
  width: 100%;
}
</style>
