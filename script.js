document.addEventListener('DOMContentLoaded', () => {
    const bird = document.getElementById('bird');
    const pipe = document.getElementById('pipe');
    let gameSpeed = 3;
    let birdPosition = 250;
    let birdGravity = 2;

    function gameLoop() {
        // Update bird position
        birdPosition += birdGravity;
        bird.style.top = birdPosition + 'px';

        // Move pipe towards the left
        const pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
        if (pipeLeft > -80) {
            pipe.style.left = pipeLeft - gameSpeed + 'px';
        } else {
            pipe.style.left = 400 + 'px';
        }

        // Check for collision
        const pipeTop = parseInt(window.getComputedStyle(pipe).getPropertyValue('top'));
        if (pipeLeft < 100 && pipeLeft > 0 && (birdPosition < pipeTop || birdPosition > (pipeTop + 200))) {
            alert('Game Over!');
            birdPosition = 250;
        }

        requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            birdGravity = -8;
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            birdGravity = 2;
        }
    });

    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }

    gameLoop();
});
