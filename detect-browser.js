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

function getIEVersion() {
  var agent = navigator.userAgent
  var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i
  var matches = agent.match(reg)
  if (matches != null) {
    return {
      major: matches[1],
      minor: matches[2]
    }
  }
  return {
    major: '-1',
    minor: '-1'
  }
}
var ie_version = getIEVersion()
var is_ie10 = ie_version.major == 10
var is_ie11 = ie_version.major == 11
if (is_ie10) {
  $('body').addClass('IE10')
}

if (is_ie11) {
  $('body').addClass('IE11')
}
