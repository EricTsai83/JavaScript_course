/* XMLHttpRequest 函數 */
const api = "https://jsonplaceholder.typicode.com/posts"
// // The `new` operator:
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// const req = new XMLHttpRequest()

// req.addEventListener("load", () => {
//   const posts = JSON.parse(req.responseText)

//   posts.forEach(post => {
//     console.log(post.title)
//   })
// })
// req.open("GET", api)  // 確認我要去的地方
// req.send()  // 送出請求



/* 使用 fetch 函數 */
// fetch(api)
//   .then(resp => {
//     return resp.json()
//   })
//   .then(data => {
//     data.forEach(d => {
//       console.log(d.title)
//     });
//   })

/* 建議用這種寫法，感覺上也比較易讀一點，可以一行一行的寫下去 */
/* 使用 async/await 的寫法 */
// 非同步請求
async function getPost() {
  const resp = await fetch(api)  // 取資料
  const posts = await resp.json()  // 將資料轉成 json

  posts.forEach(post => {
    console.log(post.title)
  })
}

getPost("go!")
console.log("go!")  // 這行會先印出來，因為我們用非同步的方法，透過 api 請求資料


/* Cross-Origin Resource Sharing:
專門擋瀏覽器裡面的 JS，要解決只能透過後端來抓，
然後你再去抓它抓的東西，像是 node.js 和 python，就不會被擋 */
