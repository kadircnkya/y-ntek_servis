import React from 'react'

export function ServiceIcon({ icon }) {
  if (icon === 'dish') {
    return (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
        <path d="M10 28C10 18.06 18.06 10 28 10L29.5 13C21.49 13 15 19.49 15 27.5L10 28Z" fill="currentColor"/>
        <ellipse cx="20" cy="22" rx="7" ry="11" transform="rotate(-35 20 22)" fill="currentColor"/>
        <line x1="19" y1="21" x2="31" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="31" cy="13" r="3" fill="currentColor"/>
        <line x1="12" y1="30" x2="6" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="3" y1="38" x2="15" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  }
  if (icon === 'signal') {
    return (
      <svg viewBox="0 0 44 44" fill="currentColor">
        <rect x="6" y="28" width="6" height="12" rx="1.5"/>
        <rect x="15" y="21" width="6" height="19" rx="1.5"/>
        <rect x="24" y="13" width="6" height="27" rx="1.5"/>
        <rect x="33" y="6" width="6" height="34" rx="1.5"/>
      </svg>
    )
  }
  if (icon === 'building') {
    return (
      <svg viewBox="0 0 44 44" fill="currentColor">
        <rect x="4" y="14" width="14" height="26" rx="1.5"/>
        <rect x="18" y="8" width="18" height="32" rx="1.5"/>
        <line x1="27" y1="8" x2="27" y2="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="24" y1="5" x2="30" y2="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  }
  if (icon === 'tv') {
    return (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
        <rect x="4" y="8" width="36" height="24" rx="3" strokeWidth="3"/>
        <line x1="16" y1="36" x2="28" y2="36" strokeWidth="3" strokeLinecap="round"/>
        <line x1="22" y1="32" x2="22" y2="36" strokeWidth="3"/>
      </svg>
    )
  }
  if (icon === 'frequency') {
    return (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
        <rect x="4" y="8" width="36" height="24" rx="3" strokeWidth="3"/>
        <path d="M16 23C16 18.5 19.5 15 24 15" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="16" r="1.5" fill="currentColor"/>
        <line x1="20" y1="21" x2="26" y2="16" strokeWidth="1.8"/>
        <line x1="16" y1="36" x2="28" y2="36" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  }
  if (icon === 'cctv') {
    return (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
        <path d="M7 16L32 10L35 22L10 28L7 16Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
        <polygon points="32,10 40,7 39,23 35,22" fill="currentColor"/>
        <path d="M13 27L13 36L20 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  return null
}

