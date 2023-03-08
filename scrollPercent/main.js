//Acá lo que vamos a hacer es armar una lógica que diga que apenas se cargue el sitio nuestro código le haga una petición al navegador para saber cada vez que se redibuja la página (osea que hace el scroll )

/**Agregamos un add event listener al window para saber cuando se carga el codigo */
let progressBar=document.querySelector('#progres');
window.addEventListener('load',  ()=>{
    progressBar
    requestAnimationFrame(crecimientoObtención)
})
function crecimientoObtención(){
    //al estilo de la barra le asignamos el procentaje de scrol
    /**para obtener el % de scroll hay que dividir el tamaño del alto del window por la resta del total del body y el total del tamaño de la ventana y a eso lo multiplicamos por 100 para obtener porcentaje */
    
    progressBar.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`;
    console.log(progressBar.style.width)
    progressBar.innerHTML= Math.ceil((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100) + '%' 
    /**luego llamamos a la funcion dentro de la misma para que se vaya actualizando */
    requestAnimationFrame(crecimientoObtención)
    //!Luego copiamos el método en el listener y listo
}