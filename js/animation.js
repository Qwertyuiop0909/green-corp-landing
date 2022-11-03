const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber){
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i += 100;
        setTimeout(function() {increaseNumberAnimationStep(i, element, endNumber);}, INCREASE_NUMBER_ANIMATION_SPEED);
    }
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep(0, element, 5000);
}

/////////////////////////////////////

document.querySelector('#budget').addEventListener('change', 
function handleSelectChange(event) {
    if (event.target.value === 'other') {
        let formContainer = document.createElement("div");
        formContainer.classList.add("form__group");
        formContainer.classList.add("form__other-input");
        let input = document.createElement("input");
        input.placeholder = "Введите ваш вариант";
        input.type = "text";
        formContainer.appendChild(input);
        document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
    }

    const otherInput = document.querySelector('.form__other-input');
    
    if (event.target.value !== 'other' && otherInput) {
        document.querySelector('#form form').removeChild(otherInput);
    }
});

////////////////////////////////////

let animationInited = false;

function updateScroll() {
    let header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("header__scrolled")
    }
    else {
        header.classList.remove("header__scrolled");
    }

    ////////////////////

    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation();
    }
}
window.addEventListener("scroll", updateScroll)