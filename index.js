const canva = document.getElementsByClassName('Mycanva')[0];
const ctx = canva.getContext("2d");
BallX = canva.width / 2
BallY = canva.height / 2
ax = 2
ay = 0
p1y = canva.height / 2 - 17
p2y = canva.height / 2 - 17






document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown')
        event.preventDefault();
    if (event.key == 'ArrowUp') {
        if(p1y - 10 > 0)
            p1y -= 10;
        else
            p1y -= p1y 
    } else if (event.key == 'ArrowDown') {
        if(p1y + 34 + 10 < canva.height)
            p1y  += 10;
        else
            p1y += canva.height - (p1y + 34)  
    }else if (event.key == 'w') {
        if(p2y - 10 > 0)
            p2y -= 10;
        else
            p2y -= p2y 
    }else if (event.key == 's') {
        if(p2y + 34 + 10 < canva.height)
            p2y  += 10;
        else
            p2y += canva.height - (p2y + 34) 
    }
});


function game()
{
    BallX += ax
    BallY += ay
    ctx.clearRect(0, 0, canva.width, canva.height);
    ctx.fillStyle = "black"
    ctx.fillRect(0,p2y,4,35)
    ctx.fillRect(canva.width - 4,p1y,4,35);

    ctx.beginPath();

    ctx.moveTo(canva.width / 2,0);
    ctx.lineTo(canva.width / 2,canva.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(BallX,BallY,5,0,2*Math.PI);
    ctx.fillStyle = "purple"
    ctx.lineWidth = 0;
    ctx.fill();
    ctx.stroke();
    if(BallX > canva.width  || BallX < 0  ){
        console.log("you lossssssssssssssssssssseeeeeeeeeeeeeeeeeeee")
        BallX = canva.width / 2
        BallY = canva.height / 2 
        p1y = canva.height / 2 - 17,5
        p2y = canva.height / 2 - 17,5
        ay = 0
    }
    if(BallY <= p1y + 34 && BallY >= p1y && BallX > canva.width  - 10)
    {
        ax = -ax
        ay = 2
    }
    if(BallY <= p2y + 34 && BallY >= p2y && BallX < 0  + 10)
    {
        ax = -ax
        ay = 2
    }
    if(BallY > canva.height - 5  || BallY < 0  + 5)
        ay = -ay

    requestAnimationFrame(game);
}
function toggleClass() {
    canva.classList.toggle('test');
}

game()

setInterval(toggleClass, 2000);
