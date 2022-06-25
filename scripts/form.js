export {validateForm, submitForm}
function validateForm(form){
    Array.from(form.querySelectorAll('[data-analit]')).forEach(el=>{
       if (!new RegExp(el.pattern).test(el.value) && !form.querySelector(`[data-from=${el.name}`)){
       const span = document.createElement('span')
       span.classList.add('inputFieldWrong')
       span.textContent = el.title
       span.dataset.from = el.name
       span.dataset.text = `form__${el.name}--alert`
       el.insertAdjacentElement('afterend',span)
       }
       else if(new RegExp(el.pattern).test(el.value) && form.querySelector(`[data-from=${el.name}`)) form.querySelector(`[data-from=${el.name}`).remove()
    })
}

async function submitForm(formData){
    try{
        const fetching = await fetch('https://formsubmit.co/ajax/jlopcun@gmail.com',{
            method:'POST',
            body:formData
        })
        const json = await fetching.json()
        console.log(json)
        if(!fetching.ok) throw {}
        Array.from(document.getElementById('contactForm').querySelectorAll('.contact__form--field,.contact__form--textArea')).forEach(el=>{
            el.value=""
            el.textContent = ""
        })
    }catch(err){
        alert('Ha ocurrido un error al enviar el formulario')
    }
}