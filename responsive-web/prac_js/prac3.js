$('#header-menu li').on('click',function(){
	$('#header-menu li').removeClass('active');
	$(this).addClass('active');
});

$('#right-menu li').on('click',function(){
	$('#right-menu li').removeClass('active');
	$(this).addClass('active');
});