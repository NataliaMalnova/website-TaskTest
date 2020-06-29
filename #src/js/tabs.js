
const tabs = (tabsSelector, tabSelector, tabContentSelector) => {  

    const tab = document.getElementsByClassName(tabSelector);
    const tabContent = document.getElementsByClassName(tabContentSelector);
    const tabs =  document.getElementById(tabsSelector);

    hideTabsContent(1);

    tabs.onclick = function (event) {
        let target = event.target;
        if (target.className=='tab__item') {
           for (let i = 0; i < tab.length; i++) {
               if (target == tab[i]) {
                   showTabsContent(i);
                   break;
               }
           }
        }
    }

    function hideTabsContent(a) {
        for (var i=a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('whiteborder');
        }
    }
    
    function showTabsContent(b){
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
}




