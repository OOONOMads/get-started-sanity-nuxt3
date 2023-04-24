<template>
  <component :is="htmltag" class="text" :class="size">
    {{ paragraph }}
  </component>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
    paragraph: {
      type: String,
      default: 'Paragraph'
    },
    htmltag: {
      type: String,
      default: 'p'
    },
    size: {
      type: String,
      default: 'regular'
    }
  }
}
</script>

<style scoped lang="scss">
span,
p,
div {
  margin: 10px 0 20px 0;
  padding: 0;
  width: 100%;
}
</style>
