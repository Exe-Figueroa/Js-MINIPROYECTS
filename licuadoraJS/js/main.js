const buttonBlender = document.querySelector('.blender-button');
const divBlender = document.querySelector('#blender');
const blenderSound = document.querySelector('#blender-sound');
const buttonBlenderSound = document.querySelector('#blender-button-sound');

/**Lo primero que hacemos es crear una variable para checkear si la licuadora está encendida o apagada */
let onOffBlender = 'apagada';
/**Luego creamos una function que va a corroborar en que estado se encuentra la licuadora y va a alternar su estado */
buttonBlender.addEventListener('click', blenderControllerStatus)
const soundsBlender=()=>{
    if(blenderSound.paused){
        buttonBlenderSound.play()
        blenderSound.play();
    }else{
        buttonBlenderSound.play()
        blenderSound.pause();
        blenderSound.currentTime=0
    }
}
function blenderControllerStatus(){
    soundsBlender()
    if (onOffBlender=='apagada'){
        onOffBlender='encendido'
        console.log('toy funcionando');
        divBlender.classList.add('active')
    }else{
        
        onOffBlender='apagada'
        console.log('i am not funkeishon (yo no funko)');
        divBlender.classList.remove('active')
    }
}