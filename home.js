const NAV_BUTTON = document.querySelector('.hamburger');
const NAV = document.querySelector('nav');

NAV_BUTTON.addEventListener('click', openNav);

function openNav(){
    NAV_BUTTON.classList.toggle('open-nav')
    NAV.classList.toggle('open');
}

const TESTIMONIES_CONTAINER = document.querySelector('.testimonies');

let testimoniesPosition = document.querySelector('.testimonies__content').getBoundingClientRect().width

// Array.from(document.querySelectorAll('.testimonies__content')).forEach((testimony) => {console.log(testimony.getBoundingClientRect().width)})

// document.querySelector('')
// let position = TESTIMONIES_CONTAINER.getBoundingClientRect() / 

setInterval(() => {
    setTimeout(
        () => {
            TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;
    
            setTimeout(
                () => {
                    TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;

                    setTimeout(
                        () => {
                            TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + 40}px)`;

                            setTimeout(
                                () => {
                                    TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + testimoniesPosition + 60}px)`;

                                    setTimeout(
                                        () => {
                                            TESTIMONIES_CONTAINER.style.transform = `translateX(0px)`;
                                    
                                        }, 3000
                                    )
                            
                                }, 3000
                            )
                    
                        }, 3000
                    )
            
                }, 3000
            )
    
        }, 3000
    )
}, 15000);

// console.log(TESTIMONIES_CONTAINER.getBoundingClientRect())

// console.log(testimoniesPosition)