// Routine data for kettlebell workout guide
const routines = {
  beginner: [
    {
      exercise: "Two-Handed Swing",
      sets: 3,
      reps: "10 to 15",
      rest: 60,
    },
    {
      exercise: "Two-Handed Press",
      sets: 3,
      reps: "8 to 12",
      rest: 60,
    },
    { exercise: "Goblet Squats", sets: 3, reps: "8 to 12", rest: 60 },
  ],
  intermediate: [
    {
      exercise: "Two-Handed Swing",
      sets: 3,
      reps: "12 to 15",
      rest: 60,
    },
    {
      exercise: "Single-Arm Press",
      sets: 3,
      reps: "8 to 12",
      rest: 60,
      perSide: true,
    },
    { exercise: "Goblet Squats", sets: 3, reps: "8 to 12", rest: 60 },
  ],
  advanced: [
    {
      exercise: "Single-Arm Swing",
      sets: 3,
      reps: "12 to 15",
      rest: 60,
      perSide: true,
    },
    {
      exercise: "Single-Arm Clean and Press",
      sets: 3,
      reps: "8 to 10",
      rest: 60,
      perSide: true,
    },
    { exercise: "Goblet Squats", sets: 3, reps: "10 to 12", rest: 60 },
  ],
};

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
          reps: `${item.reps} reps`,
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
let startTime = null;

// DOM elements
const selectionScreen = document.getElementById("selection");
const routineScreen = document.getElementById("routine");
const stepTitle = document.getElementById("step-title");
const stepDescription = document.getElementById("step-description");
const timerDiv = document.getElementById("timer");
const timerDisplay = document.getElementById("timer-display");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const overallProgressBar = document.getElementById("overall-progress-bar");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => console.log("SW registered"))
      .catch((error) => console.log("SW registration failed"));
  });
}

function updateProgress() {
  if (!currentRoutineSteps) {
    return;
  }

  const totalSteps = currentRoutineSteps.length;
  const progress =
    totalSteps > 0 ? ((currentStepIndex + 1) / totalSteps) * 100 : 0;
  progressPercent.textContent = Math.round(progress) + "%";
  overallProgressBar.value = progress;
}

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
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    goBack();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    goNext();
  }
});

// Functions
function selectRoutine(routine) {
  currentRoutine = routine;
  currentRoutineSteps = expandRoutine(routines[currentRoutine]);
  currentStepIndex = 0;
  startTime = Date.now();
  showRoutineScreen();
  displayCurrentStep();
}

function showRoutineScreen() {
  selectionScreen.setAttribute("hidden", "");
  routineScreen.removeAttribute("hidden");
}

function displayCurrentStep() {
  if (!currentRoutineSteps || currentStepIndex >= currentRoutineSteps.length) {
    return;
  }
  const step = currentRoutineSteps[currentStepIndex];

  updateProgress();

  if (step.type === "work") {
    stepTitle.textContent = step.exercise;
    stepDescription.textContent = `${step.reps} (set ${step.set})`;
    timerDiv.setAttribute("hidden", "");
    clearTimer();
  } else {
    if (currentStepIndex === currentRoutineSteps.length - 1) {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = (elapsed % 60).toString().padStart(2, "0");
      stepTitle.textContent = "Completed! 🎉";
      stepDescription.textContent = `Finished in: ${minutes}:${seconds}`;
      timerDiv.setAttribute("hidden", "");
      clearTimer();
    } else {
      stepTitle.textContent = "Rest 😴";
      stepDescription.textContent = "";
      timerDiv.removeAttribute("hidden");
      startTimer(step.duration);
    }
  }
  updateButtons();
}

function startTimer(duration) {
  let timeLeft = duration;
  timerDisplay.textContent = timeLeft;
  progressBar.value = duration;
  progressBar.max = duration;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    progressBar.value = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
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
  const isLast = currentStepIndex === currentRoutineSteps.length - 1;
  nextBtn.textContent = isLast ? "Finish" : "Next";
}

function goBack() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    displayCurrentStep();
  } else {
    showSelectionScreen();
  }
}

function goNext() {
  if (currentStepIndex < currentRoutineSteps.length - 1) {
    currentStepIndex++;
    displayCurrentStep();
  } else {
    showSelectionScreen();
  }
}

function showSelectionScreen() {
  routineScreen.setAttribute("hidden", "");
  selectionScreen.removeAttribute("hidden");
  currentRoutine = null;
  currentRoutineSteps = null;
  currentStepIndex = 0;
  startTime = null;
  clearTimer();
  updateProgress();
}
