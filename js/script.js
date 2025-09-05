// Routine data for kettlebell tracker
const routines = {
  beginner: [
    {
      type: "work",
      exercise: "Kettlebell Swings (Two-Handed)",
      set: 1,
      reps: "10-15",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Kettlebell Swings (Two-Handed)",
      set: 2,
      reps: "10-15",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Kettlebell Swings (Two-Handed)",
      set: 3,
      reps: "10-15",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Two-Handed Overhead Press",
      set: 1,
      reps: "8-12",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Two-Handed Overhead Press",
      set: 2,
      reps: "8-12",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Two-Handed Overhead Press",
      set: 3,
      reps: "8-12",
    },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 1, reps: "8-12" },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 2, reps: "8-12" },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 3, reps: "8-12" },
    { type: "rest", duration: 60 },
  ],
  intermediate: [
    {
      type: "work",
      exercise: "Kettlebell Swings (Two-Handed or Mixed)",
      set: 1,
      reps: "12-15",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Kettlebell Swings (Two-Handed or Mixed)",
      set: 2,
      reps: "12-15",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Kettlebell Swings (Two-Handed or Mixed)",
      set: 3,
      reps: "12-15",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Single-Handed Overhead Press",
      set: 1,
      reps: "8-12 reps left side",
    },
    {
      type: "work",
      exercise: "Single-Handed Overhead Press",
      set: 1,
      reps: "8-12 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Single-Handed Overhead Press",
      set: 2,
      reps: "8-12 reps left side",
    },
    {
      type: "work",
      exercise: "Single-Handed Overhead Press",
      set: 2,
      reps: "8-12 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Single-Handed Overhead Press",
      set: 3,
      reps: "8-12 reps left side",
    },
    {
      type: "work",
      exercise: "Single-Handed Overhead Press",
      set: 3,
      reps: "8-12 reps right side",
    },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 1, reps: "8-12" },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 2, reps: "8-12" },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 3, reps: "8-12" },
    { type: "rest", duration: 60 },
  ],
  advanced: [
    {
      type: "work",
      exercise: "Kettlebell Swings (Single-Handed)",
      set: 1,
      reps: "12-15 reps left side",
    },
    {
      type: "work",
      exercise: "Kettlebell Swings (Single-Handed)",
      set: 1,
      reps: "12-15 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Kettlebell Swings (Single-Handed)",
      set: 2,
      reps: "12-15 reps left side",
    },
    {
      type: "work",
      exercise: "Kettlebell Swings (Single-Handed)",
      set: 2,
      reps: "12-15 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Kettlebell Swings (Single-Handed)",
      set: 3,
      reps: "12-15 reps left side",
    },
    {
      type: "work",
      exercise: "Kettlebell Swings (Single-Handed)",
      set: 3,
      reps: "12-15 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Single-Arm Clean and Press",
      set: 1,
      reps: "8-10 reps left side",
    },
    {
      type: "work",
      exercise: "Single-Arm Clean and Press",
      set: 1,
      reps: "8-10 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Single-Arm Clean and Press",
      set: 2,
      reps: "8-10 reps left side",
    },
    {
      type: "work",
      exercise: "Single-Arm Clean and Press",
      set: 2,
      reps: "8-10 reps right side",
    },
    { type: "rest", duration: 60 },
    {
      type: "work",
      exercise: "Single-Arm Clean and Press",
      set: 3,
      reps: "8-10 reps left side",
    },
    {
      type: "work",
      exercise: "Single-Arm Clean and Press",
      set: 3,
      reps: "8-10 reps right side",
    },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 1, reps: "10-12" },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 2, reps: "10-12" },
    { type: "rest", duration: 60 },
    { type: "work", exercise: "Goblet Squats", set: 3, reps: "10-12" },
    { type: "rest", duration: 60 },
  ],
};

// State management
let currentRoutine = null;
let currentStepIndex = 0;
let timerInterval = null;

// DOM elements
const selectionScreen = document.getElementById("selection");
const routineScreen = document.getElementById("routine");
const stepTitle = document.getElementById("step-title");
const stepDescription = document.getElementById("step-description");
const timerDiv = document.getElementById("timer");
const timerDisplay = document.getElementById("timer-display");
const progressFill = document.getElementById("progress-fill");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

// Event listeners
document
  .getElementById("beginner-btn")
  .addEventListener("click", () => selectRoutine("beginner"));
document
  .getElementById("intermediate-btn")
  .addEventListener("click", () => selectRoutine("intermediate"));
document
  .getElementById("advanced-btn")
  .addEventListener("click", () => selectRoutine("advanced"));
backBtn.addEventListener("click", goBack);
nextBtn.addEventListener("click", goNext);

// Functions
function selectRoutine(routine) {
  currentRoutine = routine;
  currentStepIndex = 0;
  showRoutineScreen();
  displayCurrentStep();
}

function showRoutineScreen() {
  selectionScreen.classList.add("hidden");
  routineScreen.classList.remove("hidden");
}

function displayCurrentStep() {
  const step = routines[currentRoutine][currentStepIndex];
  if (step.type === "work") {
    stepTitle.textContent = `${step.exercise} - Set ${step.set}`;
    stepDescription.textContent = `${step.reps} reps`;
    timerDiv.classList.add("hidden");
    clearTimer();
  } else {
    stepTitle.textContent = "Rest";
    stepDescription.textContent = "";
    timerDiv.classList.remove("hidden");
    startTimer(step.duration);
  }
  updateButtons();
}

function startTimer(duration) {
  let timeLeft = duration;
  timerDisplay.textContent = timeLeft;
  progressFill.style.width = "100%";
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    progressFill.style.width = (timeLeft / duration) * 100 + "%";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      // Auto-advance after rest
      goNext();
    }
  }, 1000);
}

function clearTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateButtons() {
  backBtn.disabled = currentStepIndex === 0;
  const isLast = currentStepIndex === routines[currentRoutine].length - 1;
  nextBtn.textContent = isLast ? "Finish" : "Next";
}

function goBack() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    displayCurrentStep();
  }
}

function goNext() {
  if (currentStepIndex < routines[currentRoutine].length - 1) {
    currentStepIndex++;
    displayCurrentStep();
  } else {
    // Routine completed
    alert("Routine completed!");
    showSelectionScreen();
  }
}

function showSelectionScreen() {
  routineScreen.classList.add("hidden");
  selectionScreen.classList.remove("hidden");
  currentRoutine = null;
  currentStepIndex = 0;
  clearTimer();
}
