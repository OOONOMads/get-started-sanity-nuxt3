<template>
  <div>
    <tr v-for="(content, index) in content" v-bind:key="index">
      <NuxtLink :to="locale + content.destination">
        <td>
          <span>{{ content.text }}</span>
        </td>
        <td>
          <Paragraph :paragraph="content.userid" size="small" htmltag="span" />
        </td>
        <td>
          <Paragraph :paragraph="content.datetime" size="small" htmltag="span" />
        </td>

      </NuxtLink>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'headings',
  data() {
    return {
      locale: ''
    }
  },
  props: {
    content: {
      type: Array,
      default: () => { }
    },
    class: {
      type: String,
      default: ''
    }
  }, mounted() {
    this.locale = document.documentElement.getAttribute('lang');
    if (this.locale) {
      if (this.locale === 'en') {
        this.locale = ''
      } else {
        this.locale = '/' + this.locale
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/variables.scss';

tr {
  border-bottom: 1px solid $grey-lightest;
  transition: 0.2s ease-in-out background-color;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: $grey-lightest;
    transition: 0.3s ease-in-out background-color;
  }

  a {
    text-decoration: none;

    display: flex;
    justify-content: space-between;
    color: $dark;
    padding: 15px;
    width: 100%;

    * {
      pointer-events: none;
    }

    td {
      width: 100%;
      font-size: $small;

      @media (max-width: 600px) {
        font-size: $tiny;
      }

      >span {
        margin: 20px 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      &:first-of-type {
        display: flex;
        text-align: left;
        justify-content: flex-start;
      }

      &:last-of-type {
        display: flex;
        justify-content: flex-end;
        text-align: right;
      }
    }
  }
}
</style>
