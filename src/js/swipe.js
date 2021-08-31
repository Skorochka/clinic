let offset = 0;
let width 
const sliderLine = document.querySelector('.slider-line')
const btnLeft = document.querySelector('.hero__content-btn-left')

const btnRigth = document.querySelector('.hero__content-btn-right')


btnLeft.addEventListener('click', onBtnLeftClick)
 btnRigth.addEventListener('click', onBtnRightClick)


width = document.querySelector('.slider').offsetWidth;
 

function onBtnRightClick() {
   
    offset = offset + width;
    if (offset > (width * 4)) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';

}

function onBtnLeftClick() {
   

    offset = offset - width;
    if (offset < 0) {
        offset = (width * 4)
    }
    sliderLine.style.left = -offset + 'px';
}

