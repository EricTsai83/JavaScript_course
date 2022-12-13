// 取得 class 是 doll 的元素們
const d1 = document.getElementById("doll-1")  // 透過 id 取一個(有多個只會取第一個喔)
console.log(d1)

const d2 = document.getElementsByClassName("doll")  // 透過 class 取全部，會回傳一個 HTMLCollection
console.log(d2)

// 使用 css 選取器
// 取得 class 是 doll 的元素
// 推薦：用 CSS 選取器比較有彈性
const d3 = document.querySelector("#doll-1")
d3.textContent = '喔齁'
console.log(d3)
d3.innerHTML = "<h1>喔齁</h1>"
console.log(d3)
d3.style.color = "red"
console.log(d3)

const d4 = document.querySelectorAll(".doll")  // 會回傳一個 NodeList
console.log(d4)

/* 事件監聽器 */
const btn = document.querySelector("#btn")
// addEventListener: 加上事件的監聽器
// case 1
btn.addEventListener("click", function () {  // 把 function 當引數
  console.log("pressed1")
})
// case 2
const clickMe = () => {
  console.log("pressed2")
}
btn.addEventListener("click", clickMe)

btn.onclick = function () {
  console.log("pressed3")
}


/* 如果 JS 的 script 放在 <head> 裡, 那有可能在解析 js script 的時候, 有些物件還沒有被創造
所以這時後就可以利用事件監聽器, 去利用 callback function 的方式去解析 js script */
// 頁面讀取解析完成後就會觸發 DOMContentLoad 事件
document.addEventListener("DOMContentLoaded", function (){
  // 這時候可以確定＃btn 是存在的
  const btn = document.querySelector("#btn")
  console.log('DOM 讀取完成')
})


const link = document.querySelector("#link")

link.addEventListener("click", () => {
  // e.preventDefault()  // 把原本的預設行為停下來（這）邊是跳轉到 link 的頁面
  console.log("被按了")
})



/* 新增或移除 DOM 元素 */
const h = document.createElement("h1")
h.textContent = "h1"
hello.appendChild(h)

const d = document.createElement("div")
d.textContent = "I an div."
h.appendChild(d)


const btn2 = document.querySelector("#removeBtn")

btn2.addEventListener("click", () => {
  const lastOne = document.querySelector("li:last-child")  // 抓 li 的最後一個元素
  if (lastOne){
    const u = document.querySelector("ul")
    u.removeChild(lastOne)
  }
})

/* 抓上一層和下一層 */
const p = document.querySelector("ul")
console.log(p.children)  // 取得子層的 Element
console.log(p.childNodes)  // 取得子層的 Node

/* 抓兄弟姐妹層 */
const secondOne = document.querySelector("li:nth-child(2)")
console.log(secondOne.previousElementSibling.innerText)
console.log(secondOne.nextElementSibling.innerText)
console.log(secondOne.previousSibling)
console.log(secondOne.nextSibling)


/* 插入元素到特地位置 */
const ul = document.querySelector("ul")

// const li = document.createElement("li")
// li.textContent = "X"
// ul.insertAdjacentElement("afterEnd", li)

const li = "<li>Z</li>"
ul.insertAdjacentHTML("afterBegin", li)

