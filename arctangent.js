window.onload = () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight

    const arrowX = width / 2;
    const arrowY = height / 2;
    const speed = .1;
    let angle = 0;
    let dx, dy;

    const _render = () => {
        context.clearRect(0, 0, width, height);

        context.save();
        context.translate(arrowX, arrowY);
        context.rotate(angle);
        
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);
        context.stroke();
        context.restore();
    
        requestAnimationFrame(_render);
    }

    document.body.addEventListener('mousemove', (event) => {
        dx = event.clientX - arrowX;
        dy = event.clientY - arrowY;
        angle = Math.atan2(dy,dx);
    });

   _render();
}