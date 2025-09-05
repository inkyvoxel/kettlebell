# Kettlebell Routine Tracker - Development Plan

## Overview

Build a simple single-page vanilla JavaScript app for tracking kettlebell routines. Users select beginner/intermediate/advanced, then follow the routine step-by-step with rest timers and navigation.

## Requirements

- Single-page app using vanilla HTML/CSS/JS
- Routine selection (beginner/intermediate/advanced)
- Step-by-step display of exercises and rests
- Visual timer for rest periods (60-90 seconds)
- Next/Back navigation between steps
- Minimal CSS for desktop/mobile responsiveness
- No progress tracking over time
- Based on routines from README.md

## Data Structure

Define routines as arrays of steps:

- Work steps: { type: 'work', exercise: 'Kettlebell Swings', set: 1, reps: '10-15' }
- Rest steps: { type: 'rest', duration: 60-90 }

## Steps to Build

### 1. Define Routine Data

- [x] Create JavaScript object/array for beginner routine steps
- [x] Create JavaScript object/array for intermediate routine steps
- [x] Create JavaScript object/array for advanced routine steps
- [x] Include all sets and rests in sequence

### 2. HTML Structure

- [x] Update index.html with app structure
- [x] Add routine selection screen (buttons for beginner/intermediate/advanced)
- [x] Add routine display area (current step, next/back buttons)
- [x] Add timer display area (for rest steps)
- [x] Ensure semantic HTML

### 3. CSS Styling

- [x] Basic layout and typography
- [x] Responsive design for mobile/desktop
- [x] Style buttons and timer display
- [x] Minimal, clean appearance
- [x] No complex animations

### 4. JavaScript Functionality

- [x] Routine selection logic
- [x] Step navigation (next/back)
- [x] Timer implementation for rest steps (countdown with visual indicator)
- [x] State management (current step, selected routine)
- [x] Display current step instructions
- [x] Handle routine completion

### 5. Testing and Refinement

- [x] Test routine selection
- [x] Test step navigation
- [x] Test timer functionality
- [x] Test on different screen sizes
- [x] Fix any bugs
- [x] Ensure minimal helper text as requested

### 6. Final Touches

- [x] Update README.md with new usage instructions
- [x] Ensure app works offline (vanilla)
- [x] Code cleanup and comments

## Notes

- Keep it simple - no external libraries
- Focus on core functionality first
- Timer should be visual (countdown display)
- Rest duration is 60-90 seconds, perhaps use 75 seconds as default or let user choose
- For intermediate/advanced, handle per-side reps appropriately in display
