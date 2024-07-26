const canva = document.getElementsByClassName('Mycanva')[0];
const ctx = canva.getContext("2d");
    x = canva.width / 2
    y = canva.height / 2
    ax = 2
    ay = 2

function game()
{
    x += ax
    y += ay
    ctx.clearRect(0, 0, canva.width, canva.height);
    ctx.fillStyle = "black"
    ctx.fillRect(0,50,4,35)
    ctx.fillRect(canva.width - 4,50,4,35);

    ctx.beginPath();

    ctx.moveTo(canva.width / 2,0);
    ctx.lineTo(canva.width / 2,canva.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);
    ctx.fillStyle = "purple"
    ctx.lineWidth = 0;
    ctx.fill();
    ctx.stroke();
    if(x > canva.width - 10 || x < 0 + 10 )
        ax = -ax
    if(y > canva.height - 5  || y < 0  + 5)
        ay = -ay

    requestAnimationFrame(game);
}
function toggleClass() {
    canva.classList.toggle('test');
}

game()

setInterval(toggleClass, 1000);


