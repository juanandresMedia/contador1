let incremento = 0;

let show = document.querySelector(`.show`);
let cuerpo = document.querySelector(`.contenedor`);

document.addEventListener(`click`,(e) =>{
    console.log(e)
   
if (e.target.matches(`#decre`)) {
    incremento--
    show.innerHTML=incremento
    cuerpo.style.backgroundColor= `rgba(234,237,223)`;
       

} else if (e.target.matches(`#res`)) {
 incremento=0
    show.innerHTML=incremento
    cuerpo.style.backgroundColor= `rgba(200,237,34)`;

}else if (e.target.matches(`#incre`)) {
    incremento++
    show.innerHTML=incremento
    cuerpo.style.backgroundColor = "rgba(142, 68, 173)"
}


});


