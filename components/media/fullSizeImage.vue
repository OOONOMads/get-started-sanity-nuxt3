<template>
  <div class="fullSizeImage">
    <img :src="src" :alt="alt" :class="class" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    src: string
    alt: string
    class?: string
  }>()

  /*gets all images from assets/images, then picks out the one you named on component use*/
  const images = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/images/*.jpg')).map(
      ([key, value]) => {
        const filename = key.split('/').pop()!.split('.').shift()
        return [filename, value]
      }
    )
  )

  const image = props.src && (await images?.[props.src]?.())
  const src = image?.default
</script>

<style scoped lang="scss">
  @import '~/assets/css/variables.scss';
  div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
</style>
