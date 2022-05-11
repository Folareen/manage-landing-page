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

let curr ;
function paginate(page, page2){
    Array.from(document.querySelectorAll('.pagination > span')).forEach((item) => item.classList.remove('current'));

    if(page2 != undefined){
        Array.from(document.querySelectorAll('.pagination > span'))[page].classList.add('current');
        Array.from(document.querySelectorAll('.pagination > span'))[page2].classList.add('current');
    }else{
        Array.from(document.querySelectorAll('.pagination > span'))[page].classList.add('current');
    }
}
paginate(0);

if(TESTIMONIES_CONTAINER.getBoundingClientRect().width > 1534 ){
    paginate(1);
}

function moveTranslate(){
    if(TESTIMONIES_CONTAINER.getBoundingClientRect().width > 1534 ){
        paginate(1);

        setTimeout(
            () => {
                TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;
                paginate(2)
        
                setTimeout(
                    () => {
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + 40}px)`;
                        paginate(3)

                        setTimeout(
                            () => {
                                TESTIMONIES_CONTAINER.style.transform = `translateX(0px)`;
                                paginate(1)

                            }, 4000
                        )
          
                    }, 4000
                )
        
            }, 4000
        );
    }
    else {
        setTimeout(
            () => {
                TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + 20}px)`;
                paginate(1)
        
                setTimeout(
                    () => {
                        TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + 40}px)`;
                        paginate(2)
    
    
                        setTimeout(
                            () => {
                                TESTIMONIES_CONTAINER.style.transform = `translateX(-${testimoniesPosition + testimoniesPosition + testimoniesPosition + 60}px)`;
                                paginate(3)
    
                                setTimeout(
                                    () => {
                                        TESTIMONIES_CONTAINER.style.transform = `translateX(0px)`;
                                        paginate(0)
    
                                
                                    }, 4000
                                )
                        
                            }, 4000
                        )
                
                    }, 4000
                )
        
            }, 4000
        )
    }
}
setTimeout(() => {
    moveTranslate();

    setInterval(() => {
        moveTranslate()
    }, 16000);
}, 3000);