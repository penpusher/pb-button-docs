<template>
  <div>
    <header class="page-header">
      <span class="badge">Component</span>
      <h1>Accordion</h1>
      <p class="header-desc">
        Accordions are used to show and hide sections of related content on a page,
        reducing visual clutter and letting users focus on the information they need.
      </p>
      <div class="meta-row">
        <span class="meta-chip">3 Properties</span>
        <span class="meta-chip">2 Breakpoints</span>
        <span class="meta-chip">3 States</span>
      </div>
    </header>

    <!-- Anatomy -->
    <section class="doc-section" id="anatomy">
      <h2 class="section-title">Anatomy</h2>
      <p class="section-desc">The accordion component is composed of a title, toggle icon, and collapsible content area.</p>
      <div class="anatomy-diagram">
        <div class="anatomy-accordion">
          <div class="anatomy-row">
            <span class="anatomy-part" data-num="1">Accordion title</span>
            <span class="anatomy-part" data-num="2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path d="M16 6v20M6 16h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </div>
          <div class="anatomy-content-placeholder" data-num="3">
            Content area (visible when expanded)
          </div>
        </div>
        <div class="anatomy-legend">
          <span class="legend-item"><span class="legend-num">1</span> Title</span>
          <span class="legend-item"><span class="legend-num">2</span> Toggle icon (plus / minus)</span>
          <span class="legend-item"><span class="legend-num">3</span> Content area</span>
        </div>
      </div>
    </section>

    <!-- Variants - Desktop -->
    <section class="doc-section" id="variants-desktop">
      <h2 class="section-title">Variants — Desktop</h2>
      <p class="section-desc">
        Font: Piraeus Open Sans Bold, 20px / line-height 1.2 (title) · Regular, 16px / line-height 1.4 (content)
      </p>
      <div class="variant-card">
        <div class="variant-grid">
          <div class="variant-grid-header">
            <div class="grid-label"></div>
            <div class="grid-label">Preview</div>
          </div>
          <div v-for="row in desktopRows" :key="row.label" class="variant-grid-row">
            <div class="grid-state">{{ row.label }}</div>
            <div class="grid-cell">
              <div class="accordion-preview desktop">
                <PbAccordion
                  :title="'Accordion title'"
                  :content="sampleContent"
                  :expanded="row.expanded"
                  :state-class="row.stateClass"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Variants - Mobile -->
    <section class="doc-section" id="variants-mobile">
      <h2 class="section-title">Variants — Mobile</h2>
      <p class="section-desc">
        Font: Piraeus Open Sans Bold, 22px / line-height 1.2 (title) · Regular, 18px / line-height 1.4 (content)
      </p>
      <div class="variant-card">
        <div class="variant-grid">
          <div class="variant-grid-header">
            <div class="grid-label"></div>
            <div class="grid-label">Preview</div>
          </div>
          <div v-for="row in mobileRows" :key="row.label" class="variant-grid-row">
            <div class="grid-state">{{ row.label }}</div>
            <div class="grid-cell">
              <div class="accordion-preview mobile">
                <PbAccordion
                  :title="'Accordion title'"
                  :content="sampleContent"
                  :expanded="row.expanded"
                  :mobile="true"
                  :state-class="row.stateClass"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Playground -->
    <section class="doc-section" id="playground">
      <h2 class="section-title">Interactive Playground</h2>
      <p class="section-desc">Configure the accordion properties below to see the result in real time.</p>
      <div class="playground">
        <div class="playground-controls">
          <div class="control-group">
            <label>Breakpoint</label>
            <select v-model="playMobile">
              <option :value="false">Desktop</option>
              <option :value="true">Mobile</option>
            </select>
          </div>
          <div class="control-group">
            <label>Title</label>
            <input v-model="playTitle" type="text">
          </div>
          <div class="control-group">
            <label>Content</label>
            <input v-model="playContent" type="text">
          </div>
        </div>
        <div class="playground-preview">
          <div :class="['accordion-preview', playMobile ? 'mobile' : 'desktop']">
            <PbAccordion
              :key="playKey"
              :title="playTitle"
              :content="playContent"
              :mobile="playMobile"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Design Tokens -->
    <section class="doc-section" id="tokens">
      <h2 class="section-title">Design Tokens</h2>

      <h3 class="subsection-title">Stroke</h3>
      <div class="token-grid">
        <div v-for="t in strokeTokens" :key="t.name" class="token-row">
          <div class="token-swatch" :style="{ background: t.value }"></div>
          <code>{{ t.name }}</code>
          <span class="token-value">{{ t.value }}</span>
        </div>
      </div>

      <h3 class="subsection-title">Text</h3>
      <div class="token-grid">
        <div v-for="t in textTokens" :key="t.name" class="token-row">
          <div class="token-swatch" :style="{ background: t.value }"></div>
          <code>{{ t.name }}</code>
          <span class="token-value">{{ t.value }}</span>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="doc-section" id="typography">
      <h2 class="section-title">Typography</h2>
      <div class="typo-table">
        <div class="typo-header">
          <span>Element</span><span>Token</span><span>Family</span><span>Weight</span><span>Font Size</span><span>Line Height</span>
        </div>
        <div v-for="(spec, key) in allTypography" :key="key" class="typo-row">
          <span class="typo-size">{{ key }}</span>
          <code>{{ spec.token }}</code>
          <span>{{ spec.family }}</span>
          <span>{{ spec.weight }}</span>
          <span>{{ spec.size }}</span>
          <span>{{ spec.lineHeight }}</span>
        </div>
      </div>
    </section>

    <!-- Spacing -->
    <section class="doc-section" id="spacing">
      <h2 class="section-title">Spacing</h2>
      <div class="spacing-table">
        <div class="spacing-header">
          <span>Token</span><span>Value</span><span>Usage</span><span>Visual</span>
        </div>
        <div v-for="s in spacingTokens" :key="s.token" class="spacing-row">
          <code>{{ s.token }}</code>
          <span class="spacing-value">{{ s.value }}</span>
          <span class="spacing-usage">{{ s.usage }}</span>
          <div class="spacing-bar-wrap">
            <div class="spacing-bar" :style="{ width: s.value }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Guidelines -->
    <section class="doc-section" id="usage">
      <h2 class="section-title">Usage Guidelines</h2>
      <div class="usage-grid">
        <div class="usage-card do">
          <h4 class="usage-card-title">Do</h4>
          <ul>
            <li>Use accordions to organize lengthy content into scannable sections</li>
            <li>Keep titles concise and descriptive so users know what content is hidden</li>
            <li>Use the mobile variant for viewports under 768px</li>
            <li>Allow multiple accordion items to be open simultaneously when content is related</li>
            <li>Place the most important or frequently accessed items first</li>
          </ul>
        </div>
        <div class="usage-card dont">
          <h4 class="usage-card-title">Don't</h4>
          <ul>
            <li>Don't nest accordions inside other accordions</li>
            <li>Don't use accordions to hide critical information users must see</li>
            <li>Don't put interactive elements like forms inside an accordion unless necessary</li>
            <li>Don't use an accordion for only one item — just display the content</li>
            <li>Don't override the hover state color styling</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="doc-section" id="code">
      <h2 class="section-title">Code Examples</h2>

      <div class="code-block">
        <div class="code-header">
          <span>Vue.js</span>
          <button class="copy-btn" @click="copy(vueCode)">{{ copied === 'vue' ? 'Copied!' : 'Copy' }}</button>
        </div>
        <pre><code>{{ vueCode }}</code></pre>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span>HTML / CSS</span>
          <button class="copy-btn" @click="copy(htmlCode)">{{ copied === 'html' ? 'Copied!' : 'Copy' }}</button>
        </div>
        <pre><code>{{ htmlCode }}</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PbAccordion from '../components/PbAccordion.vue'
import { accordionTypography, accordionSpacing } from '../assets/tokens'

const sampleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const desktopRows = [
  { label: 'Collapsed', expanded: false, stateClass: '' },
  { label: 'Hover', expanded: false, stateClass: 'hover' },
  { label: 'Expanded', expanded: true, stateClass: 'expanded' },
]

const mobileRows = [
  { label: 'Collapsed', expanded: false, stateClass: '' },
  { label: 'Hover', expanded: false, stateClass: 'hover' },
  { label: 'Expanded', expanded: true, stateClass: 'expanded' },
]

const strokeTokens = [
  { name: 'Stroke/subtler', value: '#edebe4' },
  { name: 'Stroke/subtle-hover', value: '#a8a392' },
]

const textTokens = [
  { name: 'Text/default', value: '#1e1e1e' },
  { name: 'Text/link', value: '#918d08' },
]

const allTypography = {
  'Desktop title': accordionTypography.desktop.title,
  'Desktop content': accordionTypography.desktop.content,
  'Mobile title': accordionTypography.mobile.title,
  'Mobile content': accordionTypography.mobile.content,
}

const spacingTokens = accordionSpacing

const playMobile = ref(false)
const playTitle = ref('Accordion title')
const playContent = ref(sampleContent)
const playKey = computed(() => `${playMobile.value}-${playTitle.value}`)

const copied = ref('')

const vueCode = `<PbAccordion
  title="What is this section about?"
  content="Detailed content goes here..."
/>

<!-- Mobile variant -->
<PbAccordion
  title="Mobile accordion"
  content="Content for smaller screens..."
  :mobile="true"
/>

<!-- Pre-expanded -->
<PbAccordion
  title="Open by default"
  content="This accordion starts expanded."
  :expanded="true"
/>`

const htmlCode = `<div class="pb-accordion">
  <button class="pb-accordion-header">
    <span class="pb-accordion-title">Accordion title</span>
    <span class="pb-accordion-icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6v20M6 16h20" stroke="currentColor"
              stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  </button>
</div>

<!-- Expanded state -->
<div class="pb-accordion expanded">
  <button class="pb-accordion-header">
    <span class="pb-accordion-title">Accordion title</span>
    <span class="pb-accordion-icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 16h20" stroke="currentColor"
              stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  </button>
  <div class="pb-accordion-content">
    <p>Content goes here...</p>
  </div>
</div>`

function copy(text) {
  navigator.clipboard.writeText(text)
  const key = text === vueCode ? 'vue' : 'html'
  copied.value = key
  setTimeout(() => { copied.value = '' }, 2000)
}
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

.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--brand);
  margin-bottom: 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--doc-border);
}
.section-desc { font-size: 14px; color: var(--doc-text-subtle); margin-bottom: 24px; }

/* Anatomy */
.anatomy-diagram {
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  padding: 48px;
  text-align: center;
}
.anatomy-accordion {
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  min-width: 500px;
  border-top: 1px solid var(--stroke-subtle-hover);
  border-bottom: 1px solid var(--stroke-subtle-hover);
  padding: 24px 12px 24px 0;
  gap: 20px;
}
.anatomy-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.anatomy-part {
  position: relative;
  font-weight: 700;
  font-size: 20px;
  color: var(--text-default, #1e1e1e);
}
.anatomy-part::after {
  content: attr(data-num);
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--brand-yellow);
  color: var(--brand);
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.anatomy-content-placeholder {
  position: relative;
  font-size: 14px;
  color: var(--doc-text-subtle);
  padding: 16px;
  background: #f9f9f7;
  border-radius: 6px;
  border: 1px dashed var(--doc-border);
}
.anatomy-content-placeholder::after {
  content: attr(data-num);
  position: absolute;
  top: -12px;
  left: 16px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--brand-yellow);
  color: var(--brand);
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.anatomy-legend {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 36px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--doc-text-subtle);
}
.legend-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--brand-yellow);
  color: var(--brand);
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Variant grid */
.variant-card {
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  overflow: hidden;
}
.variant-grid-header {
  display: grid;
  grid-template-columns: 120px 1fr;
  background: #fafafa;
  border-bottom: 1px solid var(--doc-border);
}
.grid-label {
  padding: 14px 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--doc-text-subtle);
}
.variant-grid-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  border-bottom: 1px solid var(--doc-border);
  align-items: center;
}
.variant-grid-row:last-child { border-bottom: none; }
.grid-state {
  padding: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--doc-text-subtle);
}
.grid-cell {
  padding: 20px 24px;
}

.accordion-preview.desktop { max-width: 844px; }
.accordion-preview.mobile { max-width: 390px; }

/* Playground */
.playground {
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  overflow: hidden;
}
.playground-controls {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: #fafafa;
  border-bottom: 1px solid var(--doc-border);
  flex-wrap: wrap;
}
.control-group { display: flex; flex-direction: column; gap: 6px; }
.control-group label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--doc-text-subtle);
}
.control-group select,
.control-group input {
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid var(--doc-border);
  border-radius: 6px;
  background: #fff;
  font-family: var(--font-sans);
  min-width: 160px;
}
.control-group select:focus,
.control-group input:focus {
  outline: none;
  border-color: var(--stroke-focus);
  box-shadow: 0 0 0 2px rgba(40, 110, 213, 0.2);
}
.playground-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px;
}

/* Tokens */
.subsection-title { font-size: 16px; font-weight: 700; color: var(--doc-text); margin: 28px 0 12px; }
.token-grid { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
.token-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 8px;
}
.token-swatch { width: 32px; height: 32px; border-radius: 6px; flex-shrink: 0; border: 1px solid var(--doc-border); }
.token-row code { flex: 1; font-size: 13px; color: var(--doc-text); }
.token-value { font-size: 13px; font-weight: 600; color: var(--doc-text-subtle); font-family: monospace; }

/* Typography */
.typo-table {
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  overflow: hidden;
}
.typo-header, .typo-row {
  display: grid;
  grid-template-columns: 140px 1.5fr 1.5fr 1fr 0.8fr 0.8fr;
  padding: 14px 20px;
  align-items: center;
}
.typo-header {
  background: #fafafa;
  border-bottom: 1px solid var(--doc-border);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--doc-text-subtle);
}
.typo-row { border-bottom: 1px solid var(--doc-border); font-size: 14px; color: var(--doc-text); }
.typo-row:last-child { border-bottom: none; }
.typo-row code { font-size: 13px; }
.typo-size { font-weight: 700; }

/* Spacing */
.spacing-table {
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  overflow: hidden;
}
.spacing-header, .spacing-row {
  display: grid;
  grid-template-columns: 1fr 0.6fr 1.5fr 1.5fr;
  padding: 14px 20px;
  align-items: center;
}
.spacing-header {
  background: #fafafa;
  border-bottom: 1px solid var(--doc-border);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--doc-text-subtle);
}
.spacing-row { border-bottom: 1px solid var(--doc-border); font-size: 14px; }
.spacing-row:last-child { border-bottom: none; }
.spacing-row code { font-size: 13px; }
.spacing-value { font-weight: 600; font-family: monospace; color: var(--doc-text-subtle); }
.spacing-usage { font-size: 13px; color: var(--doc-text-subtle); }
.spacing-bar-wrap { height: 18px; background: #f5f5f5; border-radius: 4px; overflow: hidden; }
.spacing-bar { height: 100%; background: var(--brand-yellow); border-radius: 4px; }

/* Usage */
.usage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.usage-card { border-radius: 12px; padding: 28px; border: 1px solid; }
.usage-card.do { background: #f0fdf4; border-color: #bbf7d0; }
.usage-card.dont { background: #fef2f2; border-color: #fecaca; }
.usage-card-title { font-size: 15px; font-weight: 700; margin-bottom: 12px; }
.usage-card.do .usage-card-title { color: #16a34a; }
.usage-card.dont .usage-card-title { color: #dc2626; }
.usage-card ul { margin: 0; padding-left: 20px; }
.usage-card li { font-size: 14px; color: var(--doc-text); line-height: 1.7; }

/* Code */
.code-block {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
}
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #2d2d2d;
  font-size: 13px;
  color: #aaa;
}
.copy-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #aaa;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.copy-btn:hover { background: rgba(255, 255, 255, 0.2); color: #fff; }
.code-block pre {
  padding: 20px;
  margin: 0;
  overflow-x: auto;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #d4d4d4;
}
</style>
