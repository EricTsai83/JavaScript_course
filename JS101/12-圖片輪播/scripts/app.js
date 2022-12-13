// 程式碼寫這裡
const carousel = document.querySelector(".carousel")
const slides = carousel.querySelectorAll(".slide")
const track = carousel.querySelector(".slide-track")
const nextBtn = carousel.querySelector(".next-btn")
const prevBtn = carousel.querySelector(".prev-btn")
const navigator = carousel.querySelector(".navigator")
const indicators = navigator.querySelectorAll(".indicator")
let currentIndex = 0



function updateNavigatorButtons(index) {
  if (index === 0) {
    prevBtn.classList.add("hide")
    nextBtn.classList.remove("hide")
  } else if (index === slides.length - 1) {
    prevBtn.classList.remove("hide")
    nextBtn.classList.add("hide")
  } else {
    prevBtn.classList.remove("hide")
    nextBtn.classList.remove("hide")
  }
}

function updateIndicator(index) {
  indicators.forEach((indicator) => {
    if (Number(indicator.dataset.index) === index) {
      indicator.classList.add("active")
    } else {
      indicator.classList.remove("active")
    }
  })
}


function setupSlides() {
  const w = track.clientWidth  // DOM 元件有一個 clientWidth 的屬性，可以用來取得元件的寬度 (這個寬度會根據視窗所調整喔！)
  
  // 迭代圖片並將其往右移動(idx * 元件寬度)的距離 
  slides.forEach((slide, i) => {  // i 為選擇性的預設參數，代表 array 中的 index
    slide.style.left = `${i * w}px`
    }) 
    updateNavigatorButtons(currentIndex)
}


function moveSlide(index) {
  const w = track.clientWidth
  track.style.transform = `translateX(-${index * w}px)`
  updateNavigatorButtons(index)
  updateIndicator(index)
}


nextBtn.addEventListener("click", () => {
  currentIndex++
  moveSlide(currentIndex)
})

prevBtn.addEventListener("click", () => {
  currentIndex--
  moveSlide(currentIndex)
})


navigator.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const dot = e.target
    currentIndex = Number(dot.dataset.index)

    moveSlide(currentIndex)

  }
})

// 監聽 window size => 重新排列圖片 ＝> 移動到現在圖片位置
window.addEventListener("resize", () => {
  setupSlides()
  moveSlide(currentIndex)
})


setupSlides()

// 缺陷：1. 要試著監聽 window 的 resize 事件  2.自動輪播