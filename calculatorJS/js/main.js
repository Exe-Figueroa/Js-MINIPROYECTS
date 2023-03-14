window.addEventListener('load', ()=>{
    const display=document.querySelector('.calculator-display');
    const keypadButtons=document.getElementsByClassName('keypad-button');
            /**Crear una constante para guardar un array con los numeros */
    const keypadButtonsArray= Array.from(keypadButtons)
            /**Creamos un foreach para que por c/elemento del array nos imprima por consola */
    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', ()=>{
            calculator(button, display)
        })
    });
});
/**al addeventlistener de los botones le agregamos que al hacer click llamen a la function calculadora */
function calculator(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button)
            break;
    }
}
function calcular(display){
    display.innerHTML= eval(display.innerHTML)/*Toma el string, lo evalúa, lo resuelve y lo guarda en el innerhtml del display */
}
function actualizar(display, button) {
    if (display.innerHTML==0) {
        display.innerHTML='';
    }
    display.innerHTML+=button.innerHTML /**display.innerhtml=display.innerhtml + button.innerhtml */
    //Esto va  air poniendo cada número que toquemos uno al lado del otro en el display
}
function borrar(display){
    display.innerHTML=0
}