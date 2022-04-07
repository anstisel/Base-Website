'use strict'

//$(document).ready( function() { samesame
$(window).on( 'load', () => {

    const bclick = document.getElementById('dark-mode');

    bclick.addEventListener('click', function() {
        
        document.body.classList.toggle('dark-mode');
        
        let currentClassName = document.body.className;

        console.log(this.textContext);
        if (currentClassName == 'dark-mode') {
            bclick.innerHTML = 'Make it light mode'
        } else {
            bclick.innerText = 'Make it dark mode'
        }
    
    });

    




}); 

