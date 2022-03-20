async function captureScreen(videoElement) {
    try {
        const configDisplayMedia = {
            audio: true,
            video: true
        };
        
        const captureStream = await navigator.mediaDevices.getDisplayMedia(configDisplayMedia);
    
        videoElement.srcObject = captureStream;
        videoElement.style.width = "80%";
        videoElement.style.opacity = 1;
        videoElement.play();
    
        return captureStream;
    } catch(error) {
        const MESSAGEERROR = "Falha ao capturar a tela";
        alert(MESSAGEERROR);
        throw new Error(MESSAGEERROR);
    }
}

async function stopCaptureScreen(videoElement) {
    const tracks = videoElement.srcObject.getTracks();

    videoElement.style.width = "0";
    videoElement.style.opacity = "";

    for(let track of tracks) {
        track.stop();
    }
}