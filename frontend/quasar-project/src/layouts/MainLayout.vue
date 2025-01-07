<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'IndexPage',
    caption: 'quasar.dev',
    icon: 'school',
    link: '#/IndexPage'
  },
  {
    title: 'AboutPage',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '#/AboutPage'
  },
  {
    title: 'LocationPage',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '#/LocationPage'
  },
  {
    title: 'PopisKnjigaPage',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '#/PopisKnjigaPage'
  },
  {
    title: 'PretrazivanjePage',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '#/PretrazivanjePage'
  },
  {
    title: 'LoginPage',
    caption: '@QuasarFramework',
    icon: 'public',
    link: '#/LoginPage'
  },
  {
    title: 'RegisterPage',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'RegisterPage'
  }
 
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
