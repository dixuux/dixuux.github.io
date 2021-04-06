


			//hambutger icon//
		function hamburgerFunction() {
		  var x = document.getElementById("my_button_container");
		  if (x.className === "button-container") {
		    x.className += "responsive";
		  } else {
		    x.className = "button-container";
		  }
		  var x = document.getElementById("my_menu_nav");
		  if (x.style.display === "block") {
		    x.style.display = "none";
		  } else {
		    x.style.display = "none";
		  }
		}

$("#menu_button").click(function(){
  $("#my_menu_nav").slideDown();
})

		//menu nav//

		function menuFunction() {
		  var x = document.getElementById("my_menu_nav");
		  if (x.style.display === "none") {
		    x.style.display = "block";
		  } else {
		    x.style.display = "none";
		  }
		}



