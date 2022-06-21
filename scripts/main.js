import {RootStylesGet,RootStylesSet,$writingAnimation,ChangeWritingAnimationContent} from "./animation.js";
import { changeLang } from "./language.js";
import { observerAnimations } from "./observer.js";
import {submitForm, validateForm} from "./form.js";

const $id = (el) => document.getElementById(el);

const $langChanger = $id('langChanger');
const $animationWrapper = $id('animationWrapper');
const $contactForm = $id('contactForm')

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
    $contactForm.addEventListener('keyup',(e)=>{
        validateForm(e.currentTarget)
    })
    $contactForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        submitForm(new FormData(e.target))
        
    })
})



