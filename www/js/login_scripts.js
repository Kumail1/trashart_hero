jQuery(document).ready(function($){
	// alert("dasd");
	if (window.localStorage["n"] != null) {
					   window.location = "user_data.html";
					    }

	$('#loginForm').on('submit', function(event){
		event.preventDefault();
		$("#submit",this).attr("disabled","disabled");
if (window.navigator.onLine == false) {
				 	alert("Please Chek Your Internet Connection.");
				}
        var n = $("#n", this).val();
        var p = $("#p", this).val();

 		event.preventDefault();
 		var data = $(this).serialize();
 		data = {
 			n: n,
 			p: p,
 		}
 		console.log(data);
		if(n != '' && p != '') {
			$.post('http://trashart.cmcengineering.com.pk/api_trash_hero/login.php', data,function(resp){
			
			console.log(resp);

				if(resp == true) {
					//store
					 window.localStorage["n"] = n;
					 window.localStorage["p"] = p;   
					 
					
                    //window.location = "sale_trash.html";
                    window.location = "user_data.html";

               

				 } 
				 else {
				 	navigator.notification.alert("Your login failed", function() {});
				 }
		    	$("#submit").removeAttr("disabled");
			},"json");
		}
		return false;


	});
});