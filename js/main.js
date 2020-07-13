
$(document).ready(function() {

	setTimeout(function() {
		$('div.preload').addClass('active');
		
	}, 3000);  
	



	$("ul.navbar-nav li a").click(function() {
		var data = $(this).data("id");
		var T = $(data).offset().top;
		$("html, body").animate({
			scrollTop: T
		}, 1000);
	});

	$(window).scroll(function() {
		$("section").each(function(index, el) {
			var T = $(el).offset().top - 100;
			var H = T + $(el).height() - 100;
			if (window.scrollY > T && window.scrollY < H) {
				$("nav a").removeClass('active');
				$("nav a[data-id='#"+el.id+"']").addClass('active');
			}
		});
	});
	ToxProgress.create();

	ToxProgress.animate();

});

var typed = new Typed('.type', {
  // Waits 1000ms after typing "First"
  strings: [
  'Hello World',
  'I am Frontend developer',
  'web designer',
  'SMM manager'
  ],
  typeSpeed:60,
  backSpeed:60,
  loop:true

});
var progressbar = document.getElementById('progressbar');
var percent = document.getElementById('percent');

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	var progress = (window.pageYOffset / totalHeight) * 100;
	progressbar.style.height = progress + '%';
	// percent.innerHTML = 'Page Scrolled ' + Math.round(progress) + '%'
}

