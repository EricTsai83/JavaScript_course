// 程式碼寫這裡
$().ready(() => {
  const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

  const keyword = $("#searchKeyword")

  const form = $("#searchForm")
  form.submit((e) => {
    e.preventDefault()

    const query = keyword.val()

    if (query !=  "") {
      $.ajax({ url }).done(sites => {
        const siteList = $(".siteList")
        siteList.html("")  // 清除列表
        
        sites
          .filter((site) => {
            return site.ar.includes(query)
          })
          .forEach((site) => {
            const item = ` <li class="list-group-item fs-5">
              <i class="fas fa-bicycle"></i>
              ${site.sna.replace("YouBike2.0_", "")} (${site.sbi})<br>
              <small class="text-muted">${site.ar}</small>
            </li>`
            siteList.append(item)
          })
      })
    }

  })

})