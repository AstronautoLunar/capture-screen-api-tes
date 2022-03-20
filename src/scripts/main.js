buttonStartCaptureScreen.addEventListener("click", async () => {
    await captureScreen(video);
});

buttonStopCaptureScreen.addEventListener("click", async () => {
    await stopCaptureScreen(video);
});