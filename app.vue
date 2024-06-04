
<template>
  
  <div :class="{'dark': darkMode}">

    <div class="bg-white dark:bg-dim-900">

      <!-- app -->
      <div v-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm-px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
  
          <!-- left sidebar -->
            <div class="hidden md:block xs:col-span-1 xl:col-span-2">
              <div class="sticky top-0">
                <SidebarLeft/>
              </div>
            </div>
          <!-- endleft sidebar -->
          
          <!-- main content -->
            <div class="col-span-12 md:col-span-8 xl:col-span-6">
              <router-view/>
            </div>
          <!-- endmain content -->
          
          <!-- right sidebar -->
          <div class="hidden col-span-12 md:block md:col-span-3 xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>
          <!-- end right sidebar -->
  
        </div>

      </div>

      <!-- auth page -->
      <AuthPage v-else/>

    </div>

  </div>

</template>

<script setup>
import useAuth from "./composable/useAuth";
  const darkMode = ref(false);

  const { useAuthUser, initAuth } = useAuth();
  const user = useAuthUser();

  onBeforeMount(() => {
    initAuth();
  })

  // console.log(user);

</script>
