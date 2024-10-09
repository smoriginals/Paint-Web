const canvas = document.getElementById("canva");

const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round"; 
ctx.lineCap = "round";  
ctx.lineWidth = "10";  

let isDrawing = false;
let dirX, dirY = 0;
let hue = 0;
let mDirection = true;

function Draw(e) {
    if (!isDrawing) return;
    
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.moveTo(dirX, dirY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [dirX, dirY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 500 || ctx.lineWidth <= 10) {
        mDirection = !mDirection;
    }
    if (mDirection) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [dirX, dirY] = [e.offsetX, e.offsetY];
    ctx.beginPath();
    ctx.moveTo(dirX, dirY);
});

canvas.addEventListener("mousemove", Draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);