// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
function bmiCalculator(height, weight) {
  let h = parseInt(height) / 100
  let w = parseInt(weight)
  return (w / (h ** 2)).toFixed(2)  // 取到小數點第二位
}


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button")

  btn.addEventListener("click", () => {
    const height = document.querySelector("#bodyHeight").value
    const weight = document.querySelector("#bodyWeight").value
    const result = document.querySelector("#resultText")

    if (height != "" & weight != "") {
      result.innerHTML =  bmiCalculator(height, weight)
    }
  })
})