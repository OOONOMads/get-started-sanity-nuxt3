<template>
  <div class="ooonoInput password">
    <label class="password" :class="iconPlacement">
      <input
        @keyup="updateValueClass"
        v-if="showPassword"
        type="text"
        :class="size"
        class="text"
        v-model="password"
        :placeholder="placeholder"
      />

      <input
        @keyup="updateValueClass"
        v-else
        type="password"
        class="text"
        :class="size"
        v-model="password"
        :placeholder="placeholder"
      />

      <span v-if="hasIcon" class="icon" :class="iconState" @click="toggleShow">
        <base-icon :name="'view'" size="small" />
      </span>
      <span
        v-if="hasIcon"
        class="icon"
        :class="iconStateFilled"
        @click="toggleShow"
      >
        <base-icon :name="'view--off'" size="small" />
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'inputPassword',
    props: {
      placeholder: {
        type: String,
        default: 'Text Field Placeholder'
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'regular'
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
      }
    },

    data() {
      return {
        showPassword: false,
        password: null,
        iconState: 'inactive',
        iconStateFilled: 'active'
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
      },
      toggleShow() {
        this.showPassword = !this.showPassword

        if (this.showPassword) {
          this.iconStateFilled = 'inactive'
          this.iconState = 'active'
        } else {
          this.iconStateFilled = 'active'
          this.iconState = 'inactive'
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
    },
    created() {
      //Sets default icon
      this.svg = 'view--filled'
    }
  }
</script>

<style lang="scss">
  @import '/assets/css/variables.scss';

  .ooonoInput.password {
    position: relative;
    input {
      min-height: 50px;
      padding: 0 0 10px;
      border: none;
      border-bottom: 1px solid $grey-light;
      width: 100%;
      height: 100%;
      font-family: 'ooono';
      font-size: $regular + 2px;
      background-color: transparent;

      &.hasValue {
        border-bottom: 1px solid $black;
      }
      &:focus-visible {
        outline: none;
        border-bottom: 1px solid $black;
      }
    }
    .icon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);

      &.inactive {
        display: none;
      }
    }
  }
</style>
