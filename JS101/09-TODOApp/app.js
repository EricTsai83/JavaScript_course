// 程式碼寫這裡
document.addEventListener("DOMContentLoaded", () => {
  const tsakInput = document.querySelector("taskInput")
  const addBtn = document.querySelector("#addBtn") // 抓 id 前面要用 #
  const todoList = document.querySelector(".todo-list") // 抓 class 前面要用 .

  const createTaskItem = () => {
    const task = taskInput.value

    if (task != "") {
      // 輸入匡不是空白，我才新增
      const todoItem = `<li class="todo-item">
      <span class="item">${task}</span>
      <button class="closeBtn">X</button>
    </li>`

      todoList.insertAdjacentHTML("afterBegin", todoItem)
      taskInput.value = "" // 新增值後，讓輸入匡清空結果
      taskInput.focus() // 新增值後，讓游標繼續停在輸入匡
    }
  }

  todoList.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
      e.target.parentNode.remove() // 把上一層刪除
    }
    // console.log(e.target.nodeName )
    // console.log(e.target.parentNode)
  })

  // 按下Ｅnter 就新增
  taskInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      createTaskItem()
    }
  })

  // addBtn.addEventListener("click", () => {
  //   createTaskItem()
  // })
  // 上方寫法的簡化版
  addBtn.addEventListener("click", createTaskItem)
})
