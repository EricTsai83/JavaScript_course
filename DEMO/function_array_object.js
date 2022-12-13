console.log("hello world")


// 這會印出 123
console.log(123)

// 優先使用 const 宣告方法，因為不能被 reassign
const age1 = 18
const friend = [1,2,3]
console.log(friend)
// 但如果是陣列，可以替換裡面的值
friend[0] = "eric"
console.log(friend)


let age2 = 18
console.log(age2)

var age3 = 28
console.log(age3)

// let 和 var 選告方法的區別在於
console.log(age4)  //會 print 出 "undefined"
var age4 = 55

console.log(age4)

// // 用 let 宣告就會出現 ReferenceError
// console.log(age5)
// let age5 = 66

// console.log(age5)



/* 變數型別 */
let a = 123
console.log(typeof a)

let b = null
console.log(typeof b)


let c = 1
console.log(c++)
console.log(c)

let d = 1
console.log(++d)


/* 字串 */
let name = "悟空"
console.log(name)

let name2 = `${d}悟空`  //backtick
console.log(name2)


/* 行竹轉換 */
let n = 3.14
console.log(typeof n)  // print number

let m = String(n)
console.log(typeof m)  // print string

let x = "1450"
console.log(typeof x)  // print string

let y = Number(x)
console.log(typeof y)  // print number

let aa = "hello"
let bb = Number(aa)
console.log(bb)  // print NaN
console.log(typeof bb)  // print number

/* type coercion(強制轉型) */
// 很多 bug 的來源，盡量不要用
console.log(1+2)  // print 3
console.log(1 + "2") // print 12
console.log("hello" + 123)  // print hello123
console.log("hello" + true)  // print hellotrue
console.log(123 + true) // print 124
console.log(123 + false)  // print 123


/* test */
console.log([] + [])
console.log([] + {})
console.log({} + [])
console.log({} + {})




/* flow control */
let age = 20

// case1: if...else
if (age >= 18) {
  console.log("已成年")
} else if (age >= 12 && age <18)  {
  console.log("青少年")
} else {
  console.log("小朋友")
}

// case2: following code is equal to upper code
// 三元運算子
age >= 18 ? console.log("成年人") : console.log("未成年")

// case3: switch
let gender = 1

switch (gender) {
  case 1:
    console.log("男")
    break  // it must exists, or progress will run the following case

  case 2:
    console.log("女")
    break

  default:
    console.log("不想說")
    break
}

// funny case
if (0) {  // 0 will be consider as false(boolean value) and 1 will be consider as true
  console.log("YES")
}  else {
  console.log("NO")
}

// AND (&&) / OR (||) / NOT (!==)
if (age == 20 && age==21) {
  console.log("ok")
} else {
  console.log("not ok")
}

if (age == 20 || age==21) {
  console.log("ok")
} else {
  console.log("not ok")
}

if (age !== 21) {
  console.log("ok")
} else {
  console.log("not ok")
}

// 練習用 if...else 判斷是否為閏年
// note: 2020 為閏年
let year = prompt("請輸入年份")

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("閏年")
//     } else {
//       console.log("平年")
//     }
//   } else {
//     console.log("閏年")
//   }
// } else {
//   console.log("平年")
// }
if ((year % 4 == 0 && year % 100 != 4) || year % 400 == 0) {
  console.log("閏年")
} else {
  console.log("平年")
}

/* loop */
// for
for (var i = 0 ; i < 3 ; i += 1) {
  console.log(i)
}

// while
let r = 0
while (r < 10) {
  if (r % 2 == 1) {
    console.log(r)
  }
  
  r += 1
}


let totalLen = 10
for (var i = 0 ; i < totalLen ; i += 1) {
  if (i == 1) {
    var trunkPosition = (totalLen - i) / 2
  }

  if (i % 2 == 1) {
    // repeat(number): if number is float, only use part of integer
    console.log( " ".repeat( (totalLen - i) / 2 ) + "*".repeat(i) )
  }
}

let ct = 0
while ( ct < totalLen/3 ) {
  console.log(" ".repeat(trunkPosition) + "*" + " ".repeat(ct))
  ct += 1
}


/* function */
function goToBathroom1(param1, param2) {  // type 為參數
  console.log("站起來")
  console.log("走去廁所")
  console.log("打開門")
  console.log("關門")
  if (param1=="小號"){
    console.log("開始上小號")
  } else {
    console.log("開始上大號")
  }
  return "process done"
}
goToBathroom1()  // 沒有給值的話會跑 else 那一段, 因為沒有賦值的參數會定義成 undefined
goToBathroom1(param1="小號")  // 帶到 function 裡的值叫做引數
console.log(goToBathroom1(param1="小號"))



/* anonymous function */
const goToBathroom2 = function () {
  console.log("站起來")
  console.log("走去廁所")
  console.log("打開門")
  console.log("關門")
  console.log("開始上廁所")
}
goToBathroom2()

/* arrow functio */
const goToBathroom3 = () => {
  console.log("站起來")
  console.log("走去廁所")
  console.log("打開門")
  console.log("關門")
  console.log("開始上廁所")
}
goToBathroom3()


/* exam */
// Body Mass index (BMI)
function BMICalculator(weightKg, heighM) {
  // return (weightKg/(heighM**2)).toFixed(2)  // 這個方法會回傳字串喔
  return Math.round( (weightKg/(heighM**2)) * 100 ) / 100  // 回傳數字要用這種方法
}
console.log(BMICalculator(65, 1.80))

/* array */
let heros = ["a", "b", "c", "d"]
console.log(heros)
console.log(heros.length)
console.log(heros[2])  // 取出第三個值
console.log(heros[heros.length - 1])  // 取最後一個值

heros.push("e")  // 在 array 最後面加元素
console.log(heros)

heros.unshift("f")  // 在 array 最前面加元素
console.log(heros)

heros.pop()  // 從 array 最後面取出(刪除)一個元素
console.log(heros)

heros.shift()  // 從 array 最前面取出(刪除)一個元素
console.log(heros)

heros[1] = "x"
console.log(heros)

heros.splice(1, 2, "z")  // 在第 1 個參數開始，刪掉 2 個元素，補一個 z 回來
console.log(heros)

let hero1 = ["a", "b", "c"]
console.log(hero1.indexOf("b"))  // 反回元素的 index，若元素不存在會回傳 -1
console.log(hero1.includes("x"))  // 會回傳 boolean value
// 依序將元素印出來
// case 1
for (var i = 0; i < hero1.length; i++) {
  console.log(hero1[i])
}
// case 2
hero1.forEach(function (hero) {
  console.log(hero)
})

let hero2 = ["d", "e", "f"]
heroAll = hero1.concat(hero2)  // 將兩個 list 推疊在一起
console.log(heroAll)


let hero3 = ["aa", "bbb", "cc"]
let user = hero3.find(function (hero) {  // 找到第一個符合條件的就會回傳值
  return hero.length>=2
})
console.log(user)

// 將每一個元素乘於 5 倍
let hero4 = ["a", "b", "c"]
let res = hero4.map((h) => {
  return h.repeat(5)
})
console.log(res)


// 過濾掉程度不符合的元素
let hero5 = ["aa", "bb", "rrrrr", "tttttt"]

let res2 = hero5.filter( (h) => {
  console.log(h)
  return h.length == 5
})
console.log(res2)

// 加總陣列所有元素
//case 1
let score = [1, 2, 3, 4, 5]
let total = 0
for (let i = 0; i < score.length; i++) {
  total = total + score[i]
}
console.log(total)


// case 2
let res3 = score.reduce( (acc, cv) => {
  return acc + cv
}, 0)  // acc 起始值, 若不給則會用第一個值作為起始值
console.log(res3)


/* 物件 */
let cat = {
  name: "luck",
  age: 6,
  attack: function () {
    console.log("喵喵喵")
  }
}

console.log(cat)
console.log(cat.name)
cat.attack()

// 增加屬性
cat.brother = "funny"
console.log(cat.brother)
// 刪除屬性
delete cat.age
console.log(cat.age)
