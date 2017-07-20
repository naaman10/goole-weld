$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$.material.init()

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(".select").dropdown({
    "autoinit": ".select"
});
$(document).ready(function() {

  $("#owl-demo").owlCarousel({
      items: 2,
      navigation : false, // Show next and prev buttons
      autoPlay: 8000,
      transitionStyle : "backSlide",
      responsive: true,
      scrollPerPage: true,
      itemsCustom : [
        [200, 1],
        [450, 1],
        [700, 2]
      ]

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});
