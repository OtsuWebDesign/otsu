jQuery(function($)
		{
			//reset scrolla
			$.scrollTo(0);
			$('#wiz').click(function() { $.scrollTo($('#wizytowka'), 500); });
			$('#fws').click(function() { $.scrollTo($('#fullws'), 500); });
			$('#is').click(function() { $.scrollTo($('#istore'), 500); });
			$('#hos').click(function() { $.scrollTo($('#hosting'), 500); });
			$('#dom').click(function() { $.scrollTo($('#domain'), 500); });
			$('#seo').click(function() { $.scrollTo($('#seoo'), 500); });
        });