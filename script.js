function konfetiPatlat() {
    var duration = 5 * 1000; // 5 saniye
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Sayfa yüklendiğinde konfeti patlasın
window.onload = konfetiPatlat;
