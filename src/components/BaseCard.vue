<script setup>
  const props = defineProps({
    monster: {
      type: Object,
      default: () => ({
        id: -1,
        name: 'Unknown',
        imageUrl: 'https://via.placeholder.com/150',
      }),
    },
  })
</script>

<template>
  <RouterLink :to="`/category/monster/${props.monster.id}`" class="rounded-lg bg-yellow-100 shadow-lg">
    <img class="w-full rounded-t-lg object-cover" :src="props.monster.image" />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-green-900">
        {{ props.monster.name }}
      </h2>
    </div>
  </RouterLink>
</template>
