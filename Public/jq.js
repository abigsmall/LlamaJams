$('.input-join-jam').focus(function() {
  $(this).animate({ height: 29 }, 'fast');
}).blur(function() {
  $(this).animate({ height: 48 }, 'fast');
});