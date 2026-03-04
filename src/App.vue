<template>
  <div class="app-layout">
    <SidebarNav :active-page="activePage" @navigate="navigateTo" />
    <main class="main-content">
      <ButtonPage v-if="activePage === 'button'" />
      <AccordionPage v-else-if="activePage === 'accordion'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarNav from './components/SidebarNav.vue'
import ButtonPage from './pages/ButtonPage.vue'
import AccordionPage from './pages/AccordionPage.vue'

const activePage = ref('button')

function navigateTo(id) {
  activePage.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.app-layout { display: flex; min-height: 100vh; }
.main-content {
  margin-left: 240px;
  flex: 1;
  padding: 48px 64px;
  max-width: 1100px;
}
</style>
