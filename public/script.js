$(document).ready(function(){
	$.ajax({
		url:"/todo?text1=on&text2=on&text3=on&text4=on",
		async:true
	}).done( function(data){
		$('p').html(data);
	});
	$("form").find("[name=test]").change( function(event){
		var elemChecked = $("form").find("[name=test]");
		
		if($(this).val() == 'off') {
			$(this).val('on');
		} else {
			$(this).val('off');
		}

		$.ajax({
			url:"/todo?text1=" + $('.next').val() + "&text2=" + $('.next2').val() + "&text3=" + $('.next3').val() + "&text4=" + $('.next4').val() +"",
			async:true
		}).done( function(data){
			$('p').html(data);
		});

		var count = 0;
		for(var i = 0; i < elemChecked.length; i++) {
			if(elemChecked[i].getAttribute('value') == "off") {
				count++;
				if(count == 4) {
					$.ajax({
						url:"/todo?text1=on&text2=on&text3=on&text4=on",
						async:true
					}).done( function(data){
						$('p').html(data);
					});
				}
			}
		}
	});

	$("form").submit( function(event){
		event.preventDefault();
	})
})