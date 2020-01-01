let objects;

function onload(){
    let cnvs = document.getElementById("myCanvas");

    cnvs.width = '944';
    cnvs.height = '500';
    cnvs.style.left = '0';
    cnvs.style.top = '0';

    let ctx = cnvs.getContext("2d");

    v.addEventListener("play", function() {i = window.setInterval(function() {ctx.drawImage(v,0,0,944,500)},20);}, false);
    v.addEventListener("pause", function() {window.clearInterval(i);}, false);
    v.addEventListener("ended", function() {clearInterval(i);}, false);

    cnvs.addEventListener('mousedown', function(e) {
        getCursorPosition(cnvs, e)
    })

}


function Draw(img,ctx,x,y,x1,y1,name){
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.font = "26px Arial";

    // Kare içine al ve etiketi yapıştır.
    ctx.rect(x, y, x1, y1); // kare içinde al
    ctx.fillText(myobjects[name].name, x+(x1/3), y+30); // etiketi yapıştır
    // Ciz
    ctx.stroke();
}



function scanFrame() {
    objects = null;
    let canvas = document.getElementById('myCanvas');
    cocoSsd.load().then(model => {
        model.detect(canvas).then(predictions => {
            objects = predictions;
            predictions.forEach(obj => {
                let coords = obj.bbox;
                this.Draw(canvas,canvas.getContext("2d"),...coords,obj.class);
            });
            console.log(predictions)
        });
    });
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    objects.forEach(obj=>{
        let coords = obj.bbox;
        if((x > coords[0] && x < (coords[0]+coords[2])) && (y > coords[1] && y < (coords[1]+coords[3])) ){
            let url = myobjects[obj.class].url;
            window.open(url, '_blank');
        }
    });
    console.log("x: " + x + " y: " + y)
}

