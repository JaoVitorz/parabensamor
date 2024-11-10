document.getElementById('play-video').addEventListener('click', function() {
    // Selecionar elementos de áudio e vídeo
    const backgroundMusic = document.getElementById('background-music');
    const videoContainer = document.getElementById('video-container');
    const birthdayVideo = document.getElementById('birthday-video');

    // Parar a música de fundo
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    // Exibir o vídeo
    videoContainer.style.display = 'block';  // Torna a div de vídeo visível

    // Iniciar a reprodução do vídeo
    birthdayVideo.play();

    // Ocultar a seção de texto (mensagens de introdução)
    document.getElementById('header').style.display = 'none';
});
