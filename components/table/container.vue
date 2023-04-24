<template>
  <div v-if="content">
    <table :class="tableClass" class="ooono-table">
      <tbody>
        <TableHeader :headings="content.headings" />
        <TableBody :content="content.recent" />
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'otable',
    props: {
      tableClass: {
        type: String,
        default: ''
      },
      content: {
        type: Object,
        default: () => {}
      }
    },
    mounted() {}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/variables.scss';
  .ooono-table {
    margin: auto;
    max-width: 100%;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    color: $dark;
    overflow: hidden;
  }
</style>
