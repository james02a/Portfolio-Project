let banner = document.querySelector('.hero-section');
let canvas = document.getElementById('dots1');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];
let arrayColors = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)'];
for (let index = 0; index < 50; index++){
    dots.push({
        x: Math.floor(Math.random()* canvas.width),
        y: Math.floor(Math.random()* canvas.height),
        size:Math.random()* 3+5,
        color:arrayColors[Math.floor(Math.random()* 5)]

    });
}
const drawDots = () =>{
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y , dot.size, 0, Math.PI*2);
        ctx.fill();
    })
   
}
drawDots();
console.log(dots);
banner.addEventListener('mousemove',(event)=>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawDots();
    let mouse ={
        x: event.pageX -banner.getBoundingClientRect().left,
        y:event.pageY -banner.getBoundingClientRect().top
    }
    dots.forEach(dot =>{
        let distance = Math.sqrt((mouse.x - dot.x)** 2 + (mouse.y - dot.y) ** 2);
   if(distance < 200){
    ctx.strokeStyle ='gray';
    ctx.lineWidth =1;
    ctx.beginPath();
    ctx.moveTo(dot.x, dot.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();

   }
    })
})
banner.addEventListener('mouseout', () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawDots();
  
})