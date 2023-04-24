<template>
  <div>
    <button :type="btnType" :class="state" class="obutton text bold">
      <span> {{ btnLabel }}</span>

      <div class="spinner-container">
        <img src="@/assets/images/svg/spinner.svg" alt="Spinner" />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnLabel: {
      type: String,
      default: 'Button'
    },
    state: {
      type: String,
      default: 'primary'
    },
    btnSize: {
      type: String,
      default: 'smallBtn'
    },
    btnType: {
      type: String,
      default: 'submit'
    },
    class: {
      type: String,
      default: ''
    },
    hasSpinner: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '/assets/css/variables.scss';

.obutton {
  text-decoration: none;
  font-size: $small;
  border: none;
  border-radius: 8px;
  padding: 15px 24px;
  cursor: pointer;
  transition: 0.3s ease-in-out background-color, 0.3s ease-in-out color;

  :hover {
    transition: 0.2s ease-in-out background-color, 0.2s ease-in-out color;
  }

  &.largeBtn {
    font-size: $regular;
    padding: 20px 32px;
  }

  &.disabled {
    background-color: $grey-medium;
    color: $white;
    cursor: not-allowed;
  }

  &.primary {
    background-color: $primary-color--c01;
    color: $white;

    span {
      color: $white !important;
    }

    &:hover {
      background-color: $primary-color--c03;
    }
  }

  &.link {
    background-color: transparent;
    color: $primary-color--c01;
    border: 1px solid $primary-color--c01;
    padding: 0;

    &:hover {
      background-color: transparent;
      color: $primary-color--c03;
    }

    &.danger {
      background-color: $secoundary-highlight;
      color: $white;

      &:hover {
        background-color: darken($secoundary-highlight, 5%);
      }
    }

    &.success {
      background-color: $primary-highlight;
      color: $white;

      &:hover {
        background-color: darken($primary-highlight, 5%);
      }
    }
  }

  .spinner-container {
    display: none;
  }

  &.spinning {
    padding: 0px 24px;

    .spinner-container {
      display: block;
    }

    >span {
      display: none;
    }
  }
}
</style>
