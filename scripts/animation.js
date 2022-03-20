export {RootStylesGet,RootStylesSet,$writingAnimation,ChangeWritingAnimationContent}


const $id = (el) => document.getElementById(el);


const RootStylesGet = window.getComputedStyle(document.body),
RootStylesSet = document.documentElement.style,
$writingAnimation = $id('writingAnimation'),
$animationWrapper = $id('animationWrapper');

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