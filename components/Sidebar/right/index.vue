<script setup>
  const happenings = ref([
    {
      title : "SpaceX",
      count : "2.4k Tweets"
    },
    {
      title : "#CodingIsFun",
      count : "2.0k Tweets"
    },
    {
      title : "#ArtForAll",
      count : "1.4k Tweets"
    }
  ]);

  const whoToFollow = ref([
    {
      name : "SpaceX",
      handle : "@SpaceX",
      image: "https://picsum.photos/200/200"
    },
    {
      name : "SpaceX",
      handle : "@SpaceX",
      image: "https://picsum.photos/200/200"
    },
    {
      name : "SpaceX",
      handle : "@SpaceX",
      image: "https://picsum.photos/200/200"
    }
  ]);

</script>

<template>
  <div class="flex flex-col">
    
    <!-- Preview Card : What's happening -->
    <SidebarRightPreviewCard title="What's happening" >

      <SidebarRightPreviewCardItem v-for="h in happenings" :key="h.title">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ h.title }}</h2>
          <p class="text-xs text-gray-500">
            {{ h.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    
    </SidebarRightPreviewCard>
    
    
    <!-- Preview Card : Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem 
        v-for="(follow, index) in whoToFollow"
        :key="index"
      >
        <div class="flex flex-row justify-between items-center  p-2">
          <div class="flex flex-row">
            <img class="w-10 h-10 rounded-full" :src="follow.image" :alt="follow.name">
            <div class="flex flex-col ml-2">
              <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ follow.name }}</h2>
              <p class="text-xs text-gray-500">
                {{ follow.handle }}
              </p>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    
  </div>
</template>
