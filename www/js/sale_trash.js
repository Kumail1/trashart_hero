 jQuery(document).ready(function($){
 	//alert('hello');
 	if (window.localStorage["n"] != null) {
					   //window.location = "pickup_request.html";
					    }

					    else{
				 		alert("Please login ");
					    	
					   window.location = "index.html";
					    }
					    if (window.navigator.onLine == false) {
				 	alert("Please Chek Your Internet Connection.");
				}
var hero = window.localStorage["n"];
              $('#hero').html(hero);
	$.ajax({
 		url:'http://trashart.locumset.com/api_trash_hero/sale_trash.php',
 		type:'post',
 		success:function(getdata){
 			  //console.log(getdata);
 			    newdata = JSON.parse(getdata);
 			    
 			  //console.log(newdata);
 			    for (var i = 0; i < newdata.length; i++) {
 			    	//console.log( newdata[i].item);
 			    var input_item ='<input type="number" data-id=".item_id_'+i+'" class=" form-control" style="margin-bottom: 20px;" placeholder="'+newdata[i].item+'" data-price="'+newdata[i].price+'"  name="data['+newdata[i].item+'][kg]">';
 			    var input_result_disable ='<input type="number" id="" style="margin-bottom: 20px;" class=" form-control amount item_id_'+i+'" disabled placeholder="0" >';
 			    var input_result_hidden ='<input type="hidden" class=" form-control  item_id_'+i+'" id=""  name="data['+newdata[i].item+'][price]">';
				$('.item').append( input_item);
				$('.result_disable').append(input_result_disable);
				$('.result_hidden').append(input_result_hidden);
			}
 		}
	});
});
 