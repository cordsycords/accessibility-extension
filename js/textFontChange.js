$(function () {
	chrome.storage.sync.get('options', function (data) {
		let tags = ['body', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

		for (const tag of tags) {
			$(tag).css('font-family', data.options.textFontChangeValue);
		}

		var existing_classes = [];
		var existing_fonts = [];
		$('body').find('*').each(function () {
				if ($(this)[0].className && typeof ($(this)[0].className) === 'string') {
					let classes = $(this)[0].className.split(' ');
					for (const c of classes) {
						if (!existing_classes.includes(c)) {
							let elems = document.getElementsByClassName($(this)[0].className);
							if (elems.length > 0) {
								let style = window.getComputedStyle(elems[0]);
								existing_classes.push(c);
								if(style.fontFamily !== data.options.textFontChangeValue) {
									$('.' + c).css('font-family', data.options.textFontChangeValue)
								}
								
							}

						}
					}
				}			
		});

		console.log(existing_classes);
		console.log(existing_fonts);
	});
});