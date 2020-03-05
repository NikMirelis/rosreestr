$(function() {
	$(document).ready(function() {
		$("#all-services").mmenu({
			 extensions: ['effect-menu-slide', 'pagedim-black'],
			 navbar: {
				 title: 'Все услуги'
			 }
		}, {
			 // configuration
			 offCanvas: {
				 
			 }
		});
 });
 $(document).ready(function() {
	$("#personal-info").mmenu({
		 extensions: ['wibescreen', 'effect-menu-slide', 'pagedim-black'],
		 navbar: {
			 title: '<div class="number-user dark px18">+7 900 900 90 90</div><div class="balance-sum dark px16">Баланс: <span class="balance-sum-number bold px18">1200 р.</span></div>'
		 }
	}, {
		 // configuration
		 offCanvas: {
			 
		 }
	});
});

});
