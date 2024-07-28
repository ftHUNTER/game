const canva = document.getElementsByClassName('Mycanva')[0];
const ctx = canva.getContext("2d");
x = canva.width / 2
y = canva.height / 2
ax = 2
ay = 0
r1y = 0
r2y = 0



document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown')
        event.preventDefault();
    if (event.key == 'ArrowUp') {
        r1y -= 10;
    } else if (event.key == 'ArrowDown') {
        r1y += 10;
    }else if (event.key == 'w') {
        r2y -= 10;
    }else if (event.key == 's') {
        r2y += 10;
    }
});


function game()
{
    x += ax
    y += ay
    ctx.clearRect(0, 0, canva.width, canva.height);
    ctx.fillStyle = "black"
    ctx.fillRect(0,r2y,4,35)
    ctx.fillRect(canva.width - 4,r1y,4,35);

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
    if(x > canva.width  || x < 0  ){
        console.log("you lossssssssssssssssssssseeeeeeeeeeeeeeeeeeee")
        x = canva.width / 2
        y = canva.height / 2 
    }
    console.log("y = ", y, "r1y = " ,r1y)
    if(y + 2  > r1y && y - 2 < r1y )
        ax = -ax
    if(y > canva.height - 5  || y < 0  + 5)
        ay = 0

    requestAnimationFrame(game);
}
function toggleClass() {
    canva.classList.toggle('test');
}

game()

setInterval(toggleClass, 2000);
