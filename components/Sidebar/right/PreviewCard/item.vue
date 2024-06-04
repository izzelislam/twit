<script setup>
  import useTailwindConfig from '~/composable/useTailwindConfig';

  const { defaultTransition, twitterBorderColor } = useTailwindConfig();

  const wrapperClases = computed(() => `${defaultTransition} ${twitterBorderColor}`);

</script>

<template>
  <div class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b" :class="wrapperClases">
    <slot></slot>
  </div>
</template>
