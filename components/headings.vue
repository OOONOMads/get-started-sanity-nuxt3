<template>
  <component :class="size" :is="'h' + htmltag"> {{ heading }} </component>
</template>

<script>
export default {
  name: 'headings',
  props: {
    heading: {
      type: String,
      default: 'Heading'
    },
    htmltag: {
      type: String,
      default: '1'
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/css/variables.scss';

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  width: 100%;
  //color: inherit;
  text-transform: initial;

  &.uppercase {
    text-transform: uppercase;
  }
}

h1,
h2,
h3 {
  margin: 10px 0 50px 0;
}

h4,
h5,
h6 {
  margin: 10px 0 $standard-spacing 0;

  @media (max-width: 1550px) {
    margin: 10px 0 $standard-spacing--half 0;
  }
}
</style>
