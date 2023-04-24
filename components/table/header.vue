<template>
  <div>
    <tr>
      <th v-for="(heading, index) in headings" v-bind:key="index">
        {{ heading }}
      </th>
    </tr>
  </div>
</template>

<script>
  export default {
    name: 'headings',
    props: {
      headings: {
        type: Array,
        default: () => {}
      },
      class: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/variables.scss';

  tr {
    display: flex;
    flex-direction: row;
    border-top: none;
    color: $grey-medium;
    transition: 0.2s ease-in-out background-color;

    th {
      width: 100%;
      text-align: center;
      padding: 15px;
      width: 100%;
      font-size: $tiny;
      text-align: left;
      font-weight: 600;
      text-transform: uppercase;
      padding-bottom: $standard-spacing;

      @media (max-width: 1550px) {
        padding-bottom: $standard-spacing--half;
      }

      &:first-of-type {
        display: block;
        text-align: left;
      }
      &:last-of-type {
        display: flex;
        justify-content: flex-end;
        text-align: right;
      }
    }
  }
</style>
