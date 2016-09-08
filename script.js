/* global $ */

$('.example').on('click', '.child-div', function (e) {
  var $childDiv = $(e.currentTarget)
  $childDiv.toggleClass('modified')
})
