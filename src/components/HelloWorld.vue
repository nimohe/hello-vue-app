<script setup>
import { ref,computed } from 'vue'

const props = defineProps({
  msg: String,
})

const count = ref(0)
const baseUrl = computed(() => import.meta.env.BASE_URL)

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <p>
    <img :src="`${baseUrl}img/NM025871 冰冻帘子 冬天 2023-12-17.JPG`" alt="Banner">
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
