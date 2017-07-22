var todos = [];

$("#add-button").on('click', function(){
	$("#todo").toggle();
});

$("#todo").on('keypress', function(event){
	if (event.which === 13) {
		var lis = todos.length;
		todos.push($("#todo").val());
		
		$("#list").append("<li id=\"todo"+lis+ "\"><button id=\"delete-button-"+lis+"\">x</button>"+$("#todo").val()+"</li>");
		$("#todo").val("");

		$("#todo"+lis).on('mouseenter',function(){
			$("#"+$(this)[0].childNodes[0].id).toggle("slide");
		});

		$("#todo"+lis).on('mouseleave',function(){
			$("#"+$(this)[0].childNodes[0].id).toggle("slide");
		});

		$("#todo"+lis).on('click',function(){
			$(this).toggleClass("done");
		});
		
		$("#delete-button-"+lis).on('click',function(){
			$(this).parent().toggle("done");
			$(this).parent().fadeOut(1000, function(){
				$(this).remove();
			});
		});
	}
});