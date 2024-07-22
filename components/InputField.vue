<template>
  <label v-if="label" :for="name">
    {{ label }}
  </label>
  <input
    :id="name"
    v-bind="inputBinds"
    :type="inputType"
  >
  <div
    v-if="getError(name)"
    class="error">
    {{ getError(name) }}
  </div>
</template>

<script setup>
import {toRef} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: [String, Boolean],
    default: false,
    required: false
  },
  errorBag: {
    type: Object,
    required: true
  },
  defineInputBinds: {
    type: Function,
    required: true
  },
  inputType: {
    type: String,
    default: 'text',
    required: false
  }
})

const errorBag = toRef(props, 'errorBag')
const inputBinds = props.defineInputBinds(props.name)

const getError = (name) => {
  const err = errorBag.value[name]
  return err ? err[0] : false
}
</script>

<style scoped>
.error {
  color: red;
}
</style>