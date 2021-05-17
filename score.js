function Score(){
    snake = new Snake();
    this.drawScore = function(){
        

        ctx.fillStyle = 'white';
        ctx.font = "1.5em Verdana";
        ctx.fillText("Score " + snake.score, canvas.width - (scale * 7), scale);
    }   
}