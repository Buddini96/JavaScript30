function playSound(e) {
        // Code inside this block will be executed when a key is pressed
        // The 'e' parameter represents the event object containing information about the key event
        // console.log(e. keyCode); 
    
        const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
        
        // console.log(audio);
    
        //application where each key on the keyboard corresponds to a specific sound file. 
        //When a key is pressed, the associated sound file is located and played.
    
        if (!audio) return; //stop the function from running all together
        audio.currentTime = 0; //rewind to the start
        audio.play();
    
        key.classList.add('playing');
        //console.log(key);
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if its not a transform
    // console.log(e.propertyName)
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach (key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);