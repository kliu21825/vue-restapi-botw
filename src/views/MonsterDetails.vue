<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'

  import useMonsters from '@/composables/useMonsters'

  const route = useRoute()
  const { fetchMonster, currentMonster } = useMonsters()

  onMounted(async () => {
    await fetchMonster(route.params.id)
  })

  onUnmounted(() => {
    currentMonster.value = null
  })
</script>

<template>
  <main class="min-h-screen bg-gradient-to-r from-green-400 to-green-900 py-8 text-white">
    <div v-if="currentMonster" class="flex flex-col items-center justify-center gap-6">
      <img :src="currentMonster.image" :alt="currentMonster.name" />
      <h1 class="text-white-800 text-6xl font-semibold">Hi, I'm {{ currentMonster.name }}</h1>
      <pre>{{ currentMonster.common_locations }}</pre>
    </div>
  </main>
</template>
