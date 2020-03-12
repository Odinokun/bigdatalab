module.exports = function() {

  // begin lang
  $('.menu-lang__item').on('click', function (e) {
    e.preventDefault();
    $('.menu-lang__item').removeClass('active');
    $(this).addClass('active');
  })
  // end lang

};