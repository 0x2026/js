// Function jo audio ko chalaane ki koshish karega
function playAudio() {
    // Apne audio element ko uski ID se dhoondhein.
    // Zaroori hai ki aapke HTML ke <audio> tag ki ID 'myAudio' ho.
    // Pichle conversation mein humne 'myAudio' use kiya tha.
    // Agar aap apne HTML mein ID 'a' rakhna chahte hain, toh neeche 'myAudio' ko 'a' se badal dein.
    const audio = document.getElementById("myAudio"); 
    
    // Agar audio element milta hai aur woh ruka hua hai
    if (audio && audio.paused) {
        audio.play().catch(error => {
            console.warn("Autoplay was blocked. Browser requires user interaction.");
            console.error("Play error:", error);
        });
    }
}

// User ke mouse hilaane ya click karne par gaana chalaane ki koshish karo
// Yeh browser ki autoplay rukawaton (restrictions) ko bypass karne ka ek tareeka hai
window.addEventListener("mouseover", playAudio);
window.addEventListener("click", playAudio);


// Yeh hai woh code jo Right Click aur Context Menu ko block karta hai
function ejs_nodroit() {
    alert('You Want to Copy My Code :( :( i crie');
    // Right click menu ko aane se rokne ke liye 'false' return karte hain
    return false;
}

// Document par 'right click' (contextmenu) event ko block karne ke liye set karein
document.oncontextmenu = ejs_nodroit;
