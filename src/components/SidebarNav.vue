<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span class="sidebar-logo">PB</span>
      <span class="sidebar-title">Design System Documentation</span>
    </div>
    <nav class="sidebar-nav">
      <p class="sidebar-section-title">Components</p>
      <a
        v-for="item in componentLinks"
        :key="item.id"
        href="#"
        class="sidebar-link"
        :class="{ active: activePage === item.id }"
        @click.prevent="$emit('navigate', item.id)"
      >{{ item.label }}</a>
      <p class="sidebar-section-title">Foundation</p>
      <a
        v-for="item in foundationLinks"
        :key="item.id"
        :href="'#' + item.id"
        class="sidebar-link"
        :class="{ active: activeSection === item.id }"
        @click.prevent="scrollToSection(item.id)"
      >{{ item.label }}</a>
    </nav>
  </aside>
</template>

<script setup>
defineProps({
  activePage: { type: String, default: 'button' },
  activeSection: { type: String, default: '' },
})

defineEmits(['navigate'])

const componentLinks = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'button', label: 'Button' },
]

const foundationLinks = [
  { id: 'tokens', label: 'Design Tokens' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: var(--brand);
  color: var(--text-inverse);
  padding: 32px 0;
  overflow-y: auto;
  z-index: 10;
}
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--brand-yellow);
  color: var(--brand);
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
}
.sidebar-title { font-weight: 700; font-size: 15px; }
.sidebar-nav { padding: 24px 0; }
.sidebar-section-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  padding: 16px 24px 8px;
}
.sidebar-link {
  display: block;
  padding: 10px 24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: all 0.15s ease;
}
.sidebar-link:hover { color: #fff; background: rgba(255, 255, 255, 0.08); }
.sidebar-link.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border-left: 3px solid var(--brand-yellow);
  padding-left: 21px;
}
</style>
