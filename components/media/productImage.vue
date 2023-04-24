<template>
  <div :class="size" class="productImage">
    <div>
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    src: string
    alt: string
    size?: string
  }>()

  /*gets all images from assets/images, then picks out the one you named on component use*/
  const images = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/images/*.png')).map(
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
  div.productImage {
    > div {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &.small {
      img {
        max-width: 200px;
      }
    }

    &.medium {
      img {
        max-width: 300px;
      }
    }

    &.large {
      img {
        max-width: 400px;
      }
    }

    &.full {
      img {
        max-width: 100%;
      }
    }
  }
</style>
