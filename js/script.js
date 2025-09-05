// Routine data for kettlebell tracker
const routines = {
  beginner: [
    {
      exercise: "Kettlebell Swings (Two-Handed)",
      sets: 3,
      reps: "10-15",
      rest: 60,
    },
    { exercise: "Two-Handed Overhead Press", sets: 3, reps: "8-12", rest: 60 },
    { exercise: "Goblet Squats", sets: 3, reps: "8-12", rest: 60 },
  ],
  intermediate: [
    {
      exercise: "Kettlebell Swings (Two-Handed or Mixed)",
      sets: 3,
      reps: "12-15",
      rest: 60,
    },
    {
      exercise: "Single-Handed Overhead Press",
      sets: 3,
      reps: "8-12",
      rest: 60,
      perSide: true,
    },
    { exercise: "Goblet Squats", sets: 3, reps: "8-12", rest: 60 },
  ],
  advanced: [
    {
      exercise: "Kettlebell Swings (Single-Handed)",
      sets: 3,
      reps: "12-15",
      rest: 60,
      perSide: true,
    },
    {
      exercise: "Single-Arm Clean and Press",
      sets: 3,
      reps: "8-10",
      rest: 60,
      perSide: true,
    },
    { exercise: "Goblet Squats", sets: 3, reps: "10-12", rest: 60 },
  ],
};

// Function to expand routine into steps
function expandRoutine(routine) {
  const steps = [];
  routine.forEach((item) => {
    for (let set = 1; set <= item.sets; set++) {
      if (item.perSide) {
        steps.push({
          type: "work",
          exercise: item.exercise,
          set,
          reps: `${item.reps} reps left side`,
        });
        steps.push({
          type: "work",
          exercise: item.exercise,
          set,
          reps: `${item.reps} reps right side`,
        });
      } else {
        steps.push({
          type: "work",
          exercise: item.exercise,
          set,
          reps: item.reps,
        });
      }
      steps.push({ type: "rest", duration: item.rest });
    }
  });
  return steps;
}

// State management
let currentRoutine = null;
let currentRoutineSteps = null;
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
  currentRoutineSteps = expandRoutine(routines[currentRoutine]);
  currentStepIndex = 0;
  showRoutineScreen();
  displayCurrentStep();
}

function showRoutineScreen() {
  selectionScreen.classList.add("hidden");
  routineScreen.classList.remove("hidden");
}

function displayCurrentStep() {
  const step = currentRoutineSteps[currentStepIndex];
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
  const isLast = currentStepIndex === currentRoutineSteps.length - 1;
  nextBtn.textContent = isLast ? "Finish" : "Next";
}

function goBack() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    displayCurrentStep();
  }
}

function goNext() {
  if (currentStepIndex < currentRoutineSteps.length - 1) {
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
  currentRoutineSteps = null;
  currentStepIndex = 0;
  clearTimer();
}
