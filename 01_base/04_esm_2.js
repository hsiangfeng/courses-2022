// 預設匯出
// 預設匯出只能有一個
export default {
  render(dom, data) {
    data.forEach((item) => {
      dom.innerHTML += `<p>${item.name}</p>`;
    })
  }
}