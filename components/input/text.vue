<template>
  <div class="ooonoInput">
    <label :class="iconPlacement">
      <input
        @keyup="updateValueClass"
        :type="type"
        class="text"
        :class="size"
        :placeholder="placeholder"
        :value="value"
      />
      <span v-if="hasIcon" class="icon" @click="submitFunction">
        <base-icon :name="icon" size="small" />
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'inputText',
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Text Field Placeholder'
      },
      size: {
        type: String,
        default: 'regular'
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: 'view'
      },
      iconPlacement: {
        type: String,
        default: 'right'
      },
      status: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      submitFunction: {
        type: Function,
        default: () => {}
      }
    },

    methods: {
      updateValueClass(e) {
        this.$emit('input', e.target.value)
        if (e.target.value !== '') {
          e.target.classList.add('hasValue')
        } else {
          e.target.classList.remove('hasValue')
        }
      }
    },
    mounted() {
      if (this.status !== '') {
        this.$el.classList.add(this.status)
        this.$el.classList.add('status')
      }

      if (this.hasIcon) {
        this.$el.classList.add('hasIcon')
      }
    }
  }
</script>

<style lang="scss">
  @import '/assets/css/variables.scss';

  .ooonoInput {
    label {
      position: relative;
    }
    input {
      padding: 0 0 10px;
      border: none;
      border-bottom: 1px solid $grey-light;
      width: 100%;
      height: 100%;
      font-family: 'ooono';
      background-color: transparent;
      font-weight: 100;
      min-height: 50px;

      &.small {
        min-height: unset;
        font-size: $small + 2px;
      }
      &.regular {
        font-size: $regular + 2px;
      }
      &.large {
        font-size: $large + 2px;
      }

      &.hasValue {
        border-bottom: 1px solid $black;
        &::placeholder {
          color: $black;
        }
      }
      &:focus-visible {
        outline: none;
        border-bottom: 1px solid $black;
      }
    }

    &.hasIcon {
      .icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        svg,
        span.baseicon.small {
          pointer-events: none;
        }
      }

      &.left {
        input {
          padding: 0 10px 10px 40px;
        }
        .icon {
          left: 10px;
          right: unset;
        }
      }
      &.right {
        input {
          padding: 0 40px 10px 10px;
        }
        .icon {
          right: 10px;
          left: unset;
        }
      }
    }

    .status {
      &.disabled {
        > label > input {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      &.success {
        > label > input {
          border-color: $primary-highlight;
        }
      }
      &.warning {
        > label > input {
          border-color: $secoundary-highlight;
        }
      }
      &.danger {
        > label > input {
          border-color: $tertiary-highlight;
        }
      }
    }
  }
</style>
