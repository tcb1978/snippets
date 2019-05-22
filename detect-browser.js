function detectIE() {
  return navigator.userAgent.search(/MSIE|Trident/) >= 0
}
if (detectIE()) {
  $('body').addClass('IE')
}

function detectEdge() {
  return navigator.userAgent.search(/Edge/) >= 0
}
if (detectEdge()) {
  $('body').addClass('EDGE')
}
