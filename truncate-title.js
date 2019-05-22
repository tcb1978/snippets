$(document).ready(function () {
  var truncateTitle = function (txt) {
    var snippets = txt.match(/.*?[\.\s]+?/g);
    snippets.each(function (snippet, index) {
      snippets[index] = snippet.trim();
    })
    var wordLength = snippets.length >= 10 ? 10 : snippets.length;
    var innerText = [];
    for (var i = 0; i < wordLength; i++) {
      innerText.push(snippets[i]);
    }
    return innerText.join(' ') + '...';
  }

  $('.truncateWrapper').each(function (index) {
    var nonTruncatedTitle = $(this).find('.truncateTitle').text();
    var title = truncateTitle(nonTruncatedTitle);
    $(this).find('.titleElipses').text(title);
  })
});