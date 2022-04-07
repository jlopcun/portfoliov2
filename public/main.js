import {RootStylesGet,RootStylesSet,$writingAnimation,ChangeWritingAnimationContent} from "../scripts/animation.js";
import { changeLang } from "../scripts/language.js";
import { observerAnimations } from "../scripts/observer.js";

import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const $id = (el) => document.getElementById(el);

const $langChanger = $id('langChanger');
const $animationWrapper = $id('animationWrapper');


window.addEventListener('DOMContentLoaded',()=>{
    observerAnimations()
    
    $langChanger.addEventListener('click',e=>{
        changeLang(e.target.dataset.lang);
    })
    $animationWrapper.addEventListener('animationend',()=>{
        ChangeWritingAnimationContent();
    })

    window.addEventListener('scroll',()=>{
        observerAnimations()
    })
    const  initSwiper = () =>{
        
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            effect: 'cards',
            
            direction: 'horizontal',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });
          
    }
    initSwiper()
})



