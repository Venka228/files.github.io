$(document).ready(function() {

    $(".auth-button").click(function() {
    	$(this).next().slideToggle();
    });

    $(".main_mnu_button").click(function() {
    	$(".maian_mnu ul").slideToggle();
    });

	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	$(".fancybox").fancybox();

	$(".top_mnu").navigation();

	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
           $(".class").removeClass("deactive");
		};
	}, {offset: 100});

	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	
});