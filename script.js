let rotationBtn = document.querySelector('.rotation-btn');
let sideRowBtn = document.querySelector('.side-row');

function rotation() {
    if (rotationBtn.style.transform === 'rotate(0deg)' && sideRowBtn.style.transform === 'translate(-16rem)'){
        rotationBtn.style.transform = 'rotate(360deg)';
        rotationBtn.style.transition = 'all 1s';
        sideRowBtn.style.transform = 'translate(0rem)';
        sideRowBtn.style.transition = 'transform 0.8s ease-in';
    } else {
      rotationBtn.style.transform = 'rotate(0deg)';
        sideRowBtn.style.transform = 'translate(-16rem)';
        sideRowBtn.style.transition = 'transform 0.8s ease-in';
    }

}