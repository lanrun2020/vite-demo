<template>
  <div class="home-container">
    <div class="scroll-bar-container">
      <ScrollBar>
        <div v-for="(item, index) in viewList" :key="index" class="bar-item"></div>
      </ScrollBar>
    </div>
  </div>
</template>

<script setup lang='ts'>
import ScrollBar from '@/components/scrollBar.vue';
import { ref } from 'vue';
const viewList = ref([
  {
    label: '1',
  },
  {
    label: '2',
  },
  {
    label: '3',
  }
])

</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-bar-container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  .bar-item {
    width: 300px;
    height: 100%;
    border: 1px solid #42b883aa;
    margin: 0 40px;
  }
}
</style>
