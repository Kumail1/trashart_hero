 jQuery(document).ready(function($){
 	//alert('hello');
 	if (window.localStorage["n"] != null) {
					   //window.location = "pickup_request.html";
					    }

					    else{
				 	alert("Please login .");
					    	
					   window.location = "index.html";
					    }
					   if (window.navigator.onLine == false) {
				 	alert("Please Chek Your Internet Connection.");
				}
              var hero = window.localStorage["n"];
              $('#hero').html(hero);


	$.post("http://trashart.cmcengineering.com.pk/api_trash_hero/rate_list.php", function(getdata){
   			//console.log(getdata);	
   			let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
			let correct = getdata.replace(regex, ''); // remove all trailing commas
			let data = JSON.parse(correct); // build a new JSON object based on correct string
 			//console.log(data);

 			for (var i = 0; i < data.length; i++) {
 			    //console.log(data);
				var id ='<td>'+i+'</td>';
 			   var image ='<td style= "width:100px "><img src="http://trashart.cmcengineering.com.pk/'+data[i].image+ '"style= "width:50%; border-radius: 5px; margin-bottom:0px !important; margin-top:0px !important;"></td>';
 			   var name ='<td>'+data[i].name+'</td>';
 			   var price ='<td>'+data[i].price+'</td>';
 			   

 			    var tr ='<tr>'+id+image+name+price+'</tr>';
				$('#table').append(tr);

			}
				$('form#form').on("submit", function(event){
				        event.preventDefault();
      					  var oid = $("#oid", this).val();

				         		var form_data = $(this).serialize();
						 		form_data = {
						 			oid: oid
						 		}

				            console.log(form_data);
								//store
								 window.localStorage["oid"] = oid;
								 
			                     window.location = "sale_trash.html";

				        $.post("sale_trash.html",form_data , function(resp){
						
						console.log(resp);

						},"json");
				


				        
				});	 


				// $('#table').appendChild(id);
				// var table = document.getElementById("table");
				//   var row = table.insertRow(0);
				//   var cell1 = row.insertCell(0);
				//   var cell2 = row.insertCell(1);
				//   var cell3 = row.insertCell(2);
				//   var cell4 = row.insertCell(3);
				//   var cell5 = row.insertCell(4);
				//   var cell6 = row.insertCell(5);
				//   var cell7 = row.insertCell(6);
				//   var cell8 = row.insertCell(7);
				//   var cell9 = row.insertCell(8);
				//   var cell10 = row.insertCell(9);
				//   cell1.innerHTML = i;
				//   cell2.innerHTML = name;
				//   cell3.innerHTML = mobile;
				//   cell4.innerHTML = city;
				//   cell5.innerHTML = area;
				//   cell6.innerHTML = address;
				//   cell7.innerHTML = idata;
				//   cell8.innerHTML = total;
				//   cell9.innerHTML = timing;
				//   cell10.innerHTML = status;

      });
 		
});
 