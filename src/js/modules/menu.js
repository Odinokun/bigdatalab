module.exports = function () {

  // begin menu & burger
  $('#burger').on('click', function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');
  });
  // end menu & burger

  $('.menu__link').on('click', function () {
    $('#menu').removeClass('active');
    $('#burger').removeClass('active');

  });

};