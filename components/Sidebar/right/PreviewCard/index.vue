<script setup>
  import useTailwindConfig from '~/composable/useTailwindConfig';
  
  const { twitterBorderColor, defaultTransition } = useTailwindConfig();

  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  });

</script>

<template>
  <div class="m-2 border bg-gray-50 rounded-2xl dark:bg-dim-700 overflow-hidden" :class="twitterBorderColor">
    
    <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="twitterBorderColor">{{ title }}</h1>
    
    <slot></slot>

    <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dak:hover:bg-dim-300" :class="defaultTransition">
      Show more
    </div>

  </div>
</template>
