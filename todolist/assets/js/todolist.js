$("#add-button").on('click', function(){
	$("input[type='text']").fadeToggle();
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on('keypress', function(event){
    if (event.which === 13) {
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>"+$(this).val()+"</li>");
        $(this).val("");
    }
});