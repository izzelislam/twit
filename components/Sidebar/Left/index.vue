<script setup>
import useTailwindConfig from '~/composable/useTailwindConfig';
import {HomeIcon} from '@heroicons/vue/solid';
import { BellIcon, BookmarkIcon, DocumentTextIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/vue/outline';


  const { defaultTransition } = useTailwindConfig();

</script>

<template>
  <div class="h-screen flex flex-col">

    <div class="p-2 my-2 hover:rounded-full hover:bg-blue-300 w-min
      dark:hover:bg-white/20
    "
    :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter/>
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-3">
      
          <SidebarLeftTab>
            <template v-slot:icon>
              <HomeIcon/>
            </template>
            <template v-slot:name>
              Home
            </template>
          </SidebarLeftTab>

          <SidebarLeftTab>
            <template v-slot:icon>
              <HashtagIcon/>
            </template>
            <template v-slot:name>
              Explore
            </template>
          </SidebarLeftTab>

          <SidebarLeftTab>
            <template v-slot:icon>
              <BellIcon/>
            </template>
            <template v-slot:name>
              Notifications
            </template>
          </SidebarLeftTab>

          <SidebarLeftTab>
            <template v-slot:icon>
              <BookmarkIcon/>
            </template>
            <template v-slot:name>
              Bookmarks
            </template>
          </SidebarLeftTab>

          <SidebarLeftTab>
            <template v-slot:icon>
              <DocumentTextIcon/>
            </template>
            <template v-slot:name>
              List
            </template>
          </SidebarLeftTab>

          <SidebarLeftTab>
            <template v-slot:icon>
              <UserIcon/>
            </template>
            <template v-slot:name>
              Profile
            </template>
          </SidebarLeftTab>

          <SidebarLeftTab>
            <template v-slot:icon>
              <DotsCircleHorizontalIcon/>
            </template>
            <template v-slot:name>
              More
            </template>
          </SidebarLeftTab>

    </div>

  </div>
</template>
