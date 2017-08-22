
//Dropdown Menus
$(".dropdown").hover(
  function () {
    $(this).addClass('open');
  },
  function () {
    $(this).removeClass('open');
  }
  );

//Search

  var openSearch = $('.open-search'),
    SearchForm = $('.full-search'),
    doSearch = $('.do-search');

    openSearch.on('click', function(event){
      event.preventDefault();
      if (!SearchForm.hasClass('active')) {
        SearchForm.fadeIn(300, function(){
          SearchForm.addClass('active');
        });
      } else {
          SearchForm.fadeOut(300, function(){
              SearchForm.removeClass('active');
              $(this).find('input').val('');
          });
      }
    });

    doSearch.on('click', function(event){
      event.preventDefault();
      SearchForm.fadeOut(300, function(){
        SearchForm.removeClass('active');
        $(this).find('input').val('');
      });
    });



 // Back Top Link
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })
