// JS from the first <script> tag (auto-typing)
const text = "This website has been defaced by Junaid1337. All data on the web server, including the control panel, has been compromised. Do not interfere with Pakistan; further action will target Afghanistan’s cyber infrastructure and servers.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    // Note: I'm cleaning up the unnecessary span tag addition, as the CSS style should apply to the parent div.
    // If you specifically need the inline style on every character, the original line was:
    // document.getElementById("auto-typing-text").innerHTML += `<span style="font-weight: bold; color: black;">${text.charAt(index)}</span>`;
    // Sticking to a simpler/cleaner append since the parent is already styled:
    document.getElementById("auto-typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Adjust the speed here (in milliseconds)
  }
}

typeWriter();


// ---

// JS from the second <script> tag (audio playback)
window.addEventListener("mouseover", play);
window.addEventListener("click", play);

function play() {
  document.getElementById("a").play();
}


// ---

// JS from the third <script> tag (right-click disable)
function ejs_nodroit() {
  alert('You Want to Copy My Code :( :( i crie');
  return (false);
}
document.oncontextmenu = ejs_nodroit;
