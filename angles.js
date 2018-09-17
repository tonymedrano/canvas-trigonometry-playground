window.onload = () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 200;
    const speed = .01;
    const numObjects = 30;
    const slice = Math.PI * 2 / numObjects
    let angle = 0;
    let x, y;

    const _render = () => {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < numObjects; i++) {
            let angledot = i * slice + angle;
            let xdot = centerX + Math.cos(angledot) * radius;
            let ydot = centerY + Math.sin(angledot) * radius;

            ctx.beginPath(); //. Yellow lines
            ctx.moveTo(centerX,centerY);
            ctx.lineTo(xdot, ydot);
            ctx.strokeStyle = 'yellow';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath(); //. Green circles
            ctx.arc(xdot, ydot, 5, 0, Math.PI * 2, false);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();
        }

        x = centerX + Math.cos(-angle) * radius;
        y = centerY + Math.sin(-angle) * radius;

        ctx.beginPath(); //. Red circle
        ctx.arc(x, y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.closePath();
        ctx.fill();

        angle += speed;
        requestAnimationFrame(_render);
    }

    _render();
}