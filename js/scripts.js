$(document).ready(function() {
  $("button.submit").click(function(event){
    $(".survey").hide();
    event.preventDefault();
      var firstName = $('#first-name').val();
      var lastName = $('#last-name').val();
      var creativity = parseInt($('input:radio[name=creativity]:checked').val());
      var fear = parseInt($('input:radio[name=fear]:checked').val());
      var business = parseInt($('input:radio[name=business]:checked').val());
      var workTraits = creativity + business;
      $('.user-name').text(firstName);
      if (workTraits <= 3 && fear === 1) {
        $('#ruby').show();
      } else if (workTraits > 3 && fear >= 2) {
        $('#csharp').show();
      } else if (workTraits > 3 && fear === 1) {
        $('#python').show();
      } else {
        $('#singularity').show();
        document.body.style.backgroundColor = "black";
      }
    });
    $("button.restart").click(function(event){
    location.reload();
    });
  });
