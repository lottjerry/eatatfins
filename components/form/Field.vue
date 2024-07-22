<template>
  <div>
    <div class="rounded-lg bg-white">
      <div class="relative flex bg-inherit">
        <input
          :type="type"
          :id="id"
          v-model="value"
          @blur="handleBlur"
          :class="{
            'peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-black/20 focus:outline-none focus:ring-2 focus:ring-primary/50':
              !errorMessage,
            'peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/50':
              errorMessage,
          }"
          :placeholder="label"
        /><label
          :for="id"
          :class="{
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary':
              !errorMessage,
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-red-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500':
              errorMessage,
          }"
          >{{ label }}</label
        >
      </div>
    </div>
    <div v-if="errorMessage" class="mt-2 text-sm text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from 'vue';
import { StringSchema } from 'yup'

  interface Props {
    label: string
    type: string
    id: string
    validator?: StringSchema<string> | undefined
    validateOnChange?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    validator: undefined,
    validateOnChange: false
  })

  const validateOnChange = toRef(props, 'validateOnChange')

  const handleBlur = async () => {
    await validate()
  }

  const { value, errorMessage, validate } = useField(props.id, props.validator, {
    validateOnValueUpdate: validateOnChange.value
  })
</script>
