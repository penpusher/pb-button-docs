<template>
  <div
    class="pb-accordion"
    :class="{ expanded: isExpanded, hover: isHovered, mobile: mobile }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <button class="pb-accordion-header" @click="toggle">
      <span class="pb-accordion-title">{{ title }}</span>
      <span class="pb-accordion-icon">
        <svg v-if="!isExpanded" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 6v20M6 16h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 16h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>
    </button>
    <div v-if="isExpanded" class="pb-accordion-content">
      <slot>
        <p>{{ content }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Accordion title' },
  content: { type: String, default: '' },
  expanded: { type: Boolean, default: false },
  mobile: { type: Boolean, default: false },
  stateClass: { type: String, default: '' },
})

const isExpanded = ref(props.expanded)
const isHovered = ref(false)

watch(() => props.expanded, (val) => { isExpanded.value = val })

if (props.stateClass === 'hover') isHovered.value = true
if (props.stateClass === 'expanded') isExpanded.value = true

function toggle() {
  if (props.stateClass) return
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.pb-accordion {
  border-top: 1px solid var(--stroke-subtler);
  border-bottom: 1px solid var(--stroke-subtler);
  padding: 24px 12px 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-sans);
  transition: border-color 0.15s ease;
}

.pb-accordion.expanded {
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-color: var(--stroke-subtle-hover);
}

.pb-accordion.hover {
  border-color: var(--stroke-subtle-hover);
}

.pb-accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}

.pb-accordion-title {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  color: var(--text-default);
  text-align: left;
}

.pb-accordion.hover .pb-accordion-title {
  color: var(--text-link);
}

.pb-accordion-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--text-default);
}

.pb-accordion.hover .pb-accordion-icon {
  color: var(--text-link);
}

.pb-accordion-content {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text-default);
  width: 100%;
  max-width: 832px;
}

/* Mobile variant */
.pb-accordion.mobile {
  padding: 16px 12px 16px 0;
}

.pb-accordion.mobile .pb-accordion-title {
  font-size: 22px;
}

.pb-accordion.mobile .pb-accordion-content {
  font-size: 18px;
}
</style>
