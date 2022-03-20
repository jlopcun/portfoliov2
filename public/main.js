import {RootStylesGet,RootStylesSet,$writingAnimation,ChangeWritingAnimationContent} from "../scripts/animation.js";
import { changeLang } from "../scripts/language.js";
import { observerAnimations } from "../scripts/observer.js";

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
})