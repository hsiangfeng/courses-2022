export default {
  render(dom, data) {
    data.forEach((item) => {
      dom.innerHTML += `<p>${item.name} 總共有 ${item.students} 人</p>`;
    })
  }
}
