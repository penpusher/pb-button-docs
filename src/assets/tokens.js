export const colors = {
  primary: {
    bg: '#002f30',
    hover: '#557475',
    active: '#002728',
  },
  brand: {
    bg: '#ffd900',
    hover: '#ffe655',
    active: '#d5b500',
  },
  secondaryTransp: {
    hover: '#fff2aa',
    active: '#fff2aa',
  },
  stroke: {
    brand: '#002f30',
    focus: '#286ed5',
    disabled: '#bdbdbd',
  },
  text: {
    inverse: '#ffffff',
    brand: '#002f30',
    disabled: '#bdbdbd',
  },
  bg: {
    disabled: '#e9e9e9',
  },
}

export const typography = {
  medium: { token: 'Desktop/par-md-strong', family: 'Piraeus Open Sans', weight: 'Bold (700)', size: '16px', lineHeight: '1.4' },
  large: { token: 'Desktop/par-lg-strong', family: 'Piraeus Open Sans', weight: 'Bold (700)', size: '20px', lineHeight: '1.5' },
}

export const spacing = [
  { token: 'spacing-2', value: '8px' },
  { token: 'spacing-3', value: '12px' },
  { token: 'spacing-4', value: '16px' },
  { token: 'spacing-5', value: '24px' },
  { token: 'spacing-6', value: '32px' },
]

export const styles = ['primary', 'primary-brand', 'secondary', 'transparent']
export const states = ['normal', 'hover', 'active-state', 'focus', 'disabled']
export const sizes = ['medium', 'large']

export const accordionColors = {
  stroke: {
    subtler: '#edebe4',
    subtleHover: '#a8a392',
  },
  text: {
    default: '#1e1e1e',
    link: '#918d08',
  },
}

export const accordionTypography = {
  desktop: {
    title: { token: 'Desktop/head-xs', family: 'Piraeus Open Sans', weight: 'Bold (700)', size: '20px', lineHeight: '1.2' },
    content: { token: 'Desktop/par-md', family: 'Piraeus Open Sans', weight: 'Regular (400)', size: '16px', lineHeight: '1.4' },
  },
  mobile: {
    title: { token: 'Mobile/(m)head-xs', family: 'Piraeus Open Sans', weight: 'Bold (700)', size: '22px', lineHeight: '1.2' },
    content: { token: 'Mobile/(m)par-md', family: 'Piraeus Open Sans', weight: 'Regular (400)', size: '18px', lineHeight: '1.4' },
  },
}

export const accordionSpacing = [
  { token: 'spacing-3', value: '12px', usage: 'Right padding (icon area)' },
  { token: 'spacing-4', value: '16px', usage: 'Vertical padding (mobile)' },
  { token: 'spacing-5', value: '24px', usage: 'Vertical padding (desktop), gap between title and content' },
]
