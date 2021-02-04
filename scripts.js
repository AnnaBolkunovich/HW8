let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
let title = document.createElement('title');
title.innerHTML = 'Action';
console.log(title);
console.log(metaUtf8);
document.head.appendChild(title);
document.head.appendChild(metaUtf8);
let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);
let h2 = document.createElement('h2');
h2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
document.body.appendChild(h2);
console.log(h2);
let div1 = document.createElement('div');
div1.classList.add('cards');
document.body.appendChild(div1);
let div2 = document.createElement('div');
div2.classList.add('freelancer');
div1.appendChild(div2);
let div3 = document.createElement('div');
div3.classList.add('studio');
div1.appendChild(div3);
//Блок freelancer
let cardHead3 = document.createElement('h3');
cardHead3.innerHTML = 'FREELANCER';
div2.appendChild(cardHead3);
let cardHead2 = document.createElement('h2');
cardHead2.innerHTML = 'Initially <br> designed to ';
div2.appendChild(cardHead2);
let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this <br> mistaken idea of denouncing';
div2.appendChild(p1);
let button1 = document.createElement('button');
button1.innerHTML = 'START HERE';
div2.appendChild(button1);
//Блок studio
let cardHead32 = document.createElement('h3');
cardHead32.innerHTML = 'STUDIO';
div3.appendChild(cardHead32);
let cardHead22 = document.createElement('h2');
cardHead22.innerHTML = 'Initially <br> designed to ';
div3.appendChild(cardHead22);
let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this <br> mistaken idea of denouncing';
div3.appendChild(p2);
let button2 = document.createElement('button');
button2.innerHTML = 'START HERE';
div3.appendChild(button2);
//Стили элементов
h1.style.cssText = `font-family: Arvo;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 48px;
text-align: center;
color: #212121;
margin-top: 130px`;
h2.style.cssText = `font-family: 'Open Sans', sans-serif;
font-weight: normal;
font-size: 14px;
line-height: 26px;
text-align: center;
color: #9FA3A7;
margin-bottom: 40px`;
div1.style.cssText = `display: flex; justify-content: center; margin-bottom: 130px`
div2.style.cssText = `padding: 80px 90px;
border: 1px solid #E5E5E5;
border-radius: 3px 0 0 3px;`
cardHead3.style.cssText = `font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: 2.4px;
color: #9FA3A7;`
cardHead2.style.cssText = `font-family: Arvo;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 46px;
text-align: center;
color: #212121;`
p1.style.cssText = `font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 22px;
text-align: center;
color: #9FA3A7;`
button1.style.cssText = `border: 3px solid #FFC80A;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: 2.4px;
color: #212121;
padding: 20px 35px;
border-radius: 35px;
outline: none;
margin: 40px auto 0;
background: #fff;`
//Блок studio
div3.style.cssText = `background: #8F75BE;
padding: 80px 90px;
border: 1px solid #8F75BE;
border-radius: 0 3px 3px 0;`
cardHead32.style.cssText = `font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: 2.4px;
color: #FFC80A;`
cardHead22.style.cssText = `font-family: Arvo;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 46px;
text-align: center;
color: #FFFFFF;`
p2.style.cssText = `font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 22px;
text-align: center;
color: #FFFFFF;`
button2.style.cssText = `border: 3px solid #FFC80A;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: 2.4px;
color: #FFFFFF;
padding: 20px 35px;
border-radius: 35px;
outline: none;
margin: 40px auto 0;
background: #8F75BE;`