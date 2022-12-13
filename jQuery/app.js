// document.addEventListener("DOMContentLoaded", () => {
//   const hero = document.querySelector("#hero")
//   console.log(hero)
// })


/* jquery framework */
$().ready(() => {
  const hero = $("#hero")
  hero.html("hi")
  console.log(hero)
})


const url = "https://jsonplaceholder.typicode.com/posts"
$.ajax({ url }).done((posts) => {
  posts.forEach((post) => {
    console.log(post.title)
  })
})