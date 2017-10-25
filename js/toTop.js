(function () {
  var sdelay = null

  function returnTop() {
    window.scrollBy(0, -100)
    if (document.documentElement.scrollTop > 0) {
      sdelay = requestAnimationFrame(returnTop)
    }
  }
  window.addEventListener("mousewheel", function () {
    cancelAnimationFrame(sdelay)
  })
  var toTop = document.getElementById("toTop")
  toTop.addEventListener("click", function () {
    returnTop()
  })
}());