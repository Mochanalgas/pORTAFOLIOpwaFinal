// Espera 3 segundos antes de ocultar la pantalla de carga
setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none'; // Oculta la pantalla de carga
    document.getElementById('main-content').style.display = 'block'; // Muestra el contenido principal
}, 1000);

document.getElementById('pause-button').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (!audio.paused) {
        audio.pause(); // Pausa el audio
        this.textContent = 'PLAY'; // Cambia el texto del botón
    } else {
        audio.play(); // Reanuda el audio
        this.textContent = 'STOP'; // Cambia el texto del botón
    }
});