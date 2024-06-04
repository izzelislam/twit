<script setup>
  import useTailwindConfig from '~/composable/useTailwindConfig';
  const props = defineProps({
    active : {
      type: Boolean,
      default: false
    }
  })

  const textClasses = computed(() => {
    props.active ? 'font-semibold' : 'font-normal'
  })

  const { defaultTransition } = useTailwindConfig();

</script>

<template>
  <div>

    <NuxtLink to="#" class="flex items-center p-3 w-min text-black hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">
      <div class="w-6 h-6 text-dark" :class="defaultTransition">
        <slot name="icon"></slot>
      </div>
      <div class="hidden xl:block ml-4 text-xl" :class="textClasses">
        <slot name="name"></slot>
      </div>
    </NuxtLink>
    
  </div>
</template>
