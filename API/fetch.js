const api = "https://jsonplaceholder.typicode.com/posts"
/* 使用 fetch 函數 */
fetch(api).then((resp) => {
  return resp.json()
}).then(data => {
  console.log(data.title)
})