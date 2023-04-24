<template>
  <span v-if="icon" class="baseicon" :class="size" v-html="icon" />
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string
    size?: string
  }>()

  // Auto-load icons
  const icons = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/icons/*.svg', { as: 'raw' })).map(
      ([key, value]) => {
        const filename = key.split('/').pop()!.split('.').shift()
        return [filename, value]
      }
    )
  )

  // Lazily load the icon
  const icon = props.name && (await icons?.[props.name]?.())
</script>
<style scoped lang="scss">
  span {
  }
</style>
