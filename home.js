const NAV_BUTTON = document.querySelector('.hamburger');
const NAV = document.querySelector('nav');

NAV_BUTTON.addEventListener('click', openNav);

function openNav(){
    NAV_BUTTON.classList.toggle('open-nav')
    NAV.classList.toggle('open');
    document.body.classList.toggle('nav-fixed')
}

const TESTIMONIES_CONTAINER = document.querySelector('.testimonies');

let testimoniesPosition = document.querySelector('.testimonies__content').getBoundingClientRect().width

// Array.from(document.querySelectorAll('.testimonies__content')).forEach((testimony) => {console.log(testimony.getBoundingClientRect().width)})

// document.querySelector('')
// let position = TESTIMONIES_CONTAINER.getBoundingClientRect() / 
let curr ;
function paginate(page){
    Array.from(document.querySelectorAll('.pagination > span')).forEach((item) => item.classList.remove('current'));
    Array.from(document.querySelectorAll('.pagination > span'))[page].classList.add('current');
}
paginate(0);

function moveTranslate(){
    setTimeout(
        () => {
            TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;
            curr = 1;
            paginate(curr)
    
            setTimeout(
                () => {
                    TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + 40}px)`;
                    curr = 2;
                    paginate(curr)


                    setTimeout(
                        () => {
                            TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + testimoniesPosition + 60}px)`;
                            curr = 3;
                            paginate(curr)

                            setTimeout(
                                () => {
                                    TESTIMONIES_CONTAINER.style.transform = `translateX(0px)`;
                                    curr = 0;
                                    paginate(curr)

                            
                                }, 3000
                            )
                    
                        }, 3000
                    )
            
                }, 3000
            )
    
        }, 3000
    )
}
setTimeout(() => {
    moveTranslate();

    setInterval(() => {
        moveTranslate()
    }, 12000);
}, 3000);

// console.log(TESTIMONIES_CONTAINER.getBoundingClientRect())

// console.log(testimoniesPosition)