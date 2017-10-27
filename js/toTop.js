(function () {
  var sdelay = null

  function get_scrollTop_of_body() {
    var scrollTop;
    if (typeof window.pageYOffset != 'undefined') { //pageYOffset指的是滚动条顶部到网页顶部的距离
      scrollTop = window.pageYOffset;
    } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
      scrollTop = document.documentElement.scrollTop;
    } else if (typeof document.body != 'undefined') {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }

  function returnTop() {
    window.scrollBy(0, -100)
    if (get_scrollTop_of_body() > 0) {
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