// Typewriter Keys ( Malayalam) //
$(document).ready(function()
{	//alert("123")
	
	
	$('.outer-typewriter-pane li').hover(function()
	{	
		$(this).addClass('active').children('ul').fadeIn();
		
	},function()
	{	
		$(this).removeClass('active').children('ul').fadeOut();
	});
	// ajax loading
	$.ajax({
		type: "GET",
		url: "lang.xml",
		dataType: "xml",
		success: function(xml) {
			
 			$(xml).find('content').each(function(){
 				//var title = $(this).find('malA').text();
				$(this).find('malA').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang01").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malB').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang02").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malC').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang03").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malD').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang04").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malE').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang05").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malF').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang06").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malG').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang07").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malU').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang08").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malV').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang09").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malW').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang10").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malX').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang11").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malY').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang12").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malZ').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang13").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAA').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang14").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAB').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang15").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAC').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang16").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAD').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang17").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAE').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang18").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAF').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang19").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malH').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang20").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malI').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang21").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malJ').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang22").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malK').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang23").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malL').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang24").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malM').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang25").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malN').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang26").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malO').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang27").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malP').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang28").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malR').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang29").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malS').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang30").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malT').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang31").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAG').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang32").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAH').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang33").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAI').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang34").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAJ').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang35").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAK').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang36").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAL').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang37").children('ul').append("<li>"+title+"</li>");
				});
				$(this).find('malAM').each(function(){
					var title = $(this).text();
					$(".outer-typewriter-pane li.lang38").children('ul').append("<li>"+title+"</li>");
				});
			});
			
			$('.outer-typewriter-pane ul li a').click(function()
			{	var Txt = $(this).parentsUntil('div').children('a').text();
				var v = $('#search').val();
				var b =  v+Txt;
				$('#search').val(b);
			});
			$('.outer-typewriter-pane ul li li').click(function()
			{		
					var txt = $(this).text();
					var v = $('#search').val();
					var a =  v+txt;
					$('#search').val(a);
					//alert(a);
					return false;
			});
		}
	});
	
	
	$('.key-board').click(function()
	{
		$('.outer-typewriter-pane').slideToggle();
	});
	
	
	
	
	
});