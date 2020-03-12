module.exports = function () {

  // begin menu & burger
  $('#burger').on('click', function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');
  });
  // end menu & burger

};