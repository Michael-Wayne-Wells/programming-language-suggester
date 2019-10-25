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
      if (business === 3 && creativity === 3) {
        $('#cats').show();
      } else if (fear = 3 || creativity === 2){
        $('#singularity').show();
        document.body.style.backgroundColor = "black";
      } else if(workTraits <= 3 && fear === 4) {
        $('#ruby').show();
      } else if (workTraits < 3 && fear <= 2) {
        $('#csharp').show();
      } else if (workTraits >= 3 && fear === 1) {
        $('#python').show();
      } else {
        $('#singularity').show();
      }
    });
    $("button.restart").click(function(event){
    location.reload();
    });
  });
