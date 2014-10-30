<<<<<<< HEAD
$(document).ready(function() {
    $("#todo-form").submit(function(){
        var text = $("#todo-form-add").val();
		var button = $("<button type=\"button\" name=\"remove\" value=\"remove\">Remove</button>");
		var task = $("<li>" + text + "</li>").append(button);
		$("#todo-list").append(task);
		updateButton();
		return false;
	});
})

function updateButton() {
	$(":button").click(function() {
        $(this).parent().slideUp();
    });
}
=======
$(document).ready(function() {
			var usr_input = $('#todo-form-add')
			$(window).keydown(function(event){
   				if(event.keyCode == 13) {
      					$(".submit-button").click();
     					return false;
					}
			});
			
			$(".todo-list-first2").click(function (first2) {
			$('.first2').animate({
    				left:'250px',
		  			opacity:'0',
  					}, {
    				duration: 1000,
    				complete: function() {
      				$(this).closest('li').remove();
    					}
 					});
			});
			
			
			$(".submit-button").click(function (e) {
				if (usr_input.val() == "") {
						alert('You need to enter something in the textbox');
					}
				else {
						var add = $('#todo-form-add').val();
						$('#todo-list').append('<li class="' + add + '">' + add + '<button class="todo-list-remove">remove</button></li>');
						$("#todo-form-add").val("");
				}
			
			
			$(".todo-list-remove").click(function (take) {
				$("." + add).animate({
    				left:'250px',
		  			opacity:'0',
  					}, {
    				duration: 1000,
    				complete: function() {
      				$("." + add).remove();
    					}
 					});
				});
			});

})

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

//function () {$(this).closest('li').remove();}
>>>>>>> 6c62e3b6aa3c45f202da56ea97b59e64abc6e254
