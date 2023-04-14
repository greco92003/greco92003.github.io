let text = document.getElementById('text');
let foguete = document.getElementById('foguete');
let fogo = document.getElementById('fogo');
let nuvemesq1 = document.getElementById('nuvemesq1');
let nuvemesq2 = document.getElementById('nuvemesq2');
let nuvemdir1 = document.getElementById('nuvemdir1');
let nuvemdir2 = document.getElementById('nuvemdir2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value < 500) {
    text.style.marginTop = value * 2.5 + 'px';
    foguete.style.top = value * -1.5 + 'px';
    fogo.style.top = value * -1.5 + 'px';
    nuvemdir1.style.left = value * 1.5 + 'px';
    nuvemdir2.style.left = value * 0.8 + 'px';
    nuvemesq1.style.left = value * -1.5 + 'px';
    nuvemesq2.style.left = value * -0.8 + 'px';
}
    else {
    }
})