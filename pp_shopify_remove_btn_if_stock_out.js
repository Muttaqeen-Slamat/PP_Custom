// only to be used on the console. 
// sees if there is a innerHTML that has sold out and then removes the customize button.

if(document.getElementsByClassName('price price--large price--sold-out price--show-badge')[0].innerHTML || document.getElementsByClassName('price price--large price--sold-out price--on-sale price--show-badge')[0].innerHTML){
    document.querySelector('#pp_main_btn_sec').classList.add('hidden')
    console.log('Removed through adding a class of hidden if sold out exists')
}