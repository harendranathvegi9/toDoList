//Check off specific to dos by clicking 

$('ul').on('click','li', function(event) {	
	$(this).toggleClass("completed");
});

//remove list item
$('ul').on('click', '.delete', function(event) {
	//$(this).closest('.listItem').remove();
	//select and after fade out remove the element 
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
});

//add new to-do item
$(".add").keypress(function(event) {
    //wait for enter key press
    if(event.which === 13) {
    	var toDoInput = this.value;
    	$(this).val("");
    	var item = "<li class=\"listItem\"> <span class=\"delete\"><i class=\"fa fa-trash\"></i></span> " + toDoInput + "</li>";
		$(".items").prepend(item);
    }
});

//create hover effect for the adding new note
$("h1").on('click', '.fa-pencil', function(event) {
	event.preventDefault();
	/* Act on the event */
	$("input[type='text']").fadeToggle('fast');

});
