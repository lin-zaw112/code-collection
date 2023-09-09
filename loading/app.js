function LoadingOverlayWindow(e) {
    let count = 0;
    let blur = 100;
    const h1 = document.querySelector('h1');
    const counting = setInterval(() => {
        if (count < 101) {
            h1.textContent = count + '%';
            document.body.style.backdropFilter = `blur(${blur}px)`;
            count++
            blur--
        } else {
            clearInterval(counting)
        }
    }, 20);
}
window.addEventListener('load', LoadingOverlayWindow);