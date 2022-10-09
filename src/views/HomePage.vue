<script setup>
  import { onMounted } from 'vue'
  import BaseCard from '@/components/BaseCard.vue'
  import useMonsters from '@/composables/useMonsters.js'

  const { monsters, fetchMonsters, firstLoad } = useMonsters()

  onMounted(async () => {
    if (firstLoad.value) {
      await fetchMonsters()
      firstLoad.value = false
    }
  })
</script>

<template>
  <!--<button
    title="Load Monsters"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchMonsters"
  >
  🚀
  </button> -->

  <main class="min-h-screen bg-gradient-to-r from-lime-600 to-emerald-900">
    <div class="container mx-auto grid grid-cols-4 gap-4 py-8">
      <BaseCard v-for="monster in monsters" :key="monster.id" :monster="monster" />
    </div>
  </main>
</template>
