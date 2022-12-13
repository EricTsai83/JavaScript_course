/* 字串和變數的組合 */
let name = "悟空"
let age = "18"

// 用 ＋ 號串接
console.log("大家好，我的名字是" + name + "，我今年" +  age + "歲")
console.log(`大家好，我的名字是${name}，我今年${age}歲`)

/* 箭頭函數 */
// const addNumber = (a, b) => {
//   return a + b
// }
// 下方寫法，等價上方寫法
const addNumber = (a, b) => a + b



// 物件裡的屬性和變數相同會直接賦值
let name2 = "kk"
let age2 = 18

const cat = {
  name2,  
  age2
}

console.log(cat)

/* 用解構來進行變數宣告 */
const cat3 = {
  name3: "kk",
  age3: 18,
}
const {name3, age3} = cat3
console.log(name3, age3)


// 在參數時直接解構
function printUser({name, age}) {
  console.log(name)
  console.log(age)
}

const user = {
  name: "悟空",
  age: 18,
}

printUser(user)


/* 用 ... 把陣列展開 */
const h1 = ["A", "B", "C"]
const h2 = ["X", "Y", "Z"]
// hAll = h1.concat(h2)
hAll = [...h1, ...h2]
console.log(hAll)


function sayHello (h1, ...other) {  // ... 可以用來當做剩下的我全都要
  console.log(h1)
  console.log(other)
}

sayHello("A", "B", "C", "D")
  
