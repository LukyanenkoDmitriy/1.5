let btnShow = document.querySelector('.btn-show');
let btnHide = document.querySelector('.btn-hide');
const listItemsMg = document.querySelectorAll('.brands__item:nth-last-child(-n+5)');
const listItemsLg = document.querySelectorAll('.brands__item:nth-last-child(-n+3)');
btnHide.style.display = 'none'

btnShow.addEventListener("click", function () {
    if (window.innerWidth >= 1120) {
        for (i = 0; i < listItemsLg.length; i++) {
            listItemsLg[i].style.display = 'flex';
            btnShow.style.display = 'none';
            btnHide.style.display = 'flex';
        }
    } else {
        for (i = 0; i < listItemsMg.length; i++) {
            listItemsMg[i].style.display = 'flex';
            btnShow.style.display = 'none';
            btnHide.style.display = 'flex';
        }
    }
})

btnHide.addEventListener("click", function () {
    if (window.innerWidth >= 1120) {
        for (i = 0; i < listItemsLg.length; i++) {
            listItemsLg[i].style.display = 'none';
            btnShow.style.display = 'flex';
            btnHide.style.display = 'none';
        }
    } else {
        for (i = 0; i < listItemsMg.length; i++) {
            listItemsMg[i].style.display = 'none';
            btnShow.style.display = 'flex';
            btnHide.style.display = 'none';
        }
    }
})
