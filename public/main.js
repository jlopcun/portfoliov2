const $id = (el) => document.getElementById(el);

const $langChanger = $id('langChanger'),
$writingAnimation = $id('writingAnimation'),
RootStylesGet = window.getComputedStyle(document.body),
RootStylesSet = document.documentElement.style,
$animationWrapper = $id('animationWrapper');

const changeLang = (langToken) =>{
    if(langToken){
        const documentTexts = document.querySelectorAll('[data-text]');
        documentTexts.forEach(async el=>{
            const fetching = await fetch('assets/translate.json'),
            json = await fetching.json()
            el.textContent = json[langToken][el.dataset.text]
        })
}}

const ChangeWritingAnimationContent = () =>{
    const createElement = (content) =>{
        RootStylesSet.setProperty("--animationActual",`moveAnimation 2s steps(${content.length}) forwards`)
            newElement.textContent = content
            $animationWrapper.replaceChild(newElement,$animationWrapper.querySelector('.pageHeader__bottom--animateWrapper__title'))
    }
    const newElement = document.createElement('h2');
    RootStylesSet.setProperty('--animationDelay',"0s")
    newElement.classList.add('pageHeader__bottom--animateWrapper__title');
    newElement.setAttribute('id','writingAnimation');
    const actions = {
        'moveAnimation 2s steps(12) forwards':()=>{
            createElement('Frontend')
        },
        'moveAnimation 2s steps(8) forwards':()=>{
            createElement('JavaScript')
        },
        'moveAnimation 2s steps(10) forwards':()=>{

            createElement('HTML')
        },
        'moveAnimation 2s steps(4) forwards':()=>{
  
            createElement('CSS')
        },
        'moveAnimation 2s steps(3) forwards':()=>{
            createElement('Sass...')
        },
        'moveAnimation 2s steps(7) forwards':()=>{
            createElement(`I'm Jlopcuns`)
        }
    }

    if(actions[RootStylesGet.getPropertyValue('--animationActual')]) actions[RootStylesGet.getPropertyValue('--animationActual').trim()]()
}

window.addEventListener('DOMContentLoaded',()=>{
    $langChanger.addEventListener('click',e=>{
        changeLang(e.target.dataset.lang);
    })
    $animationWrapper.addEventListener('animationend',()=>{
        ChangeWritingAnimationContent();
    })
})