export {observerAnimations}


const observerAnimations = () =>{
    const cb = (entries) =>{
        entries.forEach(el=>{
            if(el.isIntersecting) el.target.classList.add('isVisible');
            else el.target.classList.remove('isVisible')
        })
    }
    
    const elementsToAnimate = document.querySelectorAll('[data-animation]'),
    observer = new IntersectionObserver(cb,{threshold:.2});

    elementsToAnimate.forEach(el=>observer.observe(el));

}