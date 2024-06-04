<script setup>

const emmit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
});

</script>

<template>
  <div>
    <label v-if="label" 
      class="block pl-3 ml-px text-sm font-medium text-gray-700"  
      for="">{{ label }}
    </label>

    <div class="mt-1">
      <input 
        :type="type" 
        :value="modelValue" 
        class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
        :placeholder="placeholder"
        @input="emmit('update:modelValue', $event.target.value)"
      >
    </div>
  </div>
</template>