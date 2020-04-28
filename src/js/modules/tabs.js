module.exports = function() {

  $('.conditions__header-title').on('click', function () {
    var activeTab = $(this).data('tab');
    $('.conditions__header-title').removeClass('active');
    $('.conditions__list').removeClass('active');

    $(this).addClass('active');
    $('#' + activeTab).addClass('active');
  })

};