<template>
  <div>
    <div class="rounded-lg bg-white">
      <div class="relative flex bg-inherit">
        <input
      
          :id="name"
          v-bind="inputBinds"
          :type="inputType"
          :class="{
            'peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-black/20 focus:outline-none focus:ring-2 focus:ring-primary/50':
              !getError(name),
            'peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/50':
              getError(name),
          }"
          :placeholder="label"
        /><label
          :for="name"
          :class="{
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary':
              !getError(name),
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-red-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500':
              getError(name),
          }"
          >{{ label }}</label
        >
      </div>
    </div>
    <div v-if="getError(name)" class="mt-2 text-sm text-red-500">
      {{ getError(name) }}
    </div>
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
