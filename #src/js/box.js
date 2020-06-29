const box = (boxSelector) => {  

    const boxSmall = document.querySelectorAll(boxSelector);

    boxSmall.forEach(item => {

        item.addEventListener('mouseover', () => {
            const textSmall = item.querySelector('.recom__title');
            const recomLink = item.querySelector('.recom__hover');
            
            textSmall.style.textDecoration = 'underline';
            textSmall.style.color = '#0fb0e1';
            recomLink.style.opacity = '1';
        });

        item.addEventListener('mouseout', () => {

            const textSmall = item.querySelector('.recom__title');
            const recomLink = item.querySelector('.recom__hover');

            textSmall.style.textDecoration = 'none';
            textSmall.style.color = '#252525';
            recomLink.style.opacity = '0';
        });

    });
}