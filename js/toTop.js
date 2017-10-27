(function () {
  var sdelay = null

  function returnTop() {
    window.scrollBy(0, -100)
    if (document.documentElement.scrollTop > 0) {
      sdelay = setTimeout(returnTop, 10)
    }
  }
  window.addEventListener("mousewheel", function () {
    clearTimeout(sdelay)
  })
  var toTop = document.getElementById("toTop")
  toTop.addEventListener("click", function () {
    returnTop()
  })
}());