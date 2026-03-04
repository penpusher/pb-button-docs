<template>
  <div>
    <header class="page-header">
      <span class="badge">Component</span>
      <h1>Button</h1>
      <p class="header-desc">
        Buttons are used to trigger actions or navigate. They come in multiple
        styles, sizes, and states to serve different levels of hierarchy and context.
      </p>
      <div class="meta-row">
        <span class="meta-chip">4 Variants</span>
        <span class="meta-chip">2 Sizes</span>
        <span class="meta-chip">5 States</span>
      </div>
    </header>

    <AnatomySection />
    <VariantGrid size="medium" />
    <VariantGrid size="large" />
    <PlaygroundSection />
    <TokenSection />
    <TypographySection />
    <SpacingSection />
    <UsageSection />
    <CodeSection />
  </div>
</template>

<script setup>
import AnatomySection from '../components/AnatomySection.vue'
import VariantGrid from '../components/VariantGrid.vue'
import PlaygroundSection from '../components/PlaygroundSection.vue'
import TokenSection from '../components/TokenSection.vue'
import TypographySection from '../components/TypographySection.vue'
import SpacingSection from '../components/SpacingSection.vue'
import UsageSection from '../components/UsageSection.vue'
import CodeSection from '../components/CodeSection.vue'
</script>

<style scoped>
.page-header { margin-bottom: 56px; }
.badge {
  display: inline-block;
  background: var(--brand-yellow);
  color: var(--brand);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}
.page-header h1 {
  font-size: 40px;
  font-weight: 700;
  color: var(--brand);
  margin-bottom: 12px;
}
.header-desc {
  font-size: 16px;
  color: var(--doc-text-subtle);
  line-height: 1.6;
  max-width: 640px;
  margin-bottom: 20px;
}
.meta-row { display: flex; gap: 10px; }
.meta-chip {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 100px;
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  color: var(--doc-text-subtle);
}
</style>
