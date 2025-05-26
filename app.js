const pathname = document.location.pathname;
const slide = Number(pathname.substring(pathname.length - 6, pathname.length - 5));
let lastFrame = new Date();

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowRight' && slide != 7) {
            document.location.pathname = pathname.substring(0, pathname.length - 6) + (Number(pathname.substring(pathname.length - 6, pathname.length - 5)) + 1).toString() + '.html';
        } else if (event.key == 'ArrowLeft' && slide != 1) {
            document.location.pathname = pathname.substring(0, pathname.length - 6) + (Number(pathname.substring(pathname.length - 6, pathname.length - 5)) - 1).toString() + '.html';
        }
    });

    switch (slide) {
        case 1:
            const img = document.getElementById('screensaver');
            let x = 100, y = 100;
            let dx = 0.4, dy = 0.4;
        
            function move() {
                let dt = new Date() - lastFrame;
                lastFrame = new Date();
                const bounds = img.getBoundingClientRect();
                const w = window.innerWidth;
                const h = window.innerHeight;
                
                if (x + bounds.width >= w) {
                    dx = -Math.abs(dx);
                    x = w - bounds.width;
                } else if (x <= 0) {
                    dx = Math.abs(dx);
                    x = 0;
                }
                
                if (y + bounds.height >= h) {
                    dy = -Math.abs(dy);
                    y = h - bounds.height;
                } else if (y <= 0) {
                    dy = Math.abs(dy);
                    y = 0;
                }
                
                x += dx * dt;
                y += dy * dt;
                
                img.style.left = x + 'px';
                img.style.top = y + 'px';
                
                requestAnimationFrame(move);
            }
        
            move();
            break;
    }
});