// 程式碼寫這裡
const timer = document.querySelector(".timer")
let defaultSecoends = 5
let running = false
let timerID
let paused = false

function updateTimer(seconds) {
  let mins = String(Math.floor(seconds / 60)).padStart(2, "0")
  let secs = String(seconds % 60).padStart(2, "0")

  timer.textContent = `${mins}:${secs}`
  if (seconds === 0) {
    timer.classList.add("times-up")
  } else {
    timer.classList.remove("times-up")
  }
}


function playSound() {
  const sound = new Audio("sounds/news.mp3")
  sound.play()
}


function timesup() {
  clearInterval(timerID)
  running = false
  updateTimer(0)
  playSound()
}

function setupTimer () {
  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds-- 
      updateTimer(totalSeconds)
    } else {
      timesup()
    }
  }, 1000)  // 1000毫秒＝１秒  
} 




function initTimer() {
  running = true
  totalSeconds = defaultSecoends
  updateTimer(totalSeconds)
  
  setupTimer()
}


function pauseTimer() {
  paused = true
  clearInterval(timerID)
}

function resumeTimer() {
  paused = false
  setupTimer()
}


document.addEventListener("keyup", (e) => {
  switch(e.key) {
    case "Enter":
      if (!running) {
        initTimer()
      }
      break
    case " ":
      if (running) {
        if (paused){
          resumeTimer()
        } else {
          pauseTimer()
        }
      }
      break
  }
})

