const selectOpen = (search__selected) => {  

	const selectSingle = document.querySelector(search__selected);
	const selectSingleAll = document.querySelectorAll('.search__selected');
	const selectSingle_title = selectSingle.querySelector('.select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
	
	selectSingle_title.addEventListener('click', () => {
	  if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	  } else {
		selectSingleAll.forEach(item => {
			item.setAttribute('data-state', '');
		});
		selectSingle.setAttribute('data-state', 'active');
	  }
	});
	
	for (let i = 0; i < selectSingle_labels.length; i++) {
	  selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	  });
	}	
}

