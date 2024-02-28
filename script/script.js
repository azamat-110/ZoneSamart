
const cardControllerLeft = document.querySelector('.card__controller-btn-left'),
    cardControllerRight = document.querySelector('.card__controller-btn-right'),
    integrationsCards = document.querySelector('.integrations__cards');

let movingDistance = 0;
const cardWidth = 330;

cardControllerLeft.addEventListener('click', () => {
    movingDistance += cardWidth;
    if (movingDistance > cardWidth || movingDistance <= -cardWidth * 12) {
        movingDistance = 0;
    }
    integrationsCards.style = `transform: translateX(${movingDistance}px);`;
});

cardControllerRight.addEventListener('click', () => {
    movingDistance -= cardWidth;
    if (movingDistance >= cardWidth * 4 || movingDistance < -cardWidth * 9) {
        movingDistance = -cardWidth * 8;
    }
    integrationsCards.style = `transform: translateX(${movingDistance}px);`;
});


let cardsContainer = document.querySelector('.integrations__cards')


integration.forEach(({ descr, logo, name, type, isLogistic, isModule }) => {
    cardsContainer.innerHTML += `<div class="integration__card ">
    <div class="card__basket">
    <img src="${logo}" alt="amazon">
    <div class="basket__btn-circle">
        <div class="btn-circle__img ${isLogistic ? 'logistic__card' : isModule ? 'modules__card' : ''}"></div>
    </div>
    </div>
    <div class="integration__card-descr">
    <h2 class="card-descr__title">
        ${name}
    </h2>
    <h3 class="card-descr__subtitle">
        ${type}
    </h3>
    <p class="card-descr">
        ${descr}
    </p>
    </div>
    <a href="" class="more-btn">
    <p class="more-btn__title">
        Подробнее
    </p>
    <img src="./assets/images/arrow-right.svg" alt="arrow-right">
    </a>
    </div>`
});

const graphicTab = document.querySelectorAll('.graphic__tab');
const graphicTabContent = document.querySelectorAll('.graphic__tab-content');

for (let i = 0; i < graphicTab.length; i++) {

    graphicTab[i].addEventListener('click', (e) => {
        graphicTab[i].classList.add('active__tab');
        graphicTabContent[i].classList.add('active__tab-content');
        for (let j = 0; j < graphicTab.length; j++) {
            if (graphicTab[i] == graphicTab[j]) {
                continue;
            } else {
                graphicTab[j].classList.remove('active__tab');
                graphicTabContent[j].classList.remove('active__tab-content');
            }
        }
    })

}


// graphicTabs.classList.add('active__tab');









/*<div class="integration__card">
<div class="card__basket">
<img src="./assets/images/amazon_word.svg" alt="amazon">
<div class="basket__btn-circle">
    <div class="btn-circle__img"></div>
</div>
</div>
<div class="integration__card-descr">
<h2 class="card-descr__title">
    Amazon
</h2>
<h3 class="card-descr__subtitle">
    Маркетплейсы
</h3>
<p class="card-descr">
    Амазон — крупнейший маркетплейс
    в мире родом из США
</p>
</div>
<a href="" class="more-btn">
<p class="more-btn__title">
    Подробнее
</p>
<img src="./assets/images/arrow-right.svg" alt="arrow-right">
</a>
</div>*/

























// if (distance >= 1440 || distance < 1440) {
//     distance = 0;
// }


// if (direction === 'right') {
//     card.style.transform = 'translateX(100px)';
// } else if (direction === 'left') {
//     card.style.transform = 'translateX(-100px)';
// }

// const basketImg = document.querySelector('.basket-bg__img');
// const integrationCard = document.querySelector('.integration__card');
// let pathSrc = basketImg.getAttribute('src');

// integrationCard.addEventListener('mousemove', ()=>{
//     console.log(pathSrc);
//     pathSrc = '';
//     pathSrc = './assets/images/oval-hover.svg';
// })

// const card__basket = document.querySelector('.card__basket');
// function notHoverBasket() {
//     return `
//     <img src="./assets/images/amazon_word.svg" alt="amazon">
//     <a href="#" class="basket-bg">
//         <img class="basket-bg__img" src="./assets/images/oval.svg" alt="">
//         <div class="integration__card-basket">
//              <img src="./assets/images/basket.svg" alt="basket-btn">
//         </div>
//      </a>
//     `;
// }

// function hoverBasket() {
//     return `
//     <img src="./assets/images/amazon_word.svg" alt="amazon">
//     <a href="#" class="basket-bg__hover">
//         <img src="./assets/images/oval-hover.svg" alt="">
//         <div class="card-basket__hover">
//             <img src="./assets/images/basket-hover.svg" alt="">
//         </div>
//     </a>
//     `;
// }

// integrationCard.addEventListener('mousemove', ()=>{
//     card__basket.innerHTML = hoverBasket();
// });

// integrationCard.addEventListener('mouseout', ()=>{
//     card__basket.innerHTML = notHoverBasket();
// });

// document.addEventListener('mousemove', (e)=>{
//     console.log(e.pageX, e.pageY);
// })

// const company = document.querySelector('.amazon');
// const mapPoints = document.querySelector('.newyork__point');

// mapPoints.addEventListener('mousemove', ()=>{
//     console.log(123);
//     company.style = 'transform: scale(1);';
// });

// const psevdoPoint = document.querySelectorAll('.psevdo-point')
// const mapBig = document.querySelectorAll('.map__point-big');
// const mapMidle = document.querySelectorAll('.map__point-midle');
// const mapCompany = document.querySelectorAll('.map__point-company');

// function changeStyles() {

//     mapBig.forEach(e=>{
//         e.style = `transform:scale(1); opacity:.3;`;
//     });

//     mapMidle.forEach(e=>{
//         e.style = `transform:scale(1);`
//     })
// psevdoPoint.forEach(e => {
//     e.addEventListener('mousemove', () => {
//         console.log();

//         // mapBig.forEach(e => {
//         //     e.style  = `transform:scale(1); opacity:.3;`;
//         // });
//     });
// });
// }

// changeStyles();

// this.psevdoPoint.addEventListener('mousemove', ()=>{
//     this.mapBig.style = `transform:scale(1); opacity:.3;`;
//     this.mapMidle.style = `transform:scale(1);`;
//     this.mapCompany.style = `opacity:1;`;

// });
// this.psevdoPoint.addEventListener('mouseout', ()=>{
//     this.mapBig.style = `opacity:0`;
//     this.mapMidle.style = `opacity:0`;
//     this.mapCompany.style = `opacity:0;`;
// })


