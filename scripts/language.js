
export {changeLang}


const changeLang = (langToken) =>{
    if(langToken){
        const documentTexts = document.querySelectorAll('[data-text]');
        documentTexts.forEach(async el=>{
            const fetching = await fetch('assets/translate.json'),
            json = await fetching.json();
            (el.textContent)
            ?el.textContent = json[langToken][el.dataset.text]
            :(el.title)
            ?el.title = json[langToken][el.dataset.text]
            :el.value = json[langToken][el.dataset.text]
        })
}}